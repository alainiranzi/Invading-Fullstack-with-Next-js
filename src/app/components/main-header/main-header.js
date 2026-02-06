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
        
        

        
        <div className={classes.hero}>
          <h1>Next food for next level foodies</h1>
          <p>Taste & share food from all over the world</p>
        </div>

       
        <div className={classes.cta}>
          <Link href="/meals/share">Explore foodies</Link>
          <Link href="/community">Join the community</Link>
        </div>
      </header>
    </>
  );
}
