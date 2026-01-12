import Image from 'next/image';
import { getMeal } from '@/app/lib/meals';
import classes from './page.module.css';

export default async function MealsDetailsPage({ params }) {
  
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    return <p className={classes.notFound}>Meal not found</p>;
  }

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={meal.image}  
            alt={meal.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <section className={classes.instructions}>
        <h2>Instructions</h2>
        <pre>{meal.instructions}</pre>
      </section>
    </main>
  );
}
