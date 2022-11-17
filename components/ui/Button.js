import classes from './Button.module.scss';

const Button = ({custom, children, secondary, small, click, disable, type}) => {
    return (
        <button
            className={[
                custom,
                classes.button,
                secondary ? classes.secondary : classes.primary,
                small && classes.small
            ].join(' ')}
            onClick={click}
            disabled={disable}
            type={type ? type : 'button'}
        >
            {children}
        </button>
    );
}

export default Button;
