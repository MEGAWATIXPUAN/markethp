"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

export function BuyNowButton() {
  const { toast } = useToast();

  const handleBuyNow = () => {
    toast({
      title: "Purchase Successful!",
      description: "Thank you for your order. We'll process it shortly.",
    });
  };

  return (
    <Button
      size="lg"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      onClick={handleBuyNow}
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      Buy Now
    </Button>
  );
}
