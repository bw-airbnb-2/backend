// Imports
const app = require("./api/app.js");

// port we are running on
const port = process.env.PORT || 8000;

// When we run the server this tells us its 
// running in the terminal
app.listen(port, () => {
    console.log(`Server started on localhost: ${port}
\nPress Ctrl-C to terminate.`);
});