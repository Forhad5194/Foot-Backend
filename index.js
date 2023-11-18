const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 5000;



// middleware 

app.use(cors());
app.use(express.json());



// Mongodb 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://FootUser:<password>@cluster0.gliiomq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port , ()=> {
    console.log(` Foot server is start  on ${port}`);
});