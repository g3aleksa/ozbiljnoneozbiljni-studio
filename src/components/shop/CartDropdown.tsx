import { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

export function CartDropdown() {
  const [open, setOpen] = useState(false);
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("sr-RS", {
      style: "currency",
      currency: "RSD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    toast({
      title: "Narudžbina poslata!",
      description: "Hvala na kupovini. Uskoro ćete dobiti email potvrdu.",
    });
    clearCart();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Otvori korpu"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
              {totalItems > 9 ? "9+" : totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-card border-border flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingCart className="h-5 w-5" />
            Korpa ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">Korpa je prazna</p>
            <p className="text-muted-foreground text-sm mt-1">
              Dodaj proizvode iz prodavnice
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-4 p-3 rounded-xl bg-secondary/50 border border-border"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm line-clamp-1">
                      {item.product.name}
                    </h4>
                    {(item.selectedSize || item.selectedColor) && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.selectedSize && `Veličina: ${item.selectedSize}`}
                        {item.selectedSize && item.selectedColor && " • "}
                        {item.selectedColor && `Boja: ${item.selectedColor}`}
                      </p>
                    )}
                    <p className="text-primary font-bold mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Ukupno:</span>
                <span className="text-2xl font-bold text-foreground">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 gap-2"
                size="lg"
                onClick={handleCheckout}
              >
                Naruči
              </Button>
              <Button
                variant="ghost"
                className="w-full text-muted-foreground"
                onClick={clearCart}
              >
                Isprazni korpu
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
