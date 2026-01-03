import Image from 'next/image';
import classes from './page.module.css';
import { getMeals } from '@/app/lib/meals';

export default async function MealDetailPage({ params }) {
  // Fata slug y'iyo meal itanzwe na route
  const { mealSlug } = params;

  // Fata meals zose muri database
  const meals = await getMeals();

  // Shaka meal ihuye na slug
  const meal = meals.find(m => m.slug === mealSlug);

  if (!meal) {
    return (
      <main className={classes.main}>
        <p>Meal not found!</p>
      </main>
    );
  }

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <h1>{meal.title}</h1>
        <p className={classes.summary}>{meal.summary}</p>
      </header>

      <Image
        src={meal.image}
        alt={meal.title}
        width={500}
        height={300}
        className={classes.mealImage}
      />

      <section className={classes.instructions}>
        <h2>Instructions</h2>
        <pre>{meal.instructions}</pre>
      </section>

      <footer className={classes.footer}>
        <p>
          Created by {meal.creator} ({meal.creator_email})
        </p>
      </footer>
    </main>
  );
}
