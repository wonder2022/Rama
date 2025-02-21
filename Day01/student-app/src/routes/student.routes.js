const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.post("/save", studentController.saveStudent);
router.get("/read", studentController.getAllStudents);
router.put("/update", studentController.updateStudent);
router.delete("/delete", studentController.deleteStudent);

module.exports = router;
