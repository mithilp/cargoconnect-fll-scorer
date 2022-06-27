import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M13 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M13: { ...missions.M13, q1: val } });
		},
		[missions, setMissions]
	);

	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M13: { ...missions.M13, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="13"
				name="Platooning Trucks"
				score={
					(missions.M13.q1 === "yes" ? 10 : 0) +
					(missions.M13.q2 === "yes" ? 20 : 0)
				}
			/>
			<YesNo
				question="Are both trucks latched together completely outside of home?"
				value={missions.M13.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Is a truck latched to the bridge?"
				value={missions.M13.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M13;
