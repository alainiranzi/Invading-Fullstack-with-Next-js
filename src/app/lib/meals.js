import fs from 'node:fs';
import path from 'node:path';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

// ==================== GET ALL MEALS ====================
export async function getMeals() {
  return db.prepare('SELECT * FROM meals').all();
}

// ==================== GET SINGLE MEAL ====================
export async function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// ==================== SAVE MEAL ====================
export async function saveMeal(meal) {
  // 1. Create slug
  meal.slug = slugify(meal.title, { lower: true });

  // 2. Sanitize instructions
  meal.instructions = xss(meal.instructions);

  // 3. Handle image
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const imagePath = path.join(
    process.cwd(),
    'public',
    'images',
    'meals',
    fileName
  );

  const bufferedImage = await meal.image.arrayBuffer();
  fs.writeFileSync(imagePath, Buffer.from(bufferedImage));

  meal.image = `/images/meals/${fileName}`;

  // 4. Insert into database
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
