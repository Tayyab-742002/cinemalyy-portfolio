import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ShoppingCart } from "lucide-react";

interface PresetPreviewProps {
  preset: {
    id: number;
    name: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    price: string;
    category: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

const PresetPreview = ({ preset, isOpen, onClose, onAddToCart }: PresetPreviewProps) => {
  if (!preset) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-text-elegant font-serif text-2xl">
            {preset.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before/After Comparison */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
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
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-sans uppercase tracking-wider">
                    After
                  </div>
                </div>
              </div>
              
              {/* Divider Line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-accent opacity-60"></div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="font-sans text-sm uppercase tracking-widest text-accent">
                {preset.category}
              </span>
              <h3 className="font-serif text-3xl font-bold text-text-elegant mt-2">
                {preset.name}
              </h3>
              <p className="font-sans text-text-muted mt-4 leading-relaxed">
                {preset.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-bold text-text-elegant">
                  {preset.price}
                </span>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-sans uppercase tracking-wider"
                  onClick={onAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-border text-text-muted hover:text-text-elegant hover:border-accent"
                >
                  <Download size={18} className="mr-2" />
                  Download Sample
                </Button>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="font-serif text-lg text-text-elegant mb-3">What's Included:</h4>
              <ul className="space-y-2 text-text-muted font-sans">
                <li>• Lightroom Preset (.lrtemplate)</li>
                <li>• Photoshop Action (.atn)</li>
                <li>• Installation Instructions</li>
                <li>• Video Tutorial</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PresetPreview;