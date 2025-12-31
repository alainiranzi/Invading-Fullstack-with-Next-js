"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

const images = [
  { src: "/images/burger.webp", alt: "A delicious, juicy burger" },
  { src: "/images/pizza.jpeg", alt: "A delicious pizza" },
  { src: "/images/curry.jpeg", alt: "A delicious, spicy curry" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev =>
        prev < images.length - 1 ? prev + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <div key={index} className={index === currentImageIndex ? classes.active : classes.inactive}>
          <Image
            src={image.src}
            alt={image.alt}
            width={120}
            height={80}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}
