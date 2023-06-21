require('dotenv').config();

const dbConnectionTs = require("./config/DB")
const cors = require("cors")
const routes = require('./routes/routes')
const express = require("express")
const app = express()
const helmet =  require("helmet")
const path = require("path")

const PORT = 9000 || 3000
// database start
dbConnectionTs()


//middleware
app.use(express.json())
 app.use(cors())

// app.use(helmet.contentSecurityPolicy({
//   directives: {
//       "default-src":[ "'self'" ],
//       "base-uri":[ "'self'" ],
//       "font-src":[ "'self'", "https:", "data:" ],
//       "frame-ancestors":[ "'self'" ],
//       // "img-src":[ "'self'", "data:", "http://res.cloudinary.com"],
//       "script-src":[ "'self'" ],
//       "script-src-attr":[ "'none'" ],
//       "style-src":[ "'self'", "https:", "'unsafe-inline'" ],
//   }
// })) 
 


app.use(express.urlencoded({ extended: true }));


// Serve static files from the "public" folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//routes
app.use('/api',routes)




app.listen(PORT,()=>{
  console.log("server is running on ", PORT);
})









