import { getProductById } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BuyNowButton } from "@/components/buy-now-button";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="flex items-center justify-center bg-card rounded-lg p-8 shadow-sm border">
           <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain aspect-square"
            data-ai-hint={product.imageHint}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium text-primary">{product.brand}</p>
            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className="mt-3 text-3xl font-semibold">
              ${product.price.toLocaleString()}
            </p>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <BuyNowButton />
        </div>
      </div>
    </div>
  );
}
