import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';




const db = sql('meals.db');

export async function getMeals() {
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // handle image
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const filePath = `public/images/meals/${fileName}`;

  const bufferedImage = await meal.image.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(bufferedImage));

  meal.image = `/images/meals/${fileName}`;

  db.prepare(`
    INSERT INTO meals (
      title,
      slug,
      image,
      instructions,
      summary,
      creator,
      creator_email
    ) VALUES (
      @title,
      @slug,
      @image,
      @instructions,
      @summary,
      @creator,
      @creator_email
    )
  `).run(meal);
}
