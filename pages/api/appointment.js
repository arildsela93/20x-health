import appointmentsJSON from '../../json/doctors.json';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const doctors = appointmentsJSON;

        // Sending back all filtered countries
        res.status(201).json(doctors);
    }
}
