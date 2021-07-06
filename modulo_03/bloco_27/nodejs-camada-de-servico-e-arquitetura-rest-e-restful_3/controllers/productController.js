const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res, _next) => {
  try {
    const product = await ProductModel.getById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
  
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;

    await ProductModel.update(req.params.id, name, brand);
  
    res.status(200).json({ message: 'Produto atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
