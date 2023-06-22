require("dotenv").config();

const dbConnectionTs = require("./config/DB");
const cors = require("cors");
const routes = require("./routes/routes");
const express = require("express");
const app = express();
const path = require("path");

// database start
dbConnectionTs();

//middleware
app.use(express.json());
// app.use(cors());


app.use(express.urlencoded({ extended: true }));
//routes
app.use("/api", routes);

// Serve static files from the "public" folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//routes
app.use('/api',routes)




app.listen(process.env.PORT || 4000,()=>{
  console.log("server is running on ", process.env.PORT || 4000);
})








app.get("/*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 
});

app.listen(process.env.PORT || 9000, () => {
  console.log("server is running on ", process.env.PORT);
});
