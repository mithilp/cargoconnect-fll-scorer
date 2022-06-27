import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";
import { ContainersContext } from "../../Containers.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Slider from "../MissionTemplate/Slider";

const M16 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const { containers, setContainers } = useContext(ContainersContext);

	const setQ1 = useCallback(
		(val) => {
			setContainers({ ...containers, M16a: val });
			setMissions({ ...missions, M16: { ...missions.M16, q1: val } });
		},
		[missions, setMissions, containers, setContainers]
	);
	const setQ2 = useCallback(
		(val) => {
			setContainers({ ...containers, M16a: val });
			setMissions({ ...missions, M16: { ...missions.M16, q2: val } });
		},
		[missions, setMissions, containers, setContainers]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="16"
				name="CARGO CONNECT"
				score={missions.M16.q1 * 10}
			/>
			<Slider
				question="How many containers are partly in any circle?"
				value={missions.M16.q1}
				setValue={setQ1}
				max={2}
			/>
			<Slider
				question="How many containers are completely in any circle?"
				value={missions.M16.q2}
				setValue={(val) => {
					setQ1(val);
					if (val > 4 && missions.M16.q2 > 8 - val) {
						setQ2(8 - val);
					}
				}}
				max={2}
			/>
		</CardWrapper>
	);
};

export default M16;
