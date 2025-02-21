const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(bodyParser.json()); // Middleware to parse JSON body

// ➕ GET /add?a=5&b=3 → 5 + 3 = 8
app.get("/add", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });

    const result = parseFloat(a) + parseFloat(b);
    res.json({ operation: "addition", result });
});

// ➖ POST /subtract { "a": 10, "b": 4 } → 10 - 4 = 6
app.post("/subtract", (req, res) => {
    const { a, b } = req.body;
    if (a === undefined || b === undefined)
        return res.status(400).json({ error: "Missing parameters" });

    const result = parseFloat(a) - parseFloat(b);
    res.json({ operation: "subtraction", result });
});

// ✖️ PUT /multiply { "a": 6, "b": 2 } → 6 × 2 = 12
app.put("/multiply", (req, res) => {
    const { a, b } = req.body;
    if (a === undefined || b === undefined)
        return res.status(400).json({ error: "Missing parameters" });

    const result = parseFloat(a) * parseFloat(b);
    res.json({ operation: "multiplication", result });
});

// ➗ DELETE /divide { "a": 8, "b": 2 } → 8 ÷ 2 = 4
app.delete("/divide", (req, res) => {
    const { a, b } = req.body;
    if (a === undefined || b === undefined)
        return res.status(400).json({ error: "Missing parameters" });

    if (parseFloat(b) === 0)
        return res.status(400).json({ error: "Division by zero is not allowed" });

    const result = parseFloat(a) / parseFloat(b);
    res.json({ operation: "division", result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Calculator microservice running on port ${PORT}`);
});
