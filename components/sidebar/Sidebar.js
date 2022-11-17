import classes from './Sidebar.module.scss';

const Sidebar = ({currentStep, goToStep}) => {
    return (
        <aside className={classes.aside}>
            <ul className={classes.menu}>
                <li>
                    <button
                        className={currentStep === 1 ? classes.active : ''}
                        onClick={() => goToStep(1)}
                    >Welcome</button>
                </li>
                <li>
                    <button
                        className={currentStep === 2 ? classes.active : ''}
                        onClick={() => goToStep(2)}
                    >Treatment</button>
                </li>
                <li>
                    <button
                        className={currentStep === 3 ? classes.active : ''}
                        onClick={() => goToStep(3)}
                    >Appointment</button>
                </li>
                <li>
                    <button
                        className={currentStep === 4 ? classes.active : ''}
                        onClick={() => goToStep(4)}
                    >Details</button>
                </li>
                <li>
                    <button
                        className={currentStep === 5 ? classes.active : ''}
                        onClick={() => goToStep(5)}
                    >Success</button>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
