"use client";

import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import PreviewModal from "../preview-model";
import usePreviewModal from "@/hooks/use-preview-model";
import useCart from "@/hooks/use-cart";

type ProductCardProps = {
  data: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          src={data.image[0].url}
          fill
          alt="Image"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute transition w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency values={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
