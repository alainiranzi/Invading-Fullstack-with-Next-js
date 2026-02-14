import Image from "next/image";
import { getMeal } from "@/app/lib/meals";
import classes from "./page.module.css";

export default async function MealDetailPage({ params }) {

  // ⬇️ Next 16 fix
  const { mealSlug } = await params;

  console.log("Requested slug:", mealSlug);

  const meal = getMeal(mealSlug);

  console.log("Fetched meal:", meal);

  if (!meal) {
    return (
      <main className={classes.notFound}>
        <h1>Meal Not Found</h1>
        <p>Unfortunately, we could not find the requested page or meal data.</p>
      </main>
    );
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

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
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
}
