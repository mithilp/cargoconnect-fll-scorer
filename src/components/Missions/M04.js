import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";
import Slider from "../MissionTemplate/Slider";

const M04 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M04: { ...missions.M04, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M04: { ...missions.M04, q2: val } });
		},
		[missions, setMissions]
	);
	const setQ3 = useCallback(
		(val) => {
			setMissions({ ...missions, M04: { ...missions.M04, q3: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="04"
				name="Bench"
				score={
					(missions.M04.q1 === "yes" ? 10 : 0) +
					(missions.M04.q2 === "yes" ? 15 : 0) +
					missions.M04.q3 * 10
				}
			/>
			<YesNo
				question="Knocks down the bench"
				value={missions.M04.q1}
				setValue={(val) => {
					setQ1(val);
					if (val !== "yes") {
						setQ3(0);
					}
				}}
			/>
			<YesNo
				question="Takes off back rest"
				value={missions.M04.q2}
				setValue={setQ2}
			/>
			<Slider
				isDisabled={missions.M04.q1 !== "yes"}
				question="Cubes in hop scotch spaces"
				value={missions.M04.q3}
				setValue={setQ3}
				max={4}
			/>
		</CardWrapper>
	);
};

export default M04;
