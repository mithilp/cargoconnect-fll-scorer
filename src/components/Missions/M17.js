import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Slider from "../MissionTemplate/Slider";

const M17 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M17: { ...missions.M17, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="17"
				name="Precision"
				score={
					missions.M17.q1 === 1
						? 10
						: missions.M17.q1 === 2
						? 15
						: missions.M17.q1 === 3
						? 25
						: missions.M17.q1 === 4
						? 35
						: missions.M17.q1 === 5
						? 50
						: missions.M17.q1 === 6
						? 50
						: 0
				}
			/>
			<Slider
				question="Precision token left after the match"
				value={missions.M17.q1}
				setValue={setQ1}
				max={6}
				defaultValue={6}
			/>
		</CardWrapper>
	);
};

export default M17;
