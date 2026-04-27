const { MongoClient }=require('mongodb');

const url='mongodb://localhost:27017/';

const client=new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error('DB connection error:', err);
  }
}

module.exports=connectDB;