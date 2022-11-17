import treatmentJSON from '../../json/treatments.json';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const treatment = treatmentJSON;

        // Sending back all filtered countries
        res.status(201).json(treatment);
    }
}
