import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/crud");

// Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

// Model
const Product = mongoose.model("products", productSchema);

// INSERT MANY
const insertManyInDB = async () => {
    let data = await Product.insertMany([
        { name: "Laptop", price: 67000 },
        { name: "Mobile", price: 25000 },
        { name: "Tablet", price: 30000 }
    ]);
    console.log(data);
};

// INSERT ONE
const saveInDB = async () => {
    let data = new Product({ name: "Laptop", price: 67000 });
    let result = await data.save();
    console.log(result);
};

// UPDATE
const updateInDB = async () => {
    let data = await Product.updateOne(
        { _id: "6931185c9ec9680ab044ee1e" },
        { $set: { price: 34000 } }
    );
    console.log(data);
};

const deleteOneInDB = async () => {
    let data = await Product.deleteOne({ _id: "6931185c9ec9680ab044ee1e" });
    console.log(data);
};

const findInDB = async () => {
    let data = await Product.find();
    console.log(data);
};

// RUN FUNCTIONS HERE
// saveInDB();
// updateInDB();
insertManyInDB();
//deleteOneInDB();
// findInDB();