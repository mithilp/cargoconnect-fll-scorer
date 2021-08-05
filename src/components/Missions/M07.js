import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M07 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M07: { ...missions.M07, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="07"
				name="Robot Dance"
				score={missions.M07.q1 === "yes" ? 10 : 0}
			/>
			<YesNo
				question="Dancing on the dance floor at the end of the match"
				value={missions.M07.q1}
				setValue={setQ1}
			/>
		</CardWrapper>
	);
};

export default M07;
