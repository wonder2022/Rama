const request = require("supertest");
const app = require("../src/app");

describe("Student API", () => {
    test("Create a student", async () => {
        const res = await request(app)
            .post("/student/save")
            .send({ name: "John", schoolName: "XYZ School", age: 20, gender: "Male" });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("John");
    });

    test("Read students", async () => {
        const res = await request(app).get("/student/read");
        expect(res.statusCode).toBe(200);
    });
});
