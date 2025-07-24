const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1/shop";

const uri= "mongodb+srv://waheed:waheed123$@cluster0.75dv2zt.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri);

// Schema
const productSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean,
});

const data1 = {
  id: "64c23601e32f4a51b19b9263",
  name: "Laptop Pro",
  company: "64c23350e32f4a51b19b9231",
  price: 2466,
  colors: ["red", "blue", "green"],
  image: "/images/product-laptop.png",
  category: "64c2342de32f4a51b19b924e",
  isFeatured: true
};

// Model
const product = new mongoose.model('Product', productSchema);

const main = async () => {
    try {
        // ? 2: insert documents
        // await product.insertMany([data1]); // ✅ fixed 'product' + wrapped in array
        // const data = await product.find({ price: { $eq: 2466 } });
        // console.log(data);

        //? 3:update query

        const updateQuery= await product.findOneAndUpdate({name:"Laptop Pro", price:2466},

            {$set: {price:2499}}
        );
        const data = await product.find({ price: { $eq: 2499 } });
        console.log(data);


    } catch (error) {
        console.log("Error:", error);
    } finally {
        mongoose.connection.close();
    }
};

main();




