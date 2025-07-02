const http = require("http");
const fs_promises = require("fs/promises");

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  // reading the homePage.html file using file system
  const homePageContent = await fs_promises.readFile("homePage.html", {
    encoding: "utf-8",
  });
  res.end(homePageContent);
});

// server is started and running at the PORT 3000
server.listen(PORT, () => {
  console.log("server is running at PORT", PORT);
});
