import ImagePicker from "@/app/components/main-header/meals/image-picker";
import { shareMeal } from "@/app/lib/actions";
import Link from "next/link";
import classes from "./page.module.css";

export default function ShareMealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share Your <span className={classes.highlight}>Delicious Meals</span>
        </h1>

        <div className={classes.nav}>
          {/* 🔥 THIS NOW WORKS */}
          <Link href="/meals" className={classes.link}>
            🍽 Browse Meals
          </Link>

          <Link href="/community" className={classes.linkAlt}>
            🤝 Join the Community
          </Link>
        </div>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <input name="name" required />
            <input name="email" required />
          </div>

          <input name="title" required />
          <input name="summary" required />
          <textarea name="instructions" required />

          <ImagePicker label="Meal Image" name="image" />

          <button type="submit">Share Meal</button>
        </form>
      </main>
    </>
  );
}
