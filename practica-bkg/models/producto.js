const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  featured: { type: Boolean, required: true }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
