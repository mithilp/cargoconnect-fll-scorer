import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M04 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M04: { ...missions.M04, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M04: { ...missions.M04, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="04"
				name="Transportation Journey"
				score={
					(missions.M04.q1 === "yes" ? 30 : 0) +
					(missions.M04.q2 === "yes" ? 10 : 0)
				}
			/>
			<YesNo
				question="Has the truck reached its destination, completely past its blue end line, on the mat?"
				value={missions.M04.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Has the airplane reached its destination, completely past its blue end line, on the mat?"
				value={missions.M04.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M04;
