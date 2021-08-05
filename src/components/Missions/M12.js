import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import YesNo from "../MissionTemplate/YesNo";

const M12 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M12: { ...missions.M12, q1: val } });
		},
		[missions, setMissions]
	);
	const setQ2 = useCallback(
		(val) => {
			setMissions({ ...missions, M12: { ...missions.M12, q2: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="12"
				name="Row Machine"
				score={
					(missions.M12.q1 === "yes" ? 15 : 0) +
					(missions.M12.q2 === "yes" ? 15 : 0)
				}
			/>
			<YesNo
				question="Moves the wheel out of the large circle"
				value={missions.M12.q1}
				setValue={(val) => {
					setQ1(val);
					if (val !== "yes") {
						setQ2("no");
					}
				}}
			/>
			<YesNo
				isDisabled={missions.M12.q1 !== "yes"}
				question="Moves the wheel into the smaller circle"
				value={missions.M12.q2}
				setValue={setQ2}
			/>
		</CardWrapper>
	);
};

export default M12;
