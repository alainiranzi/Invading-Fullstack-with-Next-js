import Link from 'next/link';
import Image from 'next/image';
import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <li className={classes.meal}>
      <div className={classes.imageWrapper}>
        <Image src={image} alt={title} fill className={classes.image} />
      </div>
      <div className={classes.headerText}>
        <h2>{title}</h2>
        <p>{creator}</p>
      </div>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`} className={classes.link}>
            View Details
          </Link>
        </div>
      </div>
    </li>
  );
}
