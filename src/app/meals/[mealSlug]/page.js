import Image from 'next/image';

import mealIcon from '@/app/assets/icons/meal.webp';
import communityIcon from '@/app/assets/icons/community.jpeg';
import eventsIcon from '@/app/assets/icons/events.jpeg';

import classes from './page.module.css';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Discover amazing <span className={classes.highlight}>meals</span>
        </h1>
        <p>Browse and enjoy meals from around the world!</p>
      </header>

      <main className={classes.main}>
        <h2>Our Meals</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Explore tasty dishes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Community icon" />
            <p>Cooked by passionate people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Cooking event"
            />
            <p>Fresh ideas every day</p>
          </li>
        </ul>
      </main>
    </>
  );
}
