import { useState } from "react";
import samplePortrait1 from "@/assets/sample-portrait-1.jpg";
import samplePortrait2 from "@/assets/sample-portrait-2.jpg";

const featuredWorks = [
  {
    id: 1,
    image: samplePortrait1,
    title: "Portrait Series",
    category: "Professional Portraits",
    description: "Capturing the essence of personality through light and shadow"
  },
  {
    id: 2,
    image: samplePortrait2,
    title: "Fine Art Collection",
    category: "Artistic Vision",
    description: "Timeless elegance meets modern artistry"
  }
];

const FeaturedWork = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-elegant mb-6">
            Featured Work
          </h2>
          <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Each photograph tells a unique story, crafted with artistic vision and technical precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-500"
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay Content */}
              <div className={`absolute inset-0 bg-gradient-overlay flex items-end p-8 transition-opacity duration-300 ${
                hoveredWork === work.id ? "opacity-100" : "opacity-0"
              }`}>
                <div className="text-text-elegant">
                  <p className="font-sans text-sm uppercase tracking-widest text-accent mb-2">
                    {work.category}
                  </p>
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    {work.title}
                  </h3>
                  <p className="font-sans text-text-muted leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;