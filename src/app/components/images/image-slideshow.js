"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

const images = [
  { image: "/images/burger.webp", alt: "A delicious, juicy burger" },
  { image: "/images/pizza.jpg", alt: "A delicious pizza" },
  { image: "/images/curry.jpeg", alt: "A delicious, spicy curry" },
  { image: "/images/dumplings.jpg", alt: "Steamed dumplings" },
  { image: "/images/macncheese.jpg", alt: "Mac and Cheese" },
  { image: "/images/schnitzel.jpg", alt: "A delicious schnitzel" },
  { image: "/images/tomato-salad.jpg", alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev < images.length - 1 ? prev + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.image}
          alt={img.alt}
          fill
          priority={index === 0}
          className={index === currentImageIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
}
