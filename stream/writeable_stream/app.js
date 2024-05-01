const fs = require("fs");

const writeableStream = fs.createWriteStream("./output.txt");

writeableStream.write("ini merupakan teks baris pertama!\n");
writeableStream.write("ini merupakan teks baris kedua!\n");
writeableStream.end();