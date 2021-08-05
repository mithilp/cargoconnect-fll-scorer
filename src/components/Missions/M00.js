import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

const M00 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M00: { ...missions.M00, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="00"
				name="Advantage"
				score={missions.M00.q1 === "yes" ? 25 : 0}
			/>
			<YesNo
				question="Does all team equipment fit in the small inspection space?"
				value={missions.M00.q1}
				setValue={setQ1}
			/>
		</CardWrapper>
	);
};

export default M00;
