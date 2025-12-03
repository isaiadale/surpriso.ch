import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Plus } from "lucide-react";
import { ShopifyProduct, CartItem } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useState } from "react";

// Import fallback images
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
  
  // Use fallback images if no Shopify image
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
    toast.success(`${node.title} wurde zum Warenkorb hinzugefügt`, {
      position: "top-center",
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-card border-2 border-border overflow-hidden card-hover">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={node.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-display text-2xl md:text-3xl leading-tight uppercase">
            {node.title}
          </h3>
          <span className="font-display text-3xl text-primary whitespace-nowrap">
            {price.currencyCode} {parseFloat(price.amount).toFixed(0)}
          </span>
        </div>
        
        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {node.description}
        </p>
        
        <Button 
          onClick={handleAddToCart} 
          variant={isAdded ? "secondary" : "default"}
          size="lg"
          className="w-full"
        >
          {isAdded ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              HINZUGEFÜGT
            </>
          ) : (
            <>
              <Plus className="h-5 w-5 mr-2" />
              IN DEN WARENKORB
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
