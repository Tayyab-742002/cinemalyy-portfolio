import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-elegant mb-6">
            Let's Create Together
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="font-sans text-xl text-text-muted leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your project 
            and discuss how we can create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border shadow-card">
              <h2 className="font-serif text-3xl font-bold text-text-elegant mb-8">
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-sm uppercase tracking-widest text-text-muted mb-3 block">
                      First Name
                    </label>
                    <Input 
                      className="bg-input border-border text-text-elegant placeholder:text-muted-foreground  focus:ring-accent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm uppercase tracking-widest text-text-muted mb-3 block">
                      Last Name
                    </label>
                    <Input 
                      className="bg-input border-border text-text-elegant placeholder:text-muted-foreground  focus:ring-accent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-sans text-sm uppercase tracking-widest text-text-muted mb-3 block">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    className="bg-input border-border text-text-elegant placeholder:text-muted-foreground  focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="font-sans text-sm uppercase tracking-widest text-text-muted mb-3 block">
                    Project Type
                  </label>
                  <Input 
                    className="bg-input border-border text-text-elegant placeholder:text-muted-foreground  focus:ring-accent"
                    placeholder="Portrait Session, Commercial, Event, etc."
                  />
                </div>
                
                <div>
                  <label className="font-sans text-sm uppercase tracking-widest text-text-muted mb-3 block">
                    Message
                  </label>
                  <Textarea 
                    rows={6}
                    className="bg-input border-border text-text-elegant placeholder:text-muted-foreground  focus:ring-accent resize-none"
                    placeholder="Tell me about your vision, timeline, and any specific requirements..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-sans uppercase tracking-widest py-4 shadow-glow hover:shadow-elegant transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-text-elegant mb-8">
                  Get in Touch
                </h2>
                <p className="font-sans text-text-muted leading-relaxed mb-8">
                  I'm always excited to collaborate on new projects. Whether you're looking for 
                  professional portraits, fine art photography, or commercial work, let's discuss 
                  how we can bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-sm uppercase tracking-widest text-text-muted">Email</p>
                    <p className="font-sans text-text-elegant">elena@elenavoss.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-sm uppercase tracking-widest text-text-muted">Phone</p>
                    <p className="font-sans text-text-elegant">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-sm uppercase tracking-widest text-text-muted">Studio</p>
                    <p className="font-sans text-text-elegant">New York City, NY</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="font-serif text-xl font-bold text-text-elegant mb-6">
                  Follow My Work
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all duration-300 hover:shadow-glow"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card className="p-6 bg-accent/5 border-accent/20">
                <h3 className="font-serif text-lg font-bold text-text-elegant mb-3">
                  Response Time
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  I typically respond to inquiries within 24 hours. For urgent requests, 
                  please call directly or mention "urgent" in your message subject.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;