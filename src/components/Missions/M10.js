import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M10 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M10: { ...missions.M10, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="10"
				name="Cell Phone"
				score={missions.M10.q1 === "yes" ? 15 : 0}
			/>
			<YesNo
				question="Flips the cell phone white side up."
				value={missions.M10.q1}
				setValue={setQ1}
			/>
		</CardWrapper>
	);
};

export default M10;
