const FS = require("fs");

const readableStream = FS.createReadStream("./input.txt", {
    highWaterMark: 15,
})
const writeableStream = FS.createWriteStream("./output.txt")

readableStream.on("readable", () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        return "Sorry we can't read the file";
    }
});

readableStream.on("end", () => {
    writeableStream.end();
    console.log("The process is done!");

});
