"use client";
import { ItemProps } from "@/components/helpers/interfaces/items";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CategoryProps } from "@/components/helpers/interfaces/category";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useProductStore } from "@/app/store";
import { ProductProps } from "@/components/helpers/interfaces/product";

interface ProductCardProps {
  product: ItemProps | CategoryProps | ProductProps;
}

export function ProductCard({ product }: ProductCardProps) {

  const { products, setProducts } = useProductStore();

  const addProducts = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ItemProps | ProductProps
  ) => {
    event.preventDefault();
    setProducts((prev) => {
      const current = prev.find((p) => p.id === product.id);
      if (!current) {
        return [...prev, product];
      }
      return prev;
    });
  };


  if ("imageUrl" in product)
  {
    console.log(product.imageUrl)
  }

  return (
    <Card className="rounded-lg border bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={
              "imageUrl" in product
                ? product.imageUrl
                : `${process.env.BLOB}/Image-not-found-XoyLpO0fl2kGkG8kNc8nKhKb3qiFw7.png`}
            alt={"name" in product ? product.name : product.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">
          {"name" in product
            ? `${product.name.charAt(0).toUpperCase()}${product.name
                .slice(1)}`
            : "title" in product
            ? product.title
            : ""}
        </h3>
        {"price" in product && (
          <p className="text-sm text-zinc-400">${product.price}</p>
        )}
        {"description" in product && (
          <p className="text-sm text-zinc-400">{product.description}</p>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {products.find(p => product.id === p.id) ?
        <div className="flex-1 hover:bg-zinc-900 hover:text-white hover:border hover:border-white transition-all duration-200">
          Added
        </div> :
        <Button onClick={(event) => addProducts(event, product as ItemProps)} className="flex-1 hover:bg-zinc-900 hover:text-white hover:border hover:border-white transition-all duration-200 bg-green-500">
          Add to cart
        </Button>
        }
        <Button size={"icon"} variant={"outline"}>
          <Eye />
        </Button>
      </CardFooter>
    </Card>
  );
}