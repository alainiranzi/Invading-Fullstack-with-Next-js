import Image from 'next/image';
import classes from './page.module.css';

export default function MealsDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src="/images/pizza.jpeg"   // 🔑 src irakenewe
            alt="Meal image"
            fill
            className={classes.img}
          />
        </div>

        <div className={classes.headerText}>
          <h1>Delicious Pizza</h1>

          <p className={classes.creator}>
            by <a href="mailto:max@example.com">Max</a>
          </p>

          <p className={classes.summary}>
            A cheesy pizza topped with fresh tomatoes and basil.
          </p>
        </div>
      </header>

      <main className={classes.instructions}>
        <h2>Instructions</h2>
        <p>Cook with love ❤️</p>
      </main>
    </>
  );
}
