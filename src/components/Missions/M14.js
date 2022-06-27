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

	return (
		<CardWrapper>
			<MissionHeader number="14" name="Bridge" score={missions.M14.q1 * 10} />
			<Slider
				question="How many bridge decks have been lowered and rest on their center support?"
				value={missions.M14.q1}
				setValue={setQ1}
				max={2}
			/>
		</CardWrapper>
	);
};

export default M14;
