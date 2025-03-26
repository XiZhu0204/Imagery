import { Carousel } from "flowbite-react";
import Image from 'next/image'

export type DisplayCarouselItem = {
    isImage: boolean;
    content: string;
    associatedDay: number;
}

export type DisplayCarouselProps = {
    items: DisplayCarouselItem[];
    onChange: (associatedDay: number) => void;
}

export const DisplayCarousel = ({
    items,
    onChange,
}: DisplayCarouselProps) => {
    return (
      <div className="relative w-full h-full">
        <Carousel slide={false} indicators={false} onSlideChange={(index) => onChange(items[index].associatedDay)}>
          {items.map((item, idx) => item.isImage ? (
            <div className="flex h-full items-center justify-center" key={idx}>
              <Image src={item.content} fill objectFit='contain' alt=""/>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center bg-zinc-700 text-white text-2xl" key={idx}>
              {item.content}
            </div>
          ))}
        </Carousel>
      </div>
    );
};