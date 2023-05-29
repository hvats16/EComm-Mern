import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	listOfImages: [String],
	options: [String],
	name: String,
	description: String,
	_id: String,
	Productid: String,
	Quantity: String,
	Rating: Number,
	brandName: String,
});

export const Product = mongoose.model("Product", productSchema);
