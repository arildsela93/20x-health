import Button from '../components/ui/Button';
import classes from '../components/ui/Button.module.scss';
import Link from 'next/link';

const Welcome = ({goToStep}) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2 className='m2-b'>Best care for patients and doctors</h2>
                        <p className='m4-b'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <Link
                    className={[classes.button, classes.secondary].join(' ')}
                    href='/'
                >Learn More</Link>
                <Button
                    custom='m2-l'
                    click={() => goToStep(2)}
                >Book Appointment</Button>
            </div>
        </>
    );
}

export default Welcome;
