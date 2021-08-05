import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Slider from "../MissionTemplate/Slider";

const M14 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M15: { ...missions.M15, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="15"
				name="Precision Tokens"
				score={
					missions.M15.q1 === 1
						? 5
						: missions.M15.q1 === 2
						? 10
						: missions.M15.q1 === 3
						? 20
						: missions.M15.q1 === 4
						? 30
						: missions.M15.q1 === 5
						? 45
						: missions.M15.q1 === 6
						? 60
						: 0
				}
			/>
			<Slider
				question="Precision token left after the match"
				value={missions.M15.q1}
				setValue={setQ1}
				max={6}
				defaultValue={6}
			/>
		</CardWrapper>
	);
};

export default M14;
