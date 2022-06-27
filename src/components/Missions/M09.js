import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M09 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M09: { ...missions.M09, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M09: { ...missions.M09, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="09"
				name="Train Tracks"
				score={
					(missions.M09.q1 === "yes" ? 20 : 0) +
					(missions.M09.q2 === "yes" ? 20 : 0)
				}
			/>
			<YesNo
				question="Is the train track repaired so that it rests completely down/west?"
				value={missions.M09.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Has the train reached its destination, latched at the end of the tracks?"
				value={missions.M09.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M09;
