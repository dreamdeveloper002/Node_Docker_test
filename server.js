const express = require('express');

const app = express();


app.get("/", (req, res) =>{
   res.send("hey there")
});


const PORT = 8080;


app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`)
})