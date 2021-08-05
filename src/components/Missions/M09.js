import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";
import Slider from "../MissionTemplate/Slider";

const M09 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M09: { ...missions.M09, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M09: { ...missions.M09, q2: val } });
		},
		[missions, setMissions]
	);
	const setQ3 = useCallback(
		(val) => {
			setMissions({ ...missions, M09: { ...missions.M09, q3: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="09"
				name="Tire Flip"
				score={
					(missions.M09.q1 === "yes" ? 10 : 0) +
					(missions.M09.q2 === "yes" ? 15 : 0) +
					missions.M09.q3 * 5
				}
			/>
			<YesNo
				question="Flips the heavy tread tire white side up"
				value={missions.M09.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Flips the small blue tire white side up"
				value={missions.M09.q2}
				setValue={setQ2}
			/>
			<Slider
				isDisabled={missions.M09.q2 !== "yes"}
				question="Tires that are in the circle"
				value={missions.M09.q3}
				setValue={setQ3}
				max={2}
			/>
		</CardWrapper>
	);
};

export default M09;
