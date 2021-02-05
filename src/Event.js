import React from "react";
import Edata from "./Edata";
import Card from "./Card";

const Event = () => {
	return (

		<>
		<div className = "my-5">
			<h1 className="text-center"> Our Events </h1>
		</div>
		<div className="container-fluid mb-5">
			<div className = 'row'>
				<div className='col-10 mx-auto'>
					<div className="row gy-4">
						{
							Edata.map((val, ind) => {
								return <Card key={ind}
									imgsrc={val.imgsrc}
									title={val.title}
									text={val.text}
								 />
							})
						}
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Event;