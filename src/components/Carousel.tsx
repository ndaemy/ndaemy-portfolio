import clsx from "clsx";
import Image from "next/image";
import path from "path";

interface CarouselProps {
  imageUrls: string[];
  className?: string;
}

export default function Carousel({ imageUrls, className }: CarouselProps) {
  return (
    <div className={clsx("carousel carousel-center rounded-box", className)}>
      {imageUrls.map((imageUrl, index) => (
        <div
          key={imageUrl}
          className="carousel-item relative h-full w-full bg-black"
        >
          <Image
            src={imageUrl}
            alt={`${path.parse(new URL(imageUrl).pathname).name} image`}
            fill
            className="w-full object-contain"
            unoptimized
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
          />
        </div>
      ))}
    </div>
  );
}
