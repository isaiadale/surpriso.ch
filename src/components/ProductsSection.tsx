import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { CustomBoxCard } from "@/components/CustomBoxCard";
import { Loader2 } from "lucide-react";

export const ProductsSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(10);
        setProducts(data);
      } catch (err) {
        setError("Produkte konnten nicht geladen werden");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section id="produkte" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title text-foreground mb-3">
            UNSERE <span className="text-primary text-glow">BOXEN</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Fertige Überraschungsboxen zum sofort Bestellen oder individuell nach Ihren Wünschen.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-muted-foreground">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
            <CustomBoxCard />
          </div>
        )}
      </div>
    </section>
  );
};
