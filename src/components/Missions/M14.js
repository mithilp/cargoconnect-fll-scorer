import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Slider from "../MissionTemplate/Slider";

const M14 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M14: { ...missions.M14, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M14: { ...missions.M14, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="14"
				name="Health Units"
				score={missions.M14.q1 * 5 + missions.M14.q2 * 10}
			/>
			<Slider
				question="How many health units are touching either the RePLAY logo or the gray area around the bench?"
				value={missions.M14.q1}
				setValue={(val) => {
					setQ1(val);
					if (val > 4 && missions.M14.q2 > 8 - val) {
						setQ2(8 - val);
					}
				}}
				max={8}
			/>
			<Slider
				question="How many health units are looped over a pull-up bar post as shown – maximum of four – and touching no equipment?"
				value={missions.M14.q2}
				setValue={(val) => {
					setQ2(val);
					if (missions.M14.q1 > 4) {
						setQ1(8 - val);
					}
				}}
				max={4}
			/>
		</CardWrapper>
	);
};

export default M14;
