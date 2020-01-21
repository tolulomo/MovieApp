const express = require('express');
const parser = require('body-parser');

/*=====================
 Starting Express
=======================*/
const app = express();

/*=====================
 Body Parser
=======================*/
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

/*=====================
 Resolve CORS
=======================*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
})

// const simpleRoute = () => "Hello";

// app.use("/api", simpleRoute);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our App.js file, or main.css file!
    app.use(express.static('build'));
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}


module.exports = app;