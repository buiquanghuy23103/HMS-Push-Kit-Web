let express = require('express');
let http = require('http');
let cors = require("cors");
let cookieParser = require("cookie-parser");

let app = express();
let port = 5060;

app.use("/webpush", express.static("./",{index:"index.html"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

http.createServer(app).listen(port, (error) => {
    if (error) {
        console.error(error)
        return process.exit(1)
    } else {
        console.log('Listening on port: ' + port + '.')
    }
})
