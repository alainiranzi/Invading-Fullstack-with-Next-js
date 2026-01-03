const sql = require('better-sqlite3');
const db = sql('meals.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`).run();

const dummyMeals = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpeg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese.',
    instructions: `
1. Prepare the patty:
Mix 200g of ground beef with salt and pepper. Form into a patty.

2. Cook the patty:
Heat a pan with a bit of oil. Cook the patty for 2–3 minutes on each side.

3. Assemble the burger:
Toast the burger bun halves. Place lettuce and tomato on the bun.
    `,
    creator: 'Max',
    creator_email: 'max@example.com',
  },
];

const insertMeal = db.prepare(`
  INSERT INTO meals (
    title,
    slug,
    image,
    summary,
    instructions,
    creator,
    creator_email
  ) VALUES (
    @title,
    @slug,
    @image,
    @summary,
    @instructions,
    @creator,
    @creator_email
  )
`);

for (const meal of dummyMeals) {
  insertMeal.run(meal);
}

console.log('Database initialized successfully!');
