import classes from './Box.module.scss';

const BoxSingle = ({data, custom, title}) => {
    return (
        <>
            {data ? (
                <div className={custom} >
                    <div className={classes.box} >
                        <div className={classes.left}>
                            <i className={data.icon}></i>
                        </div>
                        <div className={classes.right}>
                            <h4 className='m2-b'>{data.title}</h4>
                            <p className='m1-b small-prg'>{data.description}</p>
                            {data.time && <span>{data.time}</span>}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={custom}>
                    <div className={classes.box} >
                        <div className={classes.right}>
                            <h4>{title}</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BoxSingle;
