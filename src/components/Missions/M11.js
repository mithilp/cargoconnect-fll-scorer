import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Select from "../MissionTemplate/Select";

const M11 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M11: { ...missions.M11, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="11"
				name="Treadmill"
				score={
					missions.M11.q1 === "gray"
						? 5
						: missions.M11.q1 === "red"
						? 10
						: missions.M11.q1 === "orange"
						? 15
						: missions.M11.q1 === "yellow"
						? 20
						: missions.M11.q1 === "green"
						? 25
						: missions.M11.q1 === "dark-green"
						? 30
						: 0
				}
			/>
			<Select
				question="Spins the rollers to a specific color"
				value={missions.M11.q1}
				onChange={(e) => setQ1(e.target.value)}
				options={[
					{ value: "gray", label: "Gray" },
					{ value: "red", label: "Red" },
					{ value: "orange", label: "Orange" },
					{ value: "yellow", label: "Yellow" },
					{ value: "green", label: "Green" },
					{ value: "dark-green", label: "Dark Green" },
				]}
			/>
		</CardWrapper>
	);
};

export default M11;
