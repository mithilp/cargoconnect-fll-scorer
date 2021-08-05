import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Select from "../MissionTemplate/Select";
import YesNo from "../MissionTemplate/YesNo";

const M05 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M05: { ...missions.M05, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M05: { ...missions.M05, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="05"
				name="Basketball"
				score={
					(missions.M05.q1 === "yes" ? 15 : 0) +
					(missions.M05.q2 === "middle"
						? 15
						: missions.M05.q2 === "top"
						? 25
						: 0)
				}
			/>
			<YesNo
				question="Cube inside the crate"
				value={missions.M05.q1}
				setValue={setQ1}
			/>
			<Select
				question="The bottom of the pointer is on"
				value={missions.M05.q2}
				onChange={(e) => setQ2(e.target.value)}
				options={[
					{ value: "middle", label: "Middle Height" },
					{ value: "top", label: "Top Height" },
				]}
			/>
		</CardWrapper>
	);
};

export default M05;
