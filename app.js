// https://expressjs.com/en/starter/hello-world.html:wq
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	  res.send('Hello World updated again!')
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
