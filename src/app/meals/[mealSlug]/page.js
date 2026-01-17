import Image from 'next/image';
import { getMeal } from '@/app/lib/meals';
import classes from './page.module.css';

export default async function MealsDetailPage({ params }) {
  const { mealSlug } = await params;   // ✅ hano dukora await kuri params

  const meal = await getMeal(mealSlug);

  // ✅ niba meal itabonetse
  if (!meal) {
    return <p className={classes.notFound}>Meal not found</p>;
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
