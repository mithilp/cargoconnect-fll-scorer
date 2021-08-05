import {
	useColorMode,
	useColorModeValue,
	Tooltip,
	IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<Tooltip
			label={`Switch to ${text} mode`}
			aria-label={`Switch to ${text} mode`}
		>
			<IconButton
				size="md"
				borderRadius="md"
				fontSize="lg"
				aria-label={`Switch to ${text} mode`}
				variant="ghost"
				color="current"
				onClick={toggleColorMode}
				icon={<SwitchIcon />}
				{...props}
			/>
		</Tooltip>
	);
};
