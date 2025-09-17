import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";
import samplePortrait1 from "@/assets/sample-portrait-1.jpg";
import samplePortrait2 from "@/assets/sample-portrait-2.jpg";

const portfolioItems = [
  {
    id: 1,
    image: samplePortrait1,
    title: "Golden Hour Portrait",
    category: "Portrait",
    description: "Capturing natural beauty in warm evening light",
    year: "2024"
  },
  {
    id: 2,
    image: samplePortrait2,
    title: "Urban Elegance",
    category: "Fashion",
    description: "Modern sophistication meets timeless style",
    year: "2024"
  },
  {
    id: 3,
    image: samplePortrait1,
    title: "Intimate Moments",
    category: "Wedding",
    description: "Preserving love stories with artistic vision",
    year: "2023"
  },
  {
    id: 4,
    image: samplePortrait2,
    title: "Corporate Excellence",
    category: "Commercial",
    description: "Professional imagery that elevates brands",
    year: "2023"
  },
  {
    id: 5,
    image: samplePortrait1,
    title: "Artistic Expression",
    category: "Fine Art",
    description: "Exploring creative boundaries through photography",
    year: "2023"
  },
  {
    id: 6,
    image: samplePortrait2,
    title: "Natural Beauty",
    category: "Portrait",
    description: "Celebrating authentic human connections",
    year: "2024"
  }
];

const categories = ["All", "Portrait", "Fashion", "Wedding", "Commercial", "Fine Art"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-elegant mb-6">
            Portfolio
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="font-sans text-xl text-text-muted leading-relaxed">
            A curated collection of visual stories, each frame capturing moments of beauty, 
            emotion, and artistic vision across various photography disciplines.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-sans uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-glow"
                    : "border-border text-text-muted hover:text-text-elegant hover:border-accent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 bg-card border border-border"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Hover Overlay */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-gradient-overlay flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <Button size="icon" className="bg-accent hover:bg-accent/80 text-accent-foreground">
                        <Eye size={20} />
                      </Button>
                      <Button size="icon" className="bg-text-elegant hover:bg-text-elegant/80 text-background">
                        <Heart size={20} />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-sm uppercase tracking-widest text-accent">
                      {item.category}
                    </span>
                    <span className="font-sans text-sm text-text-muted">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-text-elegant mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;