"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

const images = [
  { image: "/images/burger.webp", alt: "A delicious, juicy burger" },
  { image: "/images/pizza.jpg", alt: "A delicious pizza" },
  { image: "/images/curry.jpeg", alt: "A delicious, spicy curry" },
  { image: "/images/pizza.jpeg", alt: "Steamed pizza" },
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
        <div
          key={index}
          className={index === currentImageIndex ? classes.active : classes.inactive}
        >
          <Image
            src={img.image}
            alt={img.alt}
            width={250}   // 🔹 small width
            height={150}  // 🔹 small height
                objectFit="cover"
          />      
        </div>
      ))}
    </div>
  );
}
