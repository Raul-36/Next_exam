import { ItemProps } from "@/components/helpers/interfaces/items";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/shared/product-card";
import CardAction from "@/components/shared/card-action";
import { ProductProps } from "@/components/helpers/interfaces/product";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

interface ProdProps {
  params: Promise<{
    path: string;
  }>;
}

export default async function ProductCategory({ params }: ProdProps) {
  const { path } = await params;

  const response = await fetch(`${process.env.API_HOST}/products`);
  if (!response.ok) {
    throw new Error("Failed to load items data");
  }

  const items: ItemProps[] | ProductProps[] = await response.json();
  console.log(items);
  const product = items
    .flatMap((item) => item)
    .find((item) => item.path === `/products/${path}`);

  return (
    <main className="flex-1">
      <section className="grid items-center gap-8 pt-6 lg:py-6 container pb-12 md:pb-14">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex aspect-square relative size-full overflow-hidden flex-1 items-center justify-center bg-secondary">
            <Image
              src={
                product?.imageUrl ||
                `${process.env.BLOB}/Image-not-found-XoyLpO0fl2kGkG8kNc8nKhKb3qiFw7.png`
              }
              alt={product?.name || "No image"}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <div className="space-y-2">
              <h2 className="line-clamp-1 text-2xl font-bold">
                {product?.name || "Product not found"}
              </h2>
              <p className="text-base text-muted-foreground">
                ${product?.price || "Price not found"}
              </p>
              <a className="line-clamp-1 inline-block text-base text-muted-foreground hover:underline" href="/">skateshop</a>
            </div>

            <div className="shrink-0 bg-border h-px w-full my-1.5" role="none"></div>

            <p className="text-base text-muted-foreground">
              {product?.stockCount || "Stock not found"} in stock
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < (product?.rating || 0)
                      ? "text-yellow-500"
                      : "text-gray-500"
                      }`}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            {product ? <CardAction product={product} /> : <p>Product not found</p>}

            <div className="shrink-0 bg-border h-px w-full mt-5" role="none"></div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                {product?.description || "Description not found"}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>

        <div className="space-y-6 overflow-hidden">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">More products from skateshop</h2>
          <div className="relative overflow-hidden pb-3.5">
            <div className="size-full rounded-[inherit]">
              <div className="min-width: 100%; display: table;">
                <div className="flex gap-4">
                  {items.map((product: ItemProps | ProductProps) => (
                    <Link key={product.id} href={product.path} className="border bg-card text-card-foreground shadow size-full overflow-hidden rounded-lg min-w-[260px]">
                      <ProductCard product={product} />
                    </Link>
                  )).slice(0, 4)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}