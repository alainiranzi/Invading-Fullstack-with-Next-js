'use server';

export async function shareMeal(formData) {

    const meal = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      creator : formData.get('name'),
      image : formData.get('image'),
      creator_email : formData.get('email'),
  };

console.log(meal);

}