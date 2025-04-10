import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : "cell";
	return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
	// takes in the guess value and answer, returns either incorrect, correct or misplaced
	const result = checkGuess(value, answer);
	return (
		<p className="guess">
			{range(5).map((num) => (
				<Cell
					key={num}
					letter={result?.[num]?.letter}
					status={result?.[num]?.status}
				/>
			))}
		</p>
	);
}

export default Guess;
