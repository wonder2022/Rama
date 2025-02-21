const Student = require("../models/student.model");

exports.createStudent = async (data) => {
    return await Student.create(data);
};

exports.getAllStudents = async () => {
    return await Student.findAll();
};

exports.updateStudent = async (name, age) => {
    const student = await Student.findOne({ where: { name } });
    if (!student) throw new Error("Student not found");

    student.age = age;
    await student.save();
    return student;
};

exports.deleteStudent = async (name) => {
    const student = await Student.findOne({ where: { name } });
    if (!student) throw new Error("Student not found");

    await student.destroy();
};
