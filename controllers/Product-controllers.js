const Product = require('../model/Product-model.js');

// Get all products
exports.getAllProducts = async (req, res)=>{
    try {
        const getAllProducts = await Product.find({});
        if(getAllProducts.length === 0){
            res.status(404).json({
                success:false,
                message:"No products found"
            });
        }else{
        res.status(200).json({
            success:true,
            message:"All products fetched successfully",
            data:getAllProducts
        });
    }
    } catch (error) {
        console.log('Error occured while fetching data',error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        });
    }
}

exports.getProductById = async (req, res)=>{
    try {
        const getBroductById = req.params.id
        const getSingleProduct = await Product.findById(getBroductById);
        if(!getSingleProduct){
            res.status(404).json({
                success:false,
                message:'No product found with this ID'
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Product fetched successfully by ID",
                data:getSingleProduct
            });
        }
    } catch (error) {
        console.log('Error occured while fetching data by ID', error);
        res.status(500).json({
            success:false,
            message:'Something went wrong! Please try again later...'
        });
    }
}

exports.addProduct = async (req, res)=>{
    try {
        const addProduct = await Product.create(req.body);
        res.status(201).json({
            success:true,
            message:"Product added successfuly",
            data:addProduct
        });
    } catch (error) {
        console.log('Error occured while adding product', error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        });
    }
}

exports.updateProduct = async (req, res)=>{
    try {
        const updateProductById = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(updateProductById, req.body, {new:true, runValidators:true});

        if(!updatedProduct){
            res.status(404).json({
                success:false,
                message:"No product found with this ID"
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Product updated successfuly",
                data:updatedProduct
            });
        }
    } catch (error) {
        console.log('Error occured while updating product', error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        });
    }
}

exports.deleteProduct = async (req, res)=>{
    try {
        const deleteProductById = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(deleteProductById);

        if(!deleteProduct){
            res.status(404).json({
                success:false,
                message:"No product found with this ID"
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Product deleted successfuly",
                data:deleteProduct
            });
        }
    } catch (error) {
        console.log('Error occured while deleting product', error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again later..."
        })
    }
}