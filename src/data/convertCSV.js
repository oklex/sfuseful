const fs = require("fs");
const csvtojsonV2 = require("csvtojson/v2");
const csvFilePath = "./src/data/List.csv";
const fileName = "./src/data/data-march-24.json";

let csvToJson = require("convert-csv-to-json");

let fileInputName = "./src/data/List.csv";
let fileOutputName = "./src/data/data-march-24.json";

console.log("starting conversion");

// let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(fileInputName);
// fs.writeFile(fileName, JSON.stringify(json), err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("File has been created");
//   });

run = async () => {
  await csvtojsonV2({
    output: "json",
    ignoreEmpty: true
  })
    .fromFile(csvFilePath)
    .then(jsonObj => {
      console.log(jsonObj);
      fs.writeFile(fileName, JSON.stringify(jsonObj), err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File has been created");
      });
    })
    .catch(err => {
      console.log("csv file path: ", csvFilePath);
      console.log(err);
    });
};

run();
