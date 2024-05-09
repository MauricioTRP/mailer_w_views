const express = require('express')
const Jimp = require('jimp')
const hbs = require('express-handlebars')
const mailer = require('./src/mailer')

const app = express()

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT}`))

app.use(express.static("public"))
app.use(express.json()) // hace uso de objetos JSON en las respuestas y body
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"))
app.use("/popper", express.static("node_modules/@popperjs/core/dist/umd"))

app.set("view engine", "handlebars")
app.engine("handlebars", hbs.engine())

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/contact", (req, res) => {
  res.render("contact")
})

app.post("/mail", async (req, res) => {
  const mail = await mailer.send(req.body)

  res.send(req.body)
})