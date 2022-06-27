import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M07 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			if (val === "no") {
				setMissions({ ...missions, M07: { q1: val, q2: "no" } });
			} else {
				setMissions({ ...missions, M07: { ...missions.M07, q1: val } });
			}
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M07: { ...missions.M07, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="07"
				name="Unload Cargo Ship"
				score={
					(missions.M07.q1 === "yes" ? 20 : 0) +
					(missions.M07.q2 === "yes" ? 10 : 0)
				}
			/>
			<YesNo
				question="Moves the wheel out of the large circle"
				value={missions.M07.q1}
				setValue={setQ1}
			/>
			<YesNo
				isDisabled={missions.M07.q1 !== "yes"}
				question="Moves the wheel into the smaller circle"
				value={missions.M07.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M07;
