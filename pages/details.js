import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import AppointmentContext from '../context/appointment-context';

const Details = ({goToStep}) => {
    const {register, formState: {errors}, handleSubmit, reset} = useForm();
    const aptCtx = useContext(AppointmentContext);

    const submitData = async (data) => {
        const appointmentValues = {
            selectedTreatment: aptCtx.selectedTreatment,
            startTimeTreatment: aptCtx.startTimeTreatment,
            selectedDoctor: aptCtx.selectedDoctor,
            userDetails: data
        }

        console.log(appointmentValues);

        try {
            const response = await fetch("/api/book", {
                method: "POST",
                body: JSON.stringify(appointmentValues),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await response.json();
            console.log(data);
            reset();
            goToStep(5);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2 className='m2-b'>Please fill in your details</h2>
                        <p className='m4-b'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <form className='form' onSubmit={handleSubmit(submitData)}>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-input'>
                                        <select name='' id='' placeholder='Gender' {...register('gender', {required: true})}>
                                            <option value=''>---</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                        {errors.gender?.type === 'required' &&
                                            <div className="alert alert-danger">Gender is required</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-input'>
                                        <input type='text' placeholder='Firstname' {...register('firstname', {required: true})} />
                                        {errors.firstname?.type === 'required' &&
                                            <div className="alert alert-danger">Firstname is required</div>
                                        }
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-input'>
                                        <input type='text' placeholder='Lastname' {...register('lastname', {required: true})} />
                                        {errors.lastname?.type === 'required' &&
                                            <div className="alert alert-danger">Lastname is required</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='form-input'>
                                        <input type='email' placeholder='Email' {...register('email', {required: true})} />
                                        {errors.email?.type === 'required' &&
                                            <div className="alert alert-danger">Email is required</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h6 className='m1-b'>Birthday</h6>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-input'>
                                        <input type='number' placeholder='Day' {...register('day', {required: true})} />
                                        {errors.day?.type === 'required' &&
                                            <div className="alert alert-danger">Day is required</div>
                                        }
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-input'>
                                        <input type='number' placeholder='Month' {...register('month', {required: true})} />
                                        {errors.month?.type === 'required' &&
                                            <div className="alert alert-danger">Month is required</div>
                                        }
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-input'>
                                        <input type='number' placeholder='Year' {...register('year', {required: true})} />
                                        {errors.year?.type === 'required' &&
                                            <div className="alert alert-danger">Year is required</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row m4-t">
                                <div className="col-lg-12">
                                    <Button
                                        custom='m2-r'
                                        secondary={true}
                                        click={() => goToStep(3)}
                                    >Back</Button>
                                    <Button
                                        click={() => submitData}
                                        type={'submit'}
                                    >Book</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details
