import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { ShopifyProduct, CartItem } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useState } from "react";

// Import fallback images
import sweetFunImage from "@/assets/sweet-fun-box.jpg";
import italianImage from "@/assets/italian-box.jpg";
import goodieFunImage from "@/assets/goodie-fun-box.jpg";

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
  
  // Use fallback images if no Shopify image
  const getFallbackImage = () => {
    const title = node.title.toLowerCase();
    if (title.includes("goodie") && title.includes("fun")) {
      return goodieFunImage;
    }
    if (title.includes("sweet") || title.includes("fun")) {
      return sweetFunImage;
    }
    if (title.includes("italian")) {
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
    toast.success(`${node.title} wurde zum Warenkorb hinzugefügt`, {
      position: "top-center",
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border card-hover">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={node.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 transition-colors group-hover:text-primary">
          {node.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {node.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(0)}
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
