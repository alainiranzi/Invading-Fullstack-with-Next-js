import Image from 'next/image';
import classes from './page.module.css';
import { getMeals } from '@/app/lib/meals';

export default async function MealDetailPage({ params }) {
  if (!params || !params.mealSlug) {
    return <p>Invalid route</p>;
  }

  const mealSlug = params.mealSlug;

  const meals = await getMeals();
  const meal = meals.find((meal) => meal.slug === mealSlug);

  if (!meal) {
    return <p>Meal not found</p>;
  }

  return (
    <main className={classes.main}>
      <h1>{meal.title}</h1>

      <Image
        src={meal.image}
        alt={meal.title}
        width={600}
        height={350}
      />

      <p>{meal.summary}</p>

      <pre>{meal.instructions}</pre>
    </main>
  );
}
