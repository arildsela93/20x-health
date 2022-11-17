import Button from '../components/ui/Button';
import { useContext, useEffect } from 'react';
import AppointmentContext from '../context/appointment-context';
import Box from '../components/layout/Box';

const Treatment = ({goToStep}) => {
    const aptCtx = useContext(AppointmentContext);
    const treatments = aptCtx.treatments;

    useEffect(() => {
        fetch('/api/treatment')
            .then((res) => res.json())
            .then((data) => {
                aptCtx.treatmentHandler(data)
            })
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2 className='m2-b'>How can we help you</h2>
                        <p className='m4-b'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <Box
                        data={treatments}
                        custom={'col-lg-4'}
                        clickHandler={aptCtx.selectedTreatmentHandler}
                        clickId={aptCtx.selectedTreatmentId}
                    />
                </div>
                <Button
                    custom='m2-r'
                    secondary={true}
                    click={() => goToStep(1)}
                >Back</Button>
                <Button
                    click={() => goToStep(3)}
                >Next</Button>
            </div>
        </>
    );
}

export default Treatment;
