export default async function handler(req, res) {
    if (req.method === "POST") {
        const appointmentData = req.body;
        console.log(appointmentData);

        res.status(201).json({message: 'Success'});
    }
}
