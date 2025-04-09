import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

function GuessInput() {
	const [guess, setGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		if (guess.length !== 5) {
			window.alert("Please enter exactly 5 letters :)");
			return;
		}
		console.log({ guess });
		setGuess("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guess}
				required
				minLength={5}
				maxLength={5}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setGuess(nextGuess);
				}}
			/>
		</form>
	);
}

export default GuessInput;
