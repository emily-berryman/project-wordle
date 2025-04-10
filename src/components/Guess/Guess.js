import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// takes in a guess and an answer, returns either incorrect, correct or misplaced

function Guess({ value, answer }) {
	const letterStatus = checkGuess(value, answer);
	return (
		<p className="guess">
			{range(5).map((num) => (
				<span className={`cell ${letterStatus?.[num].status || ""}`} key={num}>
					{letterStatus?.[num].letter || ""}
				</span>
			))}
		</p>
	);
}

export default Guess;
