import classes from './Box.module.scss';

const Box = ({data, custom, clickId, clickHandler, small}) => {
    return (
        <>
            {data ? (
                data.map(item => (
                    <div className={custom} key={item.id}>
                        <div
                            className={[small ? classes.boxSmall : classes.box, item.id === clickId ? classes.active : ''].join(' ')}
                            onClick={() => clickHandler(item.id)}
                        >
                            <div className={classes.left}>
                                <i className={item.icon}></i>
                            </div>
                            <div className={classes.right}>
                                <h4>{item.title}</h4>
                                <p className='small-prg'>{item.description}</p>
                                {item.time && <span>{item.time}</span>}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className='col-lg-12'>
                    <p>No data found</p>
                </div>
            )}
        </>
    );
}

export default Box;
