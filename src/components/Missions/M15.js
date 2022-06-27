import { useContext, useCallback } from "react";
import { PointsContext } from "../../Points.js";
import { ContainersContext } from "../../Containers.js";

import CardWrapper from "../MissionTemplate/CardWrapper";
import MissionHeader from "../MissionTemplate/MissionHeader";

import Slider from "../MissionTemplate/Slider";

const M15 = () => {
	const { missions, setMissions } = useContext(PointsContext);

	const { containers, setContainers } = useContext(ContainersContext);

	const setQ1 = useCallback(
		(val) => {
			setContainers({ ...containers, M15a: val });
			setMissions({ ...missions, M15: { ...missions.M15, q1: val } });
		},
		[missions, setMissions, containers, setContainers]
	);
	const setQ2 = useCallback(
		(val) => {
			setContainers({ ...containers, M15b: val });
			setMissions({ ...missions, M15: { ...missions.M15, q2: val } });
		},
		[missions, setMissions, containers, setContainers]
	);
	const setQ3 = useCallback(
		(val) => {
			setContainers({ ...containers, M15c: val });
			setMissions({ ...missions, M15: { ...missions.M15, q3: val } });
		},
		[missions, setMissions, containers, setContainers]
	);

	return (
		<CardWrapper>
			<MissionHeader
				number="15"
				name="Load Cargo"
				score={
					missions.M15.q1 * 10 + missions.M15.q2 * 20 + missions.M15.q3 * 30
				}
			/>
			<Slider
				question="How many containers are on and touching only the platooning trucks?"
				value={missions.M15.q1}
				setValue={setQ1}
				max={
					Object.values(containers).reduce((a, b) => a + b) >= 6
						? 8 - Object.values(containers).reduce((a, b) => a + b) < 0
							? 0
							: 8 - Object.values(containers).reduce((a, b) => a + b)
						: 2
				}
			/>
			<Slider
				question="How many containers are on and touching only the train?"
				value={missions.M15.q2}
				setValue={setQ2}
				max={
					Object.values(containers).reduce((a, b) => a + b) >= 6
						? 8 - Object.values(containers).reduce((a, b) => a + b) < 0
							? 0
							: 8 - Object.values(containers).reduce((a, b) => a + b)
						: 2
				}
			/>
			<Slider
				question="How many containers are on and touching only the cargo ship's west deck?"
				value={missions.M15.q3}
				setValue={setQ3}
				max={
					Object.values(containers).reduce((a, b) => a + b) >= 6
						? 8 - Object.values(containers).reduce((a, b) => a + b) < 0
							? 0
							: 8 - Object.values(containers).reduce((a, b) => a + b)
						: 2
				}
			/>
		</CardWrapper>
	);
};

export default M15;
