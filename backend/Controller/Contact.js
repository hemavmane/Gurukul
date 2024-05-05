
const ContactModal = require('../Modal/Contactus');





class Contact {
  async AddContact(req, res) {
    try {
        const {name,phonenumber,email,message} = req.body;
        const course = new ContactModal({ name,phonenumber,email,message });
        let savedCourse = await Contact.save();
        if (savedContact) {
            return res.status(200).json({ message: 'Contact added successfully', Contact: savedCourse });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async GetData(req, res) {
    try {
        const courses = await ContactModal.find({});
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async courseTrash(req, res) {
    try {
        const { id } = req.params;
        await ContactModal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
  async CourseUpdate(req, res) {
    try {
        const { id } = req.params;
        const { title, price, offerPrice, videoLink } = req.body;
        const updatedContact = 
        await ContactModal.findByIdAndUpdate(id, { title, price, offerPrice, videoLink }, { new: true });
        res.status(200).json({ message: 'Contact updated successfully',
         Contact: updatedContact });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
}

const ContactController = new Contact();
module.exports = ContactController;
