const Course = require('../../../../models/course.model');
import connectDb from '../../../../middleware/mongoose';

const handler = async (req, res) => {

    // get all course
    if (req.method === 'GET') {
        try {

            //fetching data of course model
            const courses = await Course.find({});
            res.status(200).json(courses);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Something went wrong.' });
        }


    }
    //add course
    else if (req.method === 'POST') {

        //creating course variable and stores all attribute into it.
        const course = new Course({
            purpuse: req.body.purpuse,
            name: req.body.name,
            description: req.body.description,
            instructor: req.body.instructor,
            duration: req.body.duration,
            image: req.body.image,
            price: req.body.price
        });

        if (!course.name | !course.purpuse | !course.instructor | !course.duration | !course.price | !course.image) {

            return res.status(400).json({ error: "You must enter valid value." });
        }

        try {

            //saving data into course collection
            const newCourse = await course.save();
            return res.status(201).json(newCourse);
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