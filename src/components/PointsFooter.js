import defaultPoints from "../defaultPoints";

import { Center, HStack, Text, Button } from "@chakra-ui/react";

import { useContext } from "react";
import { PointsContext } from "../Points.js";

const PointsFooter = () => {
	const { missions, setMissions } = useContext(PointsContext);

	return (
		<Center
			position="fixed"
			bottom={0}
			left={0}
			w="100vw"
			h="60px"
			bg="green.200"
			zIndex={1}
		>
			<HStack spacing={5}>
				<Text fontSize="lg" fontWeight="bold">
					Points:{" "}
					{(missions.M00.q1 === "yes" ? 25 : 0) +
						(missions.M01.q1 === "yes" ? 20 : 0) +
						(missions.M02.q1 === "magenta"
							? 10
							: missions.M02.q1 === "yellow"
							? 15
							: missions.M02.q1 === "blue"
							? 20
							: 0) +
						((missions.M03.q1 === "yes" ? 5 : 0) +
							(missions.M03.q2 === "yes" ? 15 : 0) +
							(missions.M03.q3 === "yes" ? 10 : 0) +
							(missions.M03.q4 === "yes" ? 10 : 0)) +
						((missions.M04.q1 === "yes" ? 10 : 0) +
							(missions.M04.q2 === "yes" ? 15 : 0) +
							missions.M04.q3 * 10) +
						((missions.M05.q1 === "yes" ? 15 : 0) +
							(missions.M05.q2 === "middle"
								? 15
								: missions.M05.q2 === "top"
								? 25
								: 0)) +
						(missions.M06.q1 === "yes" ? 15 : 0) +
						(missions.M06.q2 === "yes" ? 30 : 0) +
						(missions.M07.q1 === "yes" ? 10 : 0) +
						((missions.M08.q1 === "yes" ? 25 : 0) +
							missions.M08.q2 * 5 +
							(missions.M08.q3 === "yes" ? 10 : 0)) +
						((missions.M09.q1 === "yes" ? 10 : 0) +
							(missions.M09.q2 === "yes" ? 15 : 0) +
							missions.M09.q3 * 5) +
						(missions.M10.q1 === "yes" ? 15 : 0) +
						(missions.M11.q1 === "gray"
							? 5
							: missions.M11.q1 === "red"
							? 10
							: missions.M11.q1 === "orange"
							? 15
							: missions.M11.q1 === "yellow"
							? 20
							: missions.M11.q1 === "green"
							? 25
							: missions.M11.q1 === "dark-green"
							? 30
							: 0) +
						((missions.M12.q1 === "yes" ? 15 : 0) +
							(missions.M12.q2 === "yes" ? 15 : 0)) +
						(missions.M13.q1 === "blue"
							? 10
							: missions.M13.q1 === "magenta"
							? 15
							: missions.M13.q1 === "yellow"
							? 20
							: 0) +
						(missions.M14.q1 * 5 + missions.M14.q2 * 10) +
						(missions.M15.q1 === 1
							? 5
							: missions.M15.q1 === 2
							? 10
							: missions.M15.q1 === 3
							? 20
							: missions.M15.q1 === 4
							? 30
							: missions.M15.q1 === 5
							? 45
							: missions.M15.q1 === 6
							? 60
							: 0)}
				</Text>
				<Button onClick={() => setMissions(defaultPoints)}>Reset All</Button>
			</HStack>
		</Center>
	);
};

export default PointsFooter;
