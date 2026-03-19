// controllers/productController.js
exports.getAllProducts = (req, res) => {
  res.json({ message: 'Returning all products' });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Returning product ${productId}` });
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  res.json({ message: 'Product created', product: newProduct });
};

exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;
  res.json({ message: `Product ${productId} updated`, data: updatedData });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Product ${productId} deleted` });
};