import classes from './Navigation.module.scss';
import btnClasses from '../ui/Button.module.scss'

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>
                    <Image src='/20x-logo.svg' alt='20x Health Logo' width={150} height={32} priority={true}/>
                </Link>
            </div>
            <div className={classes.cta}>
                <ul className={classes.menu}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                </ul>
                <Link
                    className={[btnClasses.button, btnClasses.primary, btnClasses.small].join(' ')}
                    href='/'
                >Book Appointment</Link>
            </div>
        </header>
    );
}

export default Navigation;
