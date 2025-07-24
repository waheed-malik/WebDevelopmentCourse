const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

const data1 = {
  id: "64c23601e32f4a51b19b9263",
  name: "Laptop Pro",
  company: "64c23350e32f4a51b19b9231",
  price: 3466,
  colors: ["red", "blue", "green"], // ✅ fixed
  image: "/images/product-laptop.png",
  category: "64c2342de32f4a51b19b924e",
  isFeatured: true
};

const main = async () => {
  await client.connect();
  const db = client.db("shop");
  const collection = db.collection("products");

  await collection.insertOne(data1); // ✅ corrected variable name

  const data = await collection.find({ price: { $eq: 3466 } }).toArray();
  console.log(data);

  return "done";
};

main()
  .then(result => console.log(result))
  .catch(e => console.log("Error:", e))
  .finally(() => client.close());
