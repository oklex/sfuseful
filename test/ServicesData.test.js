const data = require("../src/data/data-march-18.json");
// import { allDepartments } from "../src/models/services";

describe("testing service data", () => {
  test("department strings are capitalized", () => {
    let isConsistent = true;
    let messages = [];
    for (index = 0; index < data.length; index++) {
      if (
        data[index].departments &&
        !(data[index].departments === data[index].departments.toUpperCase())
      ) {
        isConsistent = false;
        messages.push(
          "data at index " +
            index +
            " - " +
            data[index].title +
            ", has invalid departments var: " +
            data[index].departments +
            "\n"
        );
      }
    }
    console.log(messages);
    expect(isConsistent).toBe(true);
  });

  test("department strings are all valid options", () => {
    allDepartments = ["BUS", "CS", "ENSC", "HS", "ALL"];
    let isConsistent = false;
    let messages = [];
    for (index = 0; index < data.length; index++) {
      var singleWord = "";
      var departments = data[index].departments;
      for (j = 0; j < departments.length; j++) {
        if (departments[j].match(/[a-z]/i)) {
          singleWord = singleWord + departments[j];
        } else if (departments[j] !== " ") {
          messages.push(
            "data at index " +
              index +
              " - " +
              data[index].title +
              ", has an invalid char: " +
              departments[j]
          );
        } else if (departments[j] === " ") {
          isConsistent = false;
          allDepartments.forEach(department => {
            if (singleWord === department) {
              isConsistent = true;
            }
          });
          if (!isConsistent) {
            messages.push(
              "data at index " +
                index +
                " - " +
                data[index].title +
                ", has an invalid department word: " +
                singleWord
            );
          }
          singleWord = "";
        }
      }
    }
  });
});
