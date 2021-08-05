import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";
import Slider from "../MissionTemplate/Slider";

const M08 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M08: { ...missions.M08, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M08: { ...missions.M08, q2: val } });
		},
		[missions, setMissions]
	);
	const setQ3 = useCallback(
		(val) => {
			setMissions({ ...missions, M08: { ...missions.M08, q3: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="08"
				name="Boccia"
				score={
					(missions.M08.q1 === "yes" ? 25 : 0) +
					missions.M08.q2 * 5 +
					(missions.M08.q3 === "yes" ? 10 : 0)
				}
			/>
			<YesNo
				question="Dancing on the dance floor at the end of the match"
				value={missions.M08.q1}
				setValue={setQ1}
			/>
			<Slider
				question="Any other color cubes in your target"
				value={missions.M08.q2}
				setValue={setQ2}
				max={18}
			/>
			<YesNo
				isDisabled={missions.M08.q2 === 0}
				question="At least one yellow cube completely in the target"
				value={missions.M08.q3}
				setValue={setQ3}
			/>
		</CardWrapper>
	);
};

export default M08;
