import ImagePicker from "@/app/components/meals/image-picker";
import { shareMeal } from "@/app/lib/actions";
import Link from "next/link";
import classes from "./page.module.css";

export default function ShareMealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Share Your Meal</h1>

        <div className={classes.nav}>
          <Link href="/meals" className={classes.link}>
            🍽 Browse Meals
          </Link>

          <Link href="/community" className={classes.linkAlt}>
            🤝 Community
          </Link>
        </div>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <input type="text" name="title" placeholder="Meal Title" required />
          <ImagePicker label="Meal Image" name="image" />
          <button type="submit">Share Meal</button>
        </form>
      </main>
    </>
  );
}


