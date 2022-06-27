import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Select from "../MissionTemplate/Select";

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
				name="Large Delivery"
				score={
					(missions.M12.q1 === "holder-mat"
						? 20
						: missions.M12.q1 === "only-holder"
						? 30
						: 0) +
					(missions.M12.q2 === "completely"
						? 10
						: missions.M12.q2 === "partly"
						? 5
						: 0)
				}
			/>
			<Select
				question="Is the turbine blade touching the blue holder and/or the mat?"
				value={missions.M12.q1}
				onChange={(e) => setQ1(e.target.value)}
				options={[
					{ value: "only-holder", label: "Only Blue Holder" },
					{ value: "holder-mat", label: "Blue Holder and Mat" },
					{ value: "no", label: "Not Touching" },
				]}
			/>
			<Select
				question="Is the chicken statue upright with its base partly or completely in its circle?"
				value={missions.M12.q2}
				onChange={(e) => setQ2(e.target.value)}
				options={[
					{ value: "completely", label: "Completely in Circle" },
					{ value: "partly", label: "Partly in Circle" },
					{ value: "no", label: "Not Upright" },
				]}
			/>
		</CardWrapper>
	);
};

export default M12;
