import React from "react";

import "./Card.css";
import Slider from "../SliderComponent/Slider";

export const Card = ({ list }) => {
	return (
		<div className="card-container">
        {console.log(list.listOfImages)}
			{<Slider sliderImage={list.listOfImages}/>}
			{list.name && <h1 className="card-title">{list.name}</h1>}
			{list.description && <p className="card-description">{list.description}</p>}
			{list.brandName  && (
				<a href={"/"} className="card-btn">
					{"View More"}
				</a>
			)}
		</div>
	);
};
