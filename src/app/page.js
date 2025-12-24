import Link from "next/link";
import classes from "./page.module.css";
import MainHeaderBackground from "./components/main-header/main-header-background";




export default function Home() {
  return (
    <>
      <header className={classes.headerWrapper}>
        <MainHeaderBackground />
        <div className={classes.headerContent}>
          <div className={classes.hero}>
            <h1>Next food for next level foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/meals">Explore foodies</Link>
            <Link href="/community">Join the community</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Discover delicious meals shared by our community of food enthusiasts.
            Browse through a variety of cuisines, connect with fellow foodies, and
            share your own culinary creations.
          </p>
          <p>
            Whether you're looking for inspiration for your next meal or want to
            share your own culinary creations.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Join the Community</h2>
          <p>
            Become a part of our vibrant community of food lovers. Share your
            favorite recipes, exchange cooking tips, and connect with like-minded
            individuals who share your passion for food.
          </p>
          <p>
            Sign up today and start exploring the world of delicious meals!
          </p>
        </section>
      </main>
    </>
  );
}
