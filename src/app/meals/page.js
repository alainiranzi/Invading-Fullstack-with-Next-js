import { getMeals } from '@/app/lib/meals';
import MealsGrid from '@/app/components/main-header/meals/meals-grid';

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <main>
      <h1>All Shared Meals</h1>
      <MealsGrid meals={meals} />
    </main>
  );
}
