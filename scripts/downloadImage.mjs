import fs from 'node:fs';
import https from 'node:https';

const url = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgG0pn47uxlB_8bU6v87SS9gfxBAvAhgNYpjz692-LBSO0I8bmMjpI1MEcUxeKJ66CMM7ezC1eqMPUWyOAv7A8i70svPAuYYN9eUMOmqcsBvgEb1c25jvB4I9KsS08BVQKyXFp=s680-w680-h510-rw";
const dest = "./public/storefront-new.jpg";

https.get(url, (res) => {
  const fileStream = fs.createWriteStream(dest);
  res.pipe(fileStream);
  fileStream.on("finish", () => {
    fileStream.close();
    console.log("Download finished");
  });
}).on("error", (err) => {
  console.error("Error: ", err.message);
});
