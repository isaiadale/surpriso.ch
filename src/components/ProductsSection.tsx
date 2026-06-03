import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { CustomBoxCard } from "@/components/CustomBoxCard";

export const ProductsSection = () => {
  return (
    <section id="produkte" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Unsere Surpriso-Boxen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Einfach bestellen, Spass haben. Jede Box enthält einen Sticker und eine Karte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <CustomBoxCard />
        </div>
      </div>
    </section>
  );
};
