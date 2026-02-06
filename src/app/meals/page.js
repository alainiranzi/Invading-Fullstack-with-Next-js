import { getMeals } from "@/app/lib/meals";
import MealsGrid from "@/app/components/main-header/meals/meals-grid";

export default async function MealsPage() {
  const meals = getMeals(); 
  return <MealsGrid meals={meals} />;
}
