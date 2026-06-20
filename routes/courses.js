const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

/*
  CREATE COURSE
  POST /api/courses
*/
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  GET ALL COURSES
  GET /api/courses
*/
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  GET SINGLE COURSE
  GET /api/courses/:id
*/
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  UPDATE COURSE
  PUT /api/courses/:id
*/
router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
  DELETE COURSE
  DELETE /api/courses/:id
*/
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(
      req.params.id
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;