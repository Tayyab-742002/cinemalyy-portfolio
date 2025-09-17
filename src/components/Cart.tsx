import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface CartProps {
  cart: ReturnType<typeof useCart>;
}

const Cart = ({ cart }: CartProps) => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = cart;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-border text-text-muted hover:text-text-elegant hover:border-accent"
        >
          <ShoppingCart size={20} />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-card border-border">
        <SheetHeader>
          <SheetTitle className="text-text-elegant font-serif text-2xl">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart size={48} className="mx-auto text-text-muted mb-4" />
                <p className="text-text-muted font-sans">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif text-text-elegant font-semibold">{item.name}</h4>
                      <p className="text-sm text-text-muted">{item.category}</p>
                      <p className="font-sans text-accent font-semibold">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={12} />
                      </Button>
                      <span className="w-8 text-center text-text-elegant">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={12} />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 ml-2 text-red-500 hover:text-red-600"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-lg text-text-elegant">Total:</span>
                  <span className="font-serif text-xl font-bold text-accent">${getTotalPrice()}</span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-sans uppercase tracking-wider">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;