import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M06 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({
				...missions,
				M06: { q1: val, q2: val === "yes" ? "no" : missions.M06.q2 },
			});
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({
				...missions,
				M06: { q2: val, q1: val === "yes" ? "no" : missions.M06.q1 },
			});
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="06"
				name="Accident Avoidance"
				score={
					(missions.M06.q1 === "yes" ? 20 : 0) +
					(missions.M06.q2 === "yes" ? 30 : 0)
				}
			/>
			<YesNo
				question="Robot goes under the bar"
				value={missions.M06.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Robot lifts itself at the end of the match"
				value={missions.M06.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M06;
