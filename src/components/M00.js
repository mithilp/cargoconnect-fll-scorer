import { useState } from "react";

import CardWrapper from "./CardWrapper";
import MissionHeader from "./MissionHeader";

import YesNo from "./YesNo";

const M00 = () => {
	const [yesQ1, setYesQ1] = useState(false);
	const [noQ1, setNoQ1] = useState(false);

	const [yesQ2, setYesQ2] = useState(false);
	const [noQ2, setNoQ2] = useState(false);

	return (
		<CardWrapper>
			<MissionHeader
				number="00"
				name="Advantage"
				score={(yesQ1 ? 25 : 0) + (yesQ2 ? 20 : 0)}
			/>
			<YesNo
				question="Does all team equipment fit in the small inspection space?"
				onYes={() => {
					setNoQ1(yesQ1 ? false : false);
					setYesQ1(!yesQ1);
				}}
				onNo={() => {
					setYesQ1(noQ1 ? false : false);
					setNoQ1(!noQ1);
				}}
			/>
			<YesNo
				question="Question 2"
				onYes={() => {
					setNoQ2(yesQ2 ? false : false);
					setYesQ2(!yesQ2);
				}}
				onNo={() => {
					setYesQ2(noQ2 ? false : false);
					setNoQ2(!noQ2);
				}}
			/>
		</CardWrapper>
	);
};

export default M00;
