const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.static(__dirname));

app.listen(PORT, ()=> {
   console.log(`Сервер открыт на ${PORT} порту.`)
})