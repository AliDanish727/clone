const TopFormSectionContent = require('../../../../models/topFormSectionContent.model');
import connectDb from '../../../../middleware/mongoose';

const handler = async (req, res) => {

    // get Form Section Content
    if (req.method === 'GET') {
        try {

            //fetching data of Form Section model
            const topFormSectionContent = await TopFormSectionContent.find({});
            res.status(200).json(topFormSectionContent);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Something went wrong.' });
        }


    }
    //add Form Section Content
    else if (req.method === 'POST') {

        const topFormSectionContent = new TopFormSectionContent({
            htmlContent: req.body,
        });

        // validate topFormSectionContent
        if (!topFormSectionContent.htmlContent) {

            return res.status(400).json({ error: "You must enter valid value." });
        }
        try {

            // deleting previous one
            await TopFormSectionContent.deleteMany({});
            //saving data into topFormSectionContent collection
            const newTopFormSectionContent = await topFormSectionContent.save();
            return res.status(201).json(newTopFormSectionContent);


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