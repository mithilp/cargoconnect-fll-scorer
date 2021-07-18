import { useState, useEffect } from "react";

import {
	ButtonGroup,
	Tooltip,
	IconButton,
	Stack,
	Text,
	HStack,
} from "@chakra-ui/react";
import { FaPause, FaPlay, FaRedoAlt } from "react-icons/fa";

const Timer = () => {
	const [time, setTime] = useState(0);
	const [ticking, setTicking] = useState(false);

	const toggleTicking = () => {
		setTicking(!ticking);
	};

	const resetTimer = () => {
		setTime(0);
	};

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (ticking) {
				setTime(time + 1);
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
			<Text
				fontSize="3xl"
				textAlign="center"
				w={{ base: "100px", sm: "4ch" }}
				lineHeight={{ base: "auto", sm: "100px" }}
			>
				{formatTime(time)}
			</Text>
			<Stack spacing={0}>
				<Text fontSize="xl" fontWeight="bold">
					Stopwatch
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
