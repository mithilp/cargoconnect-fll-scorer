import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Select from "../MissionTemplate/Select";

const M13 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M13: { ...missions.M13, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="13"
				name="Weight Machine"
				score={
					missions.M13.q1 === "blue"
						? 10
						: missions.M13.q1 === "magenta"
						? 15
						: missions.M13.q1 === "yellow"
						? 20
						: 0
				}
			/>
			<Select
				question="Set the color before the match and pushes the lever down"
				value={missions.M13.q1}
				onChange={(e) => setQ1(e.target.value)}
				options={[
					{ value: "blue", label: "Blue" },
					{ value: "magenta", label: "Magenta" },
					{ value: "yellow", label: "Yellow" },
				]}
			/>
		</CardWrapper>
	);
};

export default M13;
