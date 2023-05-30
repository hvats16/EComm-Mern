import { Product } from "../models/products.models.js";

export const products = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({
			success: true,
			products,
		});
	} catch (error) {
		console.log(error);
	}
};

export const offers = async (req, res) => {
	try {
		res.json({
			success: true,
			products: [
				{
					urls: "https://e7.pngegg.com/pngimages/597/934/png-clipart-coupon-flyer-gratis-promotion-breakfast-coupon-blue-text.png",
				},
				{
					urls: "https://www.stockphotosecrets.com/wp-content/uploads/2022/01/canva-coupon-code-15-off.png",
				},
				{
					urls: "https://www.i1.creditdonkey.com/image/1/coupon-statistics@2x.jpg",
				},
				{
					urls: "https://d1lf7jq9a5epx3.cloudfront.net/wp-content/uploads/sites/2/2022/06/1200x600_header-1.jpg",
				},
			],
		});
	} catch (error) {
		console.log(error);
	}
};

export const search = async (req, res) => {
	const { search } = req.query;

	// Use the search query to find products in the database
	const filteredProducts = await Product.find({
		$or: [
			{ name: { $regex: search, $options: "i" } },
			{ description: { $regex: search, $options: "i" } },
		],
	}).limit(10);
	res.json(filteredProducts);
};
