const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();  // Assuming Note is your model
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({
      title: title,
      content: content
    });
  
    try {
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      res.status(400).json({ message: 'Error saving note', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const result = await Note.findByIdAndDelete(req.params.id);
      if (result) {
        res.status(200).json({ message: 'Note successfully deleted' });
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting note', error: error.message });
    }
});

module.exports = router;