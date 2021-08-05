import { useState, useEffect } from "react";

import {
	CircularProgress,
	CircularProgressLabel,
	ButtonGroup,
	Tooltip,
	IconButton,
	Stack,
	Text,
	HStack,
} from "@chakra-ui/react";
import { FaPause, FaPlay, FaRedoAlt } from "react-icons/fa";

const Timer = () => {
	const [time, setTime] = useState(150);
	const [ticking, setTicking] = useState(false);

	const toggleTicking = () => {
		setTicking(!ticking);
	};

	const resetTimer = () => {
		setTime(150);
	};

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (ticking && time > 0) {
				setTime(time - 1);
			} else if (ticking && time === 0) {
				setTicking(false);
			} else {
				clearInterval(myInterval);
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	const formatTime = (secs) => {
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	return (
		<HStack
			direction="horizontal"
			alignItems="center"
			spacing={{ base: 5, sm: 2 }}
			minH={100}
			w={{ base: "100%", sm: "min-content" }}
		>
			<CircularProgress
				size={100}
				color={time > 60 ? "green.500" : time > 15 ? "orange.400" : "red.300"}
				value={time !== 0 ? (time / 150) * 100 : 100}
			>
				<CircularProgressLabel>{formatTime(time)}</CircularProgressLabel>
			</CircularProgress>
			<Stack spacing={0}>
				<Text fontSize="xl" fontWeight="bold">
					Timer
				</Text>
				<ButtonGroup>
					<Tooltip
						label={ticking ? "Pause" : "Play"}
						aria-label={ticking ? "Pause" : "Play"}
					>
						<IconButton
							borderRadius="md"
							aria-label={ticking ? "Pause" : "Play"}
							onClick={toggleTicking}
							icon={ticking ? <FaPause /> : <FaPlay />}
						/>
					</Tooltip>
					<Tooltip label="Reset" aria-label="Reset">
						<IconButton
							borderRadius="md"
							aria-label="Reset"
							onClick={resetTimer}
							icon={<FaRedoAlt />}
						/>
					</Tooltip>
				</ButtonGroup>
			</Stack>
		</HStack>
	);
};

export default Timer;
