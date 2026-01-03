const sql = require('better-sqlite3');
const db = sql('meals.db');

// Tabela ya meals
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

// Dummy meals zose hamwe na amafoto
const dummyMeals = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.webp',
    summary: 'A mouth-watering burger with a juicy beef patty and melted cheese.',
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
  {
    title: 'Delicious Pizza',
    slug: 'delicious-pizza',
    image: '/images/pizza.jpeg',
    summary: 'A cheesy pizza topped with fresh tomatoes and basil.',
    instructions: `
1. Prepare dough:
Mix flour, yeast, salt, and water. Knead into dough.

2. Add toppings:
Spread tomato sauce, add cheese, and toppings of your choice.

3. Bake:
Bake in oven at 220°C for 12-15 minutes.
    `,
    creator: 'Max',
    creator_email: 'max@example.com',
  },
  {
    title: 'Spicy Curry',
    slug: 'spicy-curry',
    image: '/images/curry.jpeg',
    summary: 'A flavorful curry with a rich blend of spices and vegetables.',
    instructions: `
1. Prepare ingredients:
Chop onions, tomatoes, and vegetables.

2. Cook curry:
Heat oil, fry onions until golden, add spices and tomatoes. Simmer with vegetables.

3. Serve:
Serve hot with rice or bread.
    `,
    creator: 'Max',
    creator_email: 'max@example.com',
  },
];

// Insert meals muri database
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
