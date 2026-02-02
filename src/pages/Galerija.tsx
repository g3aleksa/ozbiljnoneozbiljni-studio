import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/button";
import { galleryImages, galleryCategories } from "@/data/gallery";

const Galerija = () => {
  const [activeCategory, setActiveCategory] = useState("sve");

  const filteredImages = useMemo(() => {
    if (activeCategory === "sve") return galleryImages;
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
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
              <span className="text-gradient">Galerija</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pogledajte trenutke iz našeg studija, iza kulisa i sa specijalnih
              događaja.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {galleryCategories.map((category) => (
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

          {/* Gallery Grid */}
          <GalleryGrid images={filteredImages} />

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nema slika u ovoj kategoriji.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Galerija;
