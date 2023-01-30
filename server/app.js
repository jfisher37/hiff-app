const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello");
})

app.use(express.static('../client'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`PSA Server is listening on port ${PORT}`)
})