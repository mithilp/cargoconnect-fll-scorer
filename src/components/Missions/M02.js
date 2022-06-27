import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Select from "../MissionTemplate/Select";

import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

const M02 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M02: { ...missions.M02, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="02"
				name="Unused Capacity"
				score={
					missions.M02.q1 === "completely"
						? 30
						: missions.M02.q1 === "partly"
						? 20
						: missions.M02.q1 === "no"
						? 0
						: 0
				}
			/>
			<Select
				question="Is the hinged container completely closed and partly full of contents (1-5 content pieces) or completely full of contents (All 6 content pieces)?"
				value={missions.M02.q1}
				onChange={(e) => setQ1(e.target.value)}
				placeholder="Select one"
				options={[
					{ value: "completely", label: "Completely" },
					{ value: "partly", label: "Partly" },
					{ value: "no", label: "No" },
				]}
			/>
		</CardWrapper>
	);
};

export default M02;
