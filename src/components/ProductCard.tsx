import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Plus } from "lucide-react";
import { ShopifyProduct, CartItem } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useState } from "react";

import sweetFunImage from "@/assets/sweet-fun-box.jpg";
import italianImage from "@/assets/italian-box.jpg";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const { node } = product;
  const price = node.priceRange.minVariantPrice;
  const variant = node.variants.edges[0]?.node;
  const shopifyImage = node.images.edges[0]?.node?.url;
  
  const getFallbackImage = () => {
    if (node.title.toLowerCase().includes("sweet") || node.title.toLowerCase().includes("fun")) {
      return sweetFunImage;
    }
    if (node.title.toLowerCase().includes("italian")) {
      return italianImage;
    }
    return sweetFunImage;
  };

  const image = shopifyImage || getFallbackImage();

  const handleAddToCart = () => {
    if (!variant) return;

    const cartItem: CartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    };

    addItem(cartItem);
    setIsAdded(true);
    toast.success(`${node.title} hinzugefügt`, {
      position: "top-center",
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden card-hover">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={node.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg leading-tight uppercase">
            {node.title}
          </h3>
          <span className="font-display text-xl text-primary whitespace-nowrap">
            {price.currencyCode} {parseFloat(price.amount).toFixed(0)}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {node.description}
        </p>
        
        <Button 
          onClick={handleAddToCart} 
          variant={isAdded ? "secondary" : "default"}
          size="sm"
          className="w-full uppercase text-xs font-bold tracking-wider"
        >
          {isAdded ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              HINZUGEFÜGT
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-1" />
              IN DEN WARENKORB
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
