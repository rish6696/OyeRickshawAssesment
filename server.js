const express = require('express')
const app = express();
const PORT = process.env.PORT || 5896


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/build'));

  app.use('*', (req, res) => {
    res.redirect('/')
})


app.listen(PORT, x => console.log(`server is started ${PORT}`))

//13.232.36.165

//pm2 start npm -- run start-production





