import Button from '../components/ui/Button';
import {useContext, useEffect} from 'react';
import AppointmentContext from '../context/appointment-context';
import { ScheduleMeeting } from 'react-schedule-meeting';
import Box from '../components/layout/Box';
import BoxSingle from '../components/layout/BoxSingle';

const Appointment = ({goToStep}) => {
    const aptCtx = useContext(AppointmentContext);
    const treatment = aptCtx.selectedTreatment;
    const startTime = aptCtx.startTimeTreatment;
    const doctors = aptCtx.doctors;
    const timeslot = aptCtx.timeslot;

    const handleTimeslotClicked = (startTimeEvent) => {
        aptCtx.setStartTimeHandler(startTimeEvent.startTime)
    };

    useEffect(() => {
        fetch('/api/appointment')
            .then((res) => res.json())
            .then((data) => {
                aptCtx.doctorsHandler(data);
            })
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2 className='m2-b'>Appointment details</h2>
                        <p className='m4-b'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <BoxSingle data={treatment} title={'Select a treatment'} custom={'col-lg-4'} />
                </div>
                {treatment && (
                    <div className='row m4-b'>
                        <div className='col-lg-12'>
                            <h3 className='m2-b'>Who should treat you</h3>
                        </div>
                        <div className='col-lg-4'>
                            <Box
                                data={doctors}
                                clickHandler={aptCtx.selectedDoctorHandler}
                                clickId={aptCtx.selectedDoctorId}
                                small={true}
                            />
                        </div>
                        <div className='col-lg-8'>
                            <div className='appointment-calendar'>
                                <ScheduleMeeting
                                    borderRadius={5}
                                    primaryColor='#0c5455'
                                    eventDurationInMinutes={parseInt(treatment.time)}
                                    availableTimeslots={timeslot}
                                    onStartTimeSelect={handleTimeslotClicked}
                                />
                            </div>
                            {startTime && <h6 className='m1-t'>Selected time - {startTime}</h6>}
                        </div>
                    </div>
                )}
                <Button
                    custom='m2-r'
                    secondary={true}
                    click={() => goToStep(2)}
                >Back</Button>
                <Button
                    click={() => goToStep(4)}
                    disable={!treatment || !startTime}
                >Next</Button>
            </div>
        </>
    );
}

export default Appointment;
