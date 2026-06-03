import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/lib/products";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    setIsAdded(true);
    toast.success(`${product.title} wurde zum Warenkorb hinzugefügt`, {
      position: "top-center",
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border card-hover">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 transition-colors group-hover:text-primary">
          {product.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-primary">
            {product.price.currencyCode} {parseFloat(product.price.amount).toFixed(0)}
          </div>

          <Button
            onClick={handleAddToCart}
            variant={isAdded ? "accent" : "default"}
            className="transition-all"
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Hinzugefügt
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                In den Warenkorb
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
