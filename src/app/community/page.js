import Image from 'next/image';

import mealIcon from '@/app/assets/icons/meal.webp';
import communityIcon from '@/app/assets/icons/community.jpeg';

import eventsIcon from '@/app/assets/icons/events.jpeg';
import classes from './page.module.css';

export default function CommunityPage() {
    return (
        <>

        <header className={classes.header}>
            <h1>
                One shared passion: <span className={classes.highlight}></span>
            </h1>
            <p>Join our community and share your favorite recipes!</p>
            </header>
            <main className={classes.main}>
            <h2>Community Perks</h2>

            <ul className={classes.perks}>
                <li>
                    <Image src={mealIcon} alt="A delicious meal" />
                    <p>Share and discover new recipes</p>
                </li>
                <li>
                    <Image src={communityIcon} alt="Community icon" />
                    <p>Connect with fellow food enthusiasts</p>
                </li>
                <li>
                    <Image
                    src={eventsIcon}
                    alt="A crowd of people at a cooking event"
                    />
                    <p>Attend exclusive cooking events</p>
                    </li>
            </ul>
            </main>
        </>
    );
}















                