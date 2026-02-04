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
        <p>Or any other meal you feel needs sharing!</p>

        {/* Nav above the form */}
        <div className={classes.nav}>
          <Link href="/meals/all" className={classes.link}>
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
            <p>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </p>

            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>

          <p>
            <label htmlFor="title">Meal Title</label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={8}
              required
            ></textarea>
          </p>

          <ImagePicker label="Meal Image" name="image" />

          <div className={classes.actions}>
            <button type="submit" className={classes.button}>
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
