import MealsGrid from "@/app/components/main-header/meals/meals-grid";
import { getMeals } from "@/app/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <main>
      <h1>All Meals</h1>
      <MealsGrid meals={meals} />
    </main>
  );
}
