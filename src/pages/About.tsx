import Navigation from "@/components/Navigation";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-elegant leading-tight">
                Behind the Lens
              </h1>
              <div className="w-24 h-1 bg-gradient-accent"></div>
              <p className="font-sans text-xl text-text-muted leading-relaxed">
                I'm Elena Voss, a professional photographer with over a decade of experience 
                capturing the beauty and complexity of human emotions through portraiture and fine art photography.
              </p>
            </div>
            
            <div className="relative group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={aboutPortrait}
                  alt="Elena Voss Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent opacity-20 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-text-elegant mb-6">
              My Journey
            </h2>
            <div className="w-16 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-text-elegant">
                Artistic Vision
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                My approach to photography is rooted in the belief that every person has a unique story to tell. 
                Through careful composition, dramatic lighting, and an eye for authentic moments, I create images 
                that transcend the ordinary.
              </p>
              <p className="font-sans text-text-muted leading-relaxed">
                Whether working in my studio or on location, I strive to create an environment where my subjects 
                feel comfortable and confident, allowing their true personality to shine through.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-text-elegant">
                Professional Excellence
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                With certifications from the Professional Photographers of America and features in publications 
                like Vogue and Harper's Bazaar, I bring both technical expertise and artistic sensibility to every project.
              </p>
              <p className="font-sans text-text-muted leading-relaxed">
                From intimate portrait sessions to large-scale commercial projects, I approach each assignment 
                with the same level of dedication and attention to detail that has defined my career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-text-elegant mb-6">
              Specializations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait Photography",
                description: "Capturing the essence of personality through professional headshots and artistic portraits"
              },
              {
                title: "Fine Art Photography",
                description: "Creating timeless pieces that blend technical mastery with artistic vision"
              },
              {
                title: "Commercial Work",
                description: "Professional photography services for brands, events, and editorial projects"
              }
            ].map((skill, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group">
                <h3 className="font-serif text-xl font-bold text-text-elegant mb-4 group-hover:text-accent transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="font-sans text-text-muted leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;