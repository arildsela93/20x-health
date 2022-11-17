import StepWizard from 'react-step-wizard';
import Sidebar from '../components/sidebar/Sidebar';

import Welcome from './welcome';
import Treatment from './treatment';
import Appointment from './appointment';
import Details from './details';
import Success from './success';

const Home = () => {
    return (
        <StepWizard nav={<Sidebar/>} isHashEnabled={true} >
            <Welcome hashKey={'welcome'} />
            <Treatment hashKey={'treatment'} />
            <Appointment hashKey={'appointment'} />
            <Details hashKey={'details'} />
            <Success hashKey={'success'} />
        </StepWizard>
    )
}

export default Home;
