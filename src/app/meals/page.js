import ImagePicker from "@/app/components/meals/image-picker";
import classes from './page.module.css';

export default function ShareMealsPage() {
  async function shareMeal(formData) {
    'use server';

    const meal = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      creator : formData.get('name'),
      image : formData.get('image'),
      creator_email : formData.get('email'),
  }

console.log(meal);

}

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share Your <span className={classes.highlight}>Delicious Meals</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </p>

            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>

          <p>
            <label htmlFor="title">Meal Title</label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={8}
              required
            ></textarea>
          </p>



          <ImagePicker label="Meal Image" name="image" />

          <div className={classes.actions}>
            <button type="submit" className={classes.button}>
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
