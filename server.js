var express = require('express')
var bodyparser = require('body-parser')
var app = express()

app.use(express.static("public"))

//body-parser
var urlencodedparser = bodyparser.urlencoded({ extended: false })
app.use(urlencodedparser)

//cookie-parser
var cookieParser = require('cookie-parser')
app.use(cookieParser())


//@@@@@@@@@@@@ Methods can be used to send data to client @@@@@@@@@@@@@@
// res.send()
// res.json()
// res.sendFile()
// res.download()
// res.attachment()
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


app.get("/test", (req, res) => {
	res.send("HI")
})

app.get("/index", (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})


app.get("/senddata", (req, res) => {
	var name = req.query.name
	var age = req.query.age
	res.send(JSON.stringify({ name: name, age: age }))
})


app.post("/senddata", (req, res) => {
	var name = req.body.name
	var age = req.body.age
	var cookie = req.cookies.name
	res.send(JSON.stringify({ name: name, age: age, cookie: { name: cookie } }))
})


app.get("/getcookie", (req, res) => {
	res.cookie("name", "manju")
	res.send("Cookie set!!!")
})


var server = app.listen('8876', () => {
	var address = server.address().address
	var port = server.address().port
	console.log("Running...", address + ":" + port)
})
