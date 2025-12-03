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
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title text-foreground mb-4">
            UNSERE <span className="text-primary">BOXEN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Fertige Überraschungsboxen zum sofort Bestellen oder individuell nach Ihren Wünschen zusammengestellt.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-muted-foreground font-display text-2xl">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
