const fs = require("fs");

// Read
// fs.readFile('./docs/creativecoder.txt', (error, data) =>  {
//     if(error) {
//         console.log(error);
//     }

//     console.log(data.toString());
// });

//write

// if (!fs.existsSync("./docs/creativecoder123.txt")) {
//   fs.writeFile("./docs/creativecoder123.txt", "Hello World", (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("after writing files.");
//   });
// } else {

//     // delete
//   fs.unlink("./docs/creativecoder123.txt", (error) => {
//     if (error) {
//       console.log(error);
//     }

//     console.log("file deleted");
//   });
// }

// folder create
// fs.mkdir('./new-folder', (err) =>  {
//     if(err) {
//         console.log(err);
//     }

//     console.log('folder created.');
// })


// folder delete
// fs.rmdir('./new-folder', (err) => {
//     if(err) {
//         console.log(err);
//     }

//     console.log('folder deleted.');
// })