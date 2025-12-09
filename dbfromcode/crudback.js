import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// DB Connection
mongoose.connect("mongodb://localhost:27017/crud");

// Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

// Model
const Product = mongoose.model("products", productSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'crudfront.html'));
});

// INSERT PRODUCT
app.post('/insert', async (req, res) => {
    try {
        const { name, price } = req.body;

        await Product.create({ name, price });

        res.send(`
            <h2>Product Saved Successfully</h2>
            <a href="/">Go Back</a>
        `);
    } catch (error) {
        res.status(500).send("Error saving product: " + error);
    }
});

// FETCH ALL PRODUCTS
app.get('/fetch', async (req, res) => {
    try {
        const data = await Product.find();
        const rows = data.map((p, i) =>
            `<tr>
                <td>${i + 1}</td>
                <td>${p.name}</td>
                <td>${p.price}</td>
            </tr>`
        ).join('');

        const html = `<!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Products</title>
            <style>
                body{font-family: Arial, sans-serif; padding:20px}
                table{border-collapse:collapse;width:80%;max-width:800px}
                th,td{border:1px solid #ccc;padding:8px;text-align:left}
                th{background:#f4f4f4}
                a{display:inline-block;margin-bottom:10px}
            </style>
        </head>
        <body>
            <h2>Products</h2>
            <a href="/">Add product</a>
            <table>
                <thead>
                    <tr><th>#</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                    ${rows || '<tr><td colspan="3">No products found</td></tr>'}
                </tbody>
            </table>
        </body>
        </html>`;

        res.send(html);
    } catch (error) {
        res.status(500).send('Error fetching products: ' + error);
    }
});


//update product
app.post('/update', async (req, res) => {
    try {
        const { id, price } = req.body;
        await Product.findByIdAndUpdate(id, { price });
        res.send(`
            <h2>Product Updated Successfully</h2>
            <a href="/">Go Back</a>
        `);
    } catch (error) {
        res.status(500).send("Error updating product: " + error);
    }
});

// Start Server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
