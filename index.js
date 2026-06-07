const express = require ("express");
const app = express();

const PORT = 8000;

app.use('/',(req,res)=>{
	res.json({"message":"Hello World"});
})

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))
