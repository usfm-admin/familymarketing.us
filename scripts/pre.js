const fs = require("fs");

const array = [];

const testfolder = "../public";

fs.readdir(testfolder, async (err, files) => {
 await files.map(async (file) => {
    array.push(file);
  });
  await console.log(array)
  await fs.writeFileSync("data.json", JSON.stringify(array))
});

