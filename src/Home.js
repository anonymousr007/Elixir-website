import React from "react";
import logo from "../src/img/Logo.png";
import {NavLink} from "react-router-dom";
import Common from './Common';

const Home = () => {
	return (

		<>
		<Common 
		name = ""
		nameS = 'Elixir' 
		imgsrc = {logo} 
		visit = "/event"
		btname = 'Lets-go'
		context = 'The health and fitness society of DTU'
		/>
	</>
	);
};

export default Home;