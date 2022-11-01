const express = require("express");

const app = express()

// Ignore this:
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Used to parse the incoming requests with JSON payloads
app.use(express.json())

// Any requests for static files will go into the public folder
app.use(express.static("public"))

app.post('/submit', (req, res) => {    
  // req.query:
  // localhost:3000/?text=whatever => req.query.text = whatever
  // req.params:
  // localhost:3000/5 (localhost:3000/:id) => req.params.id = 5

  console.log(req.body)

  const { username, password } = req.body

  
  if (username.length < 2)
    res.status(200).json({ status: 400, message: "Bad data. Your username is too short." })
  
  if (password.length < 3)
    res.status(400).json({ status: 400, message: "Bad data. Your password is too short." })

  res.status(200).json({ status: 200, message: "Data is all good :)"})
})

app.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Bad route :(",
    });
})

app.listen(8080, () => console.log(`Listening on port 8080`))