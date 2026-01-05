import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/app/components/meals/meals-grid';
import { getMeals } from '@/app/lib/meals';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
  

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Explore the collection of meals shared by our community.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your own meal!</Link>
        </p>
      </header>

      <main className={classes.main}>
       <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
        <Meals />
        </Suspense>
      </main>
    </>
  );
}
