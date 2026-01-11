import Image from 'next/image';
import { getMeal } from '@/app/lib/meals';
import classes from './page.module.css';

export default async function MealsDetailsPage({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    return <p className={classes.notFound}>Meal not found</p>;
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>by {meal.creator}</p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main className={classes.main}>
        <h2>Instructions</h2>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
<section className={classes.contact}>
  <h2>Contact the creator</h2>

  <form className={classes.form}>
    <div>
      <label>Your Email</label>
      <input type="email" placeholder="you@example.com" />
    </div>

    <div>
      <label>Your Message</label>
      <textarea rows="4" placeholder="Write your message..."></textarea>
    </div>

    <button type="submit">Send</button>
  </form>
</section>

      </main>
    </>
  );
}
