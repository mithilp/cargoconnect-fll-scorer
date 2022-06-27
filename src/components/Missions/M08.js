import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M08 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			if (val === "no") {
				setMissions({ ...missions, M08: { q1: val, q3: "no" } });
			} else {
				setMissions({ ...missions, M08: { ...missions.M08, q1: val } });
			}
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M08: { ...missions.M08, q2: val } });
		},
		[missions, setMissions]
	);
	const setQ3 = useCallback(
		(val) => {
			setMissions({ ...missions, M08: { ...missions.M08, q3: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="08"
				name="Air Drop"
				score={
					(missions.M08.q1 === "yes" ? 20 : 0) +
					(missions.M08.q2 === "yes" ? 10 : 0) +
					(missions.M08.q3 === "yes" ? 10 : 0)
				}
			/>
			<YesNo
				question="Is the food package separated from your helicopter?"
				value={missions.M08.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Is the food package separated from the other field’s helicopter and is completely in your field’s CARGO CONNECT circle?"
				value={missions.M08.q2}
				setValue={setQ2}
			/>
			<YesNo
				isDisabled={missions.M08.q1 !== "yes"}
				question="Have both teams separated their food packages from their field’s helicopters?"
				value={missions.M08.q3}
				setValue={setQ3}
			/>
		</CardWrapper>
	);
};

export default M08;
