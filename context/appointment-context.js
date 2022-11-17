import React, { useState, useEffect } from 'react';
import moment from 'moment';

const AppointmentContext = React.createContext({
    treatmentHandler: () => {},
    selectedTreatmentHandler: () => {},
    setStartTimeHandler: () => {},
    doctorsHandler: () => {},
    selectedDoctorHandler: () => {},
    treatments: [],
    selectedTreatment: {},
    selectedTreatmentId: '',
    startTimeTreatment: '',
    doctors: '',
    selectedDoctorId: '',
    timeslot: [],
    selectedDoctor: {},
})

export const AppointmentContextProvider = (props) => {
    const [treatments, setTreatments] = useState([]);
    const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);
    const [selectedTreatment, setSelectedTreatment] = useState(null);
    const [startTimeTreatment, setStartTimeTreatment] = useState(null);
    const [doctors, setDoctors] = useState(null);
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [timeslot, setTimeslot] = useState([]);

    const treatmentHandler = (treatment) => {
        setTreatments(treatment)
    }

    const selectedTreatmentHandler = (treatment_id) => {
        setSelectedTreatmentId(treatment_id)
        setSelectedTreatment(treatments.find(x => x.id === treatment_id))
    }

    const setStartTimeHandler = (startTime) => {
        setStartTimeTreatment(moment(startTime).format('MMMM Do YYYY, hh:mm a'));
    }

    const doctorsHandler = (doctors) => {
        setDoctors(doctors);
    }

    const selectedDoctorHandler = (doctor_id) => {
        setSelectedDoctorId(doctor_id);

        doctors.map(doctor => {
            if (doctor_id === doctor.id) {
                setSelectedDoctor(doctor);
                const dct_timeslot = doctor.timeslots.map(timeslot => {
                    return {
                        id: timeslot.id,
                        startTime: new Date(new Date(new Date().setDate(new Date().getDate() + timeslot.id)).setHours(9, 0, 0, 0)),
                        endTime: new Date(new Date(new Date().setDate(new Date().getDate() + timeslot.id)).setHours(17, 0, 0, 0)),
                    };
                })
                setTimeslot(dct_timeslot);
            }
        });
    }

    const contextValues = {
        treatmentHandler,
        selectedTreatmentHandler,
        setStartTimeHandler,
        doctorsHandler,
        selectedDoctorHandler,
        treatments,
        selectedTreatment,
        selectedTreatmentId,
        startTimeTreatment,
        doctors,
        selectedDoctorId,
        timeslot,
        selectedDoctor,
    }

    useEffect(() => {

    }, [selectedTreatment, selectedTreatmentId, doctors, selectedDoctorId, timeslot])

    return (
        <AppointmentContext.Provider value={contextValues}>
            {props.children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentContext;
