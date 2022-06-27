import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M03 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M03: { ...missions.M03, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M03: { ...missions.M03, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="03"
				name="Unload Cargo Plane"
				score={
					(missions.M03.q1 === "yes" ? 20 : 0) +
					(missions.M03.q2 === "yes" ? 10 : 0)
				}
			/>
			<YesNo
				question="Has the cargo plane been prepared for unloading so that the cargo door rests completely down, touching its black frame?"
				value={missions.M03.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Has the cargo plane been unloaded so that the container is completely separate from the plane?"
				value={missions.M03.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M03;
