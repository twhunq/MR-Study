const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

async function run() {
  try {
    const result = await mammoth.convertToHtml({ path: "Kỹ thuật truyền số liệu/Bài 5 KTTSL.docx" });
    console.log(result.value.substring(0, 2000));
  } catch (err) {
    console.error(err);
  }
}

run();
