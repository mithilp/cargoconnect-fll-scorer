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
				name="Innovation Project"
				score={
					missions.M02.q1 === "magenta"
						? 10
						: missions.M02.q1 === "yellow"
						? 15
						: missions.M02.q1 === "blue"
						? 20
						: 0
				}
			/>
			<Select
				question="The bottom of the pointer is on"
				value={missions.M02.q1}
				onChange={(e) => setQ1(e.target.value)}
				options={[
					{ value: "magenta", label: "Magenta" },
					{ value: "yellow", label: "Yellow" },
					{ value: "blue", label: "Blue" },
				]}
			/>
		</CardWrapper>
	);
};

export default M02;
