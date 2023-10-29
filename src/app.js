const express = require('express')
const app = express()
const port = 3000;

const bookRoute = require("./routes/book.route");
// import modul koneksi database
const database = require("./database");

database.sync({force:true}).then(()=> {
    console.log("database synced");
}).catch((err)=> {
    console.error(`${err.message}`)
});


// parse json
app.use(express.json());
// parse x-www
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.json({
        status : 200,
        message : "REST API SERVER",
        data : null
    });
  });

app.use("/api/books",bookRoute);

  app.listen(port, () => {
    console.log(`server running app listening on port ${port}`);
  });