import Link from "next/link";
import classes from "../components/ui/Button.module.scss";

const Success = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2 className='m2-b'>Thank you for booking your appointment</h2>
                        <p className='m4-b'>You will receive a confirmation shortly</p>
                    </div>
                </div>
                <Link
                    className={[classes.button, classes.primary].join(' ')}
                    href='/'
                >Back to Homepage</Link>
            </div>
        </>
    );
}

export default Success;
