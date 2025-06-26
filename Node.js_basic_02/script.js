//  Node.js Basic
// Introduction to Node.js.
// Installung Node.js and npm.
// Working with modules.
// File sysytem operations.
// understanding Http module

// const fs = require('node:fs');

// // writeFile
// fs.writeFile("hey.txt", "hi hello kase ho ", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// // appendFile
// fs.appendFile("hey.txt", "mai to acha hon", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// // renameFile
// fs.rename("hey.txt", "Hello.txt", function(err){
// if(err) console.error(err);
// else console.log("done");
// })

// // copyFile
// fs.copyFile("Hello.txt", "./copy/Hell2.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });

// // unlink
// fs.unlink("Hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// // rmdir
// fs.rmdir("./copy",{recursive: true}, function(err){
//     if(err) console.error(err);
//     else console.log("removed")
// })

// // mkdir
// fs.mkdir("copy", { recursive: true }, function(err){
//   if (err) console.error("err");
//   else console.log("created");
// })

// fs.readFile("Hello.txt",function(err){
//     if(err) console.error("err");
//     else console.log("reading");
// })



// const fs = require('node:fs/promises');

// async function fileOperations() {
//   try {
//     // Step 1: writeFile
//     await fs.writeFile("hey.txt", "hi hello kase ho ");
//     console.log("hey.txt created");

//     // Step 2: appendFile
//     await fs.appendFile("hey.txt", " mai to acha hon");
//     console.log(" Text appended");

//     // Step 3: rename
//     await fs.rename("hey.txt", "Hello.txt");
//     console.log("File renamed to Hello.txt");

//     // Step 4: make 'copy' folder
//     await fs.mkdir("copy", { recursive: true });
//     console.log("copy folder created");

//     // Step 5: copyFile to copy/Hell2.txt
//     await fs.copyFile("Hello.txt", "./copy/Hell2.txt");
//     console.log("File copied to copy/Hell2.txt");

//     // Step 6: readFile
//     const data = await fs.readFile("Hello.txt", "utf-8");
//     console.log("File content:", data);

//     // Step 7: delete Hello.txt
//     await fs.unlink("Hello.txt");
//     console.log("Hello.txt deleted");

//     // Step 8: delete 'copy' folder
//     await fs.rm("copy", { recursive: true, force: true });
//     console.log(" copy folder removed");

//   } catch (err) {
//     console.error(" Error:", err.message);
//   }
// }

// // Call the function
// fileOperations();


// http module
const http = require('http');

const server =http.createServer(function(req,res){
    res.end("hello world");
})
server.listen(3000);


