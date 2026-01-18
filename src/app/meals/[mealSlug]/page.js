import Image from 'next/image';
import { getMeal } from '@/app/lib/meals';
import classes from './page.module.css';

export default async function MealsDetailPage({ params }) {
  const { mealSlug } = await params;   

  const meal = await getMeal(mealSlug);


  if (!meal) {
    return <main className="not-found">
            <h1>Meal Not Found</h1>
            <p>Unfortunately, we could not find the requested page or meal data.</p>
        </main>;
        
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
