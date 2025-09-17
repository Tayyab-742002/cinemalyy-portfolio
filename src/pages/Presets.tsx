import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Eye, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import Cart from "@/components/Cart";
import PresetPreview from "@/components/PresetPreview";
import samplePortrait1 from "@/assets/sample-portrait-1.jpg";
import samplePortrait2 from "@/assets/sample-portrait-2.jpg";

const presets = [
  {
    id: 1,
    name: "Golden Hour",
    description: "Warm, cinematic tones perfect for portraits",
    beforeImage: samplePortrait1,
    afterImage: samplePortrait2,
    price: "$29",
    category: "Portrait"
  },
  {
    id: 2,
    name: "Moody Black & White",
    description: "Dramatic monochrome with enhanced contrast",
    beforeImage: samplePortrait2,
    afterImage: samplePortrait1,
    price: "$25",
    category: "Fine Art"
  },
  {
    id: 3,
    name: "Soft Elegance",
    description: "Subtle tones with enhanced skin smoothing",
    beforeImage: samplePortrait1,
    afterImage: samplePortrait2,
    price: "$35",
    category: "Portrait"
  },
  {
    id: 4,
    name: "Urban Edge",
    description: "Bold contrast for modern street photography",
    beforeImage: samplePortrait2,
    afterImage: samplePortrait1,
    price: "$32",
    category: "Street"
  }
];

const Presets = () => {
  const [hoveredPreset, setHoveredPreset] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [previewPreset, setPreviewPreset] = useState<typeof presets[0] | null>(null);
  const cart = useCart();
  const { toast } = useToast();

  const categories = ["All", "Portrait", "Fine Art", "Street"];

  const filteredPresets = selectedCategory === "All" 
    ? presets 
    : presets.filter(preset => preset.category === selectedCategory);

  const handleAddToCart = (preset: typeof presets[0]) => {
    const priceValue = parseInt(preset.price.replace('$', ''));
    cart.addToCart({
      id: preset.id,
      name: preset.name,
      price: preset.price,
      priceValue,
      image: preset.afterImage,
      category: preset.category
    });
    toast({
      title: "Added to cart",
      description: `${preset.name} has been added to your cart.`,
    });
  };

  const handlePreview = (preset: typeof presets[0]) => {
    setPreviewPreset(preset);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Cart */}
      <div className="fixed top-24 right-6 z-40">
        <Cart cart={cart} />
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-elegant mb-6">
            Photography Presets
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="font-sans text-xl text-text-muted leading-relaxed">
            Transform your photos with professionally crafted presets. Each preset is carefully designed 
            to enhance your images with cinematic color grading and artistic flair.
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

      {/* Presets Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPresets.map((preset) => (
              <Card
                key={preset.id}
                className="overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-500 group"
                onMouseEnter={() => setHoveredPreset(preset.id)}
                onMouseLeave={() => setHoveredPreset(null)}
              >
                {/* Before/After Image Comparison */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Before */}
                    <div className="relative overflow-hidden">
                      <img
                        src={preset.beforeImage}
                        alt={`${preset.name} - Before`}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute top-4 left-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-sans uppercase tracking-wider">
                        Before
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="relative overflow-hidden">
                      <img
                        src={preset.afterImage}
                        alt={`${preset.name} - After`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-sans uppercase tracking-wider">
                        After
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider Line */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-accent opacity-60"></div>
                  
                  {/* Hover Overlay */}
                  {hoveredPreset === preset.id && (
                    <div className="absolute inset-0 bg-gradient-overlay flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <Button 
                          size="icon" 
                          className="bg-accent hover:bg-accent/80 text-accent-foreground"
                          onClick={() => handlePreview(preset)}
                        >
                          <Eye size={20} />
                        </Button>
                        <Button size="icon" className="bg-text-elegant hover:bg-text-elegant/80 text-background">
                          <Download size={20} />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-sm uppercase tracking-widest text-accent">
                      {preset.category}
                    </span>
                    <span className="font-serif text-xl font-bold text-text-elegant">
                      {preset.price}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-text-elegant mb-3">
                    {preset.name}
                  </h3>
                  
                  <p className="font-sans text-text-muted mb-6 leading-relaxed">
                    {preset.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-accent hover:bg-accent/80 text-accent-foreground font-sans uppercase tracking-wider"
                      onClick={() => handleAddToCart(preset)}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon" className="border-border text-text-muted hover:text-text-elegant hover:border-accent">
                      <Download size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preset Preview Modal */}
      <PresetPreview 
        preset={previewPreset}
        isOpen={!!previewPreset}
        onClose={() => setPreviewPreset(null)}
        onAddToCart={() => {
          if (previewPreset) {
            handleAddToCart(previewPreset);
            setPreviewPreset(null);
          }
        }}
      />
    </div>
  );
};

export default Presets;