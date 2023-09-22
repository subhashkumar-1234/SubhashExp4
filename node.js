const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/worksheet.html");
});
app.post("/save", (req, res) => {
  const tableData = req.body.tableData.join("\n");
  fs.writeFile("employeedata.txt", tableData, (err) => {
    if (err) {
      console.error("Error saving table data:", err);
      res.status(500).send("Error saving table data");
    } else {
      console.log("Table data saved:", tableData);
      res.send("Table data saved successfully");
    }
  });
});
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
