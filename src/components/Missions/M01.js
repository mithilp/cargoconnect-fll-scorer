import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

const M01 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M01: { ...missions.M01, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="01"
				name="Innovation Project"
				score={missions.M01.q1 === "yes" ? 20 : 0}
			/>
			<YesNo
				question="Is any part of the model touching either the RePLAY logo or the gray area around the bench?"
				value={missions.M01.q1}
				setValue={setQ1}
			/>
		</CardWrapper>
	);
};

export default M01;
