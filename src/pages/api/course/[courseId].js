const Course = require('../../../../models/course.model');
import connectDb from '../../../../middleware/mongoose';

const handler = async (req, res) => {
    const courseId = req.query.courseId;

    // get course by courseId
    if (req.method === 'GET') {
        try {
            const courses = await Course.find({ _id: courseId });
            res.status(200).json(courses);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Something went wrong.' });
        }
    }
    // if method is not allowed
    else {
        res.status(405).json(`Method ${req.method} Not Allowed`);
    }
}

export default connectDb(handler)