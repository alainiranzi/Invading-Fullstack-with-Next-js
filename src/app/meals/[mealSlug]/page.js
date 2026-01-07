import Image from 'next/image';

import classes from './page.module.css';

export default function MealsDetailsPage() {
    return <>
      <header className={classes.header}>
      <div className={classes.image}>
        <Image />

      </div>
      </header>
      <main></main>

      </>
}
