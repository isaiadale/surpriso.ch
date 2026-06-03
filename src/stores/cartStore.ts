import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createStripeCheckoutSession } from '@/lib/stripe';
import type { CartItem } from '@/lib/products';

export type { CartItem };

interface CartStore {
  items: CartItem[];
  checkoutUrl: string | null;
  isLoading: boolean;

  addItem: (item: CartItem) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  setCheckoutUrl: (url: string) => void;
  setLoading: (loading: boolean) => void;
  createCheckout: () => Promise<void>;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      checkoutUrl: null,
      isLoading: false,

      addItem: (item) => {
        const { items } = get();
        const existing = items.find(i => i.productId === item.productId);

        if (existing) {
          set({
            items: items.map(i =>
              i.productId === item.productId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...items, item] });
        }
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map(item =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        });
      },

      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.productId !== productId) });
      },

      clearCart: () => {
        set({ items: [], checkoutUrl: null });
      },

      setCheckoutUrl: (checkoutUrl) => set({ checkoutUrl }),
      setLoading: (isLoading) => set({ isLoading }),

      createCheckout: async () => {
        const { items, setLoading, setCheckoutUrl } = get();
        if (items.length === 0) return;

        setLoading(true);
        try {
          const url = await createStripeCheckoutSession(items);
          setCheckoutUrl(url);
        } catch (error) {
          console.error('Failed to create checkout:', error);
          throw error;
        } finally {
          setLoading(false);
        }
      },
    }),
    {
      name: 'surprisebox-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
