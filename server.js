const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const phonebook = require("../models/phonebookModel");

// Create a new phonebook
const createphonebook = async (req, res) => {
  try {
    const { title, snippet, body } = req.body;
    if (!title || !snippet || !body) {
      return res
        .status(400)
        .json({ error: "All fields (title, snippet, body) are required" });
    }

    const newphonebook = new phonebook({ title, snippet, body });
    const savedphonebook = await newphonebook.save();

    res.status(201).json(savedphonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all phonebooks
const getphonebooks = async (req, res) => {
  try {
    const phonebooks = await phonebook.find();
    res.json(phonebooks);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single phonebook by ID
const phonebook = async (req, res) => {
  try {
    const phonebook = await phonebook.findById(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "phonebook not found" });
    }
    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a phonebook by ID
const deletephonebook = async (req, res) => {
  try {
    const phonebook = await phonebook.findByIdAndDelete(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "phonebook not found" });
    }
    res.json({ message: "phonebook deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single phonebook by ID
const patchphonebook = async (req, res) => {
  try {
    const phonebook = await phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phonebook) {
      return res.status(404).json({ error: "phonebook not found" });
    }

    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single phonebook by ID
const putphonebook = async (req, res) => {
  try {
    const blog = await phonebook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phonebook) {
      return res.status(404).json({ error: "phonebook not found" });
    }

    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createphonebook,
  getphoneboos,
  getphonebook,
  deletephonebook,
  patchphoneboo,
  putphonebook,
};