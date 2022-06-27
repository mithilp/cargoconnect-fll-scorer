import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Select from "../MissionTemplate/Select";

const M11 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const setQ1 = useCallback(
		(val) => {
			setMissions({ ...missions, M11: { ...missions.M11, q1: val } });
		},
		[missions, setMissions]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="11"
				name="Home Delivery"
				score={
					missions.M11.q1 === "completely"
						? 20
						: missions.M11.q2 === "partly"
						? 10
						: 0
				}
			/>
			<Select
				question="Has the package been delivered to its destination so that it is on the doorstep?"
				value={missions.M11.q1}
				onChange={(e) => setQ1(e.target.value)}
				options={[
					{ value: "completely", label: "Completely Delivered" },
					{ value: "partly", label: "Partly Delivered" },
					{ value: "no", label: "Not Delivered" },
				]}
			/>
		</CardWrapper>
	);
};

export default M11;
