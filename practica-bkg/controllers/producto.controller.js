const Product = require('../models/producto');
const productCtrl = {};

productCtrl.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error fetching products' });
  }
};

productCtrl.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error fetching featured products' });
  }
};

productCtrl.createProduct = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);

    const { name, description, price, stock, featured } = req.body;
    const image = req.file.filename;

    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      featured,
      image
    });

    await newProduct.save();
    res.status(200).json({ 
      'status': '1', 
      'msg': 'Product created' 
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ 
      'status': '0', 
      'msg': 'Error creating product', 
      'error': error.message 
    });
  }
};

productCtrl.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, featured } = req.body;
    const image = req.file ? req.file.filename : req.body.image;

    await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      stock,
      featured,
      image
    });

    res.status(200).json({ status: '1', msg: 'Product updated' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error updating product', 'error': error.message });
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: '1', msg: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error deleting product', 'error': error.message });
  }
};

module.exports = productCtrl;
