const Tracker = require('../../../../models/tracker.model');
import connectDb from '../../../../middleware/mongoose';

const handler = async (req, res) => {

    // get Form Section Content
    if (req.method === 'GET') {
        console.log("GET")
        try {

            //fetching data of Form Section model
            const tracker = await Tracker.find({});
            res.status(200).json(tracker);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Something went wrong.' });
        }


    }
    //add Form Section Content
    else if (req.method === 'POST') {

        const tracker = new Tracker({
            path: req.body.path,
            timeSpent: req.body.timeSpent,
        });

        // validate topFormSectionContent
        if (!tracker) {

            return res.status(400).json({ error: "You must enter valid value." });
        }
        try {
            //saving data into topFormSectionContent collection
            const newTracker = await tracker.save();
            return res.status(201).json(newTracker);


        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    // if method is not allowed
    else {
        return res.status(405).json(`Method ${req.method} Not Allowed`);
    }

}

export default connectDb(handler)