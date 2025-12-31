'use client';

import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import ImageSlideshow from "../images/image-slideshow";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        {/* Slideshow */}
        <ImageSlideshow />

        {/* Hero */}
        <div className={classes.hero}>
          <h1>Next food for next level foodies</h1>
          <p>Taste & share food from all over the world</p>
        </div>

        {/* Navigation / CTA */}
        <div className={classes.cta}>
          <NavLink href="/meals">Explore foodies</NavLink>
          <NavLink href="/community">Join the community</NavLink>
        </div>
      </header>
    </>
  );
}
