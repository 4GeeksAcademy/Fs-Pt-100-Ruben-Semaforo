import React, { useState } from "react";



//create your first component
const Home = () => {

	const [colors, setColors] = useState("red")
	const [purple, setPurple] = useState(false)

	const changeColors = () => {
		if (purple) {
			if (colors === "redLigth") {
			setColors ("yellowLigth")
			} 
			if (colors === "yellowLigth") {
			setColors ("greenLigth")
			}
			if (colors === "greenLigth") {
			setColors ("purpleLigth")
			}
			if (colors === "purpleLigth") {
			setColors ("redLigth")
			}
		} else {
			if (colors === "redLigth") {
			setColors ("yellowLigth")
			} 
			if (colors === "yellowLigth") {
			setColors ("greenLigth")
			}
			if (colors === "greenLigth") {
			setColors ("redLigth")
			}
		}
		
	}
	const randomLigth = () => {
		const colores = ['redLigth', 'greenLigth', 'yellowLigth', 'purpleLigth']
		const random = colores[Math.floor(Math.random()*colores.length)]
		setColors(random)
	}

	const colorPurple = () => {
		setPurple(!purple)
	}

	const handleClick = (val) => {
		setColors(val)
	}


	return (
		<div className="back conteiner-fluid">
			<div className="paloSemaforo">
			</div>
			<div className="semaforo container">
				<div className={`redLigth ${colors === "redLigth" ? "iluminar" : " "}`} onClick={()=>handleClick('redLigth')}></div>
				<div className={`yellowLigth ${colors === "yellowLigth" ? "iluminar" : " "}`} onClick={()=>handleClick('yellowLigth')}></div>
				<div className={`greenLigth ${colors === "greenLigth" ? "iluminar" : " "}`} onClick={()=>handleClick('greenLigth')}></div>
				{purple && (
				<div className={`purpleLigth ${colors === "purpleLigth" ? "iluminar" : " "}`} onClick={()=>handleClick('purpleLigth')}></div>
				)}
			</div>

			<div className="buttonColors">
				<button className="btn btn-primary" onClick={changeColors}>Change Colors</button>
				<button className="btn btn-primary" onClick={randomLigth}>Random Ligth</button>
			</div>
			<div>
				<button className="btn btn-primary" onClick={colorPurple}>Purple Button</button>
			</div>
		</div>
		
	);
};

export default Home;