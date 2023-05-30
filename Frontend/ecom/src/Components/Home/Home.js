import React, { useEffect, useState } from "react";
import Slider from "../SliderComponent/Slider";
import axios from "axios";
import { server } from "../../App.js";
import { Card } from "../ProductCard/Card";
import "./Home.css";

const Home = () => {
	const [searchKey, updateSearchKey] = useState("");
	const [productList, updateProductList] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [sliderImage, setsliderImage] = useState([]);
	const [timerId, setTimerId] = useState(null);

	const sliderImageApi = async () => {
		const url = `${server}/offers`;
		const response = await axios.get(url);
		setsliderImage(response.data.products);
		// console.log(response.data.products);
	};

	const performSearch = async () => {
		const url = `${server}/search?search=${searchKey}`;
		const response = await axios.get(url);
		setFilteredProducts(response.data);
		console.log(response.data);
	};

	const performApiCall = async () => {
		const url = `${server}/products`;
		const response = await axios.get(url);
		await updateProductList(response.data.products);
		await setFilteredProducts(response.data.products);
		// console.log(response.data.products);
	};
	useEffect(() => {
		performApiCall();
		sliderImageApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!searchKey) {
			setFilteredProducts(productList);
		} else {
			if (timerId) {
				clearTimeout(timerId);
			}
			const debounceTimerId = setTimeout(() => performSearch(), 500);
			setTimerId(debounceTimerId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchKey]);

	return (
		<>
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid justify-content-center">
					{/* <a className="navbar-brand" href="/">
						Shopse
					</a> */}
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							value={searchKey}
							onChange={(event) => updateSearchKey(event.target.value)}
						/>
					</form>
				</div>
			</nav>
			{/* {console.log(sliderImage)} */}
			<Slider sliderImage={sliderImage} />
			<div className="product-card">
				{filteredProducts.map((list, index) => {
					return <Card list={list} key={index} />;
				})}
			</div>
		</>
	);
};

export default Home;
