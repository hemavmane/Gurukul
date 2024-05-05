
const CourseModal = require('../Modal/Programs');





class Course {
  async AddCourse(req, res) {
    try {
        const { title, price, offerPrice, videoLink } = req.body;
        const course = new CourseModal({ title, price, offerPrice, videoLink });
        let savedCourse = await course.save();
        if (savedCourse) {
            return res.status(200).json({ message: 'Course added successfully', course: savedCourse });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async GetData(req, res) {
    try {
        const courses = await CourseModal.find({});
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async courseTrash(req, res) {
    try {
        const { id } = req.params;
        await CourseModal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
  async CourseUpdate(req, res) {
    try {
        const { id } = req.params;
        const { title, price, offerPrice, videoLink } = req.body;
        const updatedCourse = 
        await CourseModal.findByIdAndUpdate(id, { title, price, offerPrice, videoLink }, { new: true });
        res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
}

const CourseController = new Course();
module.exports = CourseController;
