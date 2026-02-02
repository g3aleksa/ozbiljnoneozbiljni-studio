import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, categories, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("sve");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "sve") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Prodavnica</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nosi OzbiljnoNeozbiljni stil. Kvalitetan merch za prave fanove.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-primary hover:bg-primary/90"
                  : "border-border hover:border-primary"
              }
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nema proizvoda u ovoj kategoriji.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, product.sizes?.[0], product.colors?.[0]);
    toast({
      title: "Dodato u korpu!",
      description: `${product.name} je dodat u vašu korpu.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("sr-RS", {
      style: "currency",
      currency: "RSD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.article
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              <Sparkles className="h-3 w-3" />
              Novo
            </span>
          )}
          {product.originalPrice && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold">
              <Tag className="h-3 w-3" />
              Sniženo
            </span>
          )}
        </div>

        {product.isSoldOut && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground font-semibold">
              Rasprodato
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-primary text-xs font-medium uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        {/* Sizes */}
        {product.sizes && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={product.isSoldOut}
            className="gap-1 bg-primary hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Dodaj</span>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
