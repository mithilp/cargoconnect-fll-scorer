import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M05 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M05: { ...missions.M05, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="05"
				name="Switch Engine"
				score={missions.M05.q1 === "yes" ? 20 : 0}
			/>
			<YesNo
				question="Has the engine been switched from diesel to electric so that the yellow bar rests all the way down/south?"
				value={missions.M05.q1}
				setValue={setQ1}
			/>
		</CardWrapper>
	);
};

export default M05;
