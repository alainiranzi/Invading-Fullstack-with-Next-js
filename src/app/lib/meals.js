import fs from "node:fs";
import path from "node:path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql(path.join(process.cwd(), "meals.db"));

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const image = meal.image;

  if (!image || image.size === 0) {
    throw new Error("No image provided");
  }

  const extension = image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const filePath = path.join(process.cwd(), "public", "images", "meals", fileName);

  const bufferedImage = await image.arrayBuffer();

  await fs.promises.writeFile(filePath, Buffer.from(bufferedImage));

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
