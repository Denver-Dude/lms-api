const express = require("express");
const Lesson = require("../models/Lesson");

const router = express.Router();

/*
  CREATE LESSON
  POST /api/lessons
*/
router.post("/", async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  GET ALL LESSONS
  GET /api/lessons
*/
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find();

    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  GET SINGLE LESSON
  GET /api/lessons/:id
*/
router.get("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  UPDATE LESSON
  PUT /api/lessons/:id
*/
router.put("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  DELETE LESSON
  DELETE /api/lessons/:id
*/
router.delete("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(
      req.params.id
    );

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json({
      message: "Lesson deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;