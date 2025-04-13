const fs = require("fs");
const Handlebars = require("handlebars");

const templateSource = fs.readFileSync("template.hbs", "utf8");
const template = Handlebars.compile(templateSource);
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const result = template(data);
fs.writeFileSync("output.html", result);
console.log("output.html erstellt!");

