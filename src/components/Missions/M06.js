import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M06 = () => {
	// const [q1, setQ1] = useState("none");
	// const [q2, setQ2] = useState("none");
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M06: { ...missions.M06, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M06: { ...missions.M06, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="06"
				name="Pull-up Bar"
				score={
					(missions.M06.q1 === "yes" ? 15 : 0) +
					(missions.M06.q2 === "yes" ? 30 : 0)
				}
			/>
			<YesNo
				question="Robot goes under the bar"
				value={missions.M06.q1}
				setValue={setQ1}
			/>
			<YesNo
				question="Robot lifts itself at the end of the match"
				value={missions.M06.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M06;
