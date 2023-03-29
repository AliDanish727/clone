const CourseType = require('../../../../models/courseType.model');
import connectDb from '../../../../middleware/mongoose';

const handler = async (req, res) => {

    // get Form Section Content
    if (req.method === 'GET') {
        console.log("GET")
        try {

            //fetching data of Form Section model
            const courseType = await CourseType.find({});
            res.status(200).json(courseType);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Something went wrong.' });
        }


    }
    //add Form Section Content
    else if (req.method === 'POST') {

        const courseType = new CourseType({
            name: req.body.name,
        });

        // validate topFormSectionContent
        if (!courseType) {

            return res.status(400).json({ error: "You must enter valid value." });
        }
        try {
            //saving data into topFormSectionContent collection
            const newCourseType = await courseType.save();
            return res.status(201).json(newCourseType);


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