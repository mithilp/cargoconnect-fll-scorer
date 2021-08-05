import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M03 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M03: { ...missions.M03, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M03: { ...missions.M03, q2: val } });
		},
		[missions, setMissions]
	);
	const setQ3 = useCallback(
		(val) => {
			setMissions({ ...missions, M03: { ...missions.M03, q3: val } });
		},
		[missions, setMissions]
	);
	const setQ4 = useCallback(
		(val) => {
			setMissions({ ...missions, M03: { ...missions.M03, q4: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="03"
				name="Slide"
				score={
					(missions.M03.q1 === "yes" ? 5 : 0) +
					(missions.M03.q2 === "yes" ? 15 : 0) +
					(missions.M03.q3 === "yes" ? 10 : 0) +
					(missions.M03.q4 === "yes" ? 10 : 0)
				}
			/>
			<YesNo
				question="First person off the slide"
				value={missions.M03.q1}
				setValue={(val) => {
					setQ1(val);
					if (val !== "yes") {
						setQ2("no");
						setQ3("no");
						setQ4("no");
					}
				}}
			/>
			<YesNo
				isDisabled={missions.M03.q1 !== "yes"}
				question="Second person off the slide"
				value={missions.M03.q2}
				setValue={setQ2}
			/>
			<YesNo
				isDisabled={missions.M03.q1 !== "yes"}
				question="If a person is returned to home"
				value={missions.M03.q3}
				setValue={setQ3}
			/>
			<YesNo
				isDisabled={missions.M03.q1 !== "yes"}
				question="If a person is on the heavy tire"
				value={missions.M03.q4}
				setValue={setQ4}
			/>
		</CardWrapper>
	);
};

export default M03;
