'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from "./meals.js";
import { revalidatePath } from 'next/cache.js';

export async function shareMeal(prevState,formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    image: formData.get('image'),
    creator_email: formData.get('email'),
  };

 if (
  !meal.title ||
  !meal.summary ||
  !meal.instructions ||
  !meal.creator ||
  !meal.image ||
  !meal.creator_email ||
  !meal.creator_email.includes("@") ||
  meal.image.size === 0
) {
  return {
    message: "Invalid input. "
  };
}


  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');

  
}
