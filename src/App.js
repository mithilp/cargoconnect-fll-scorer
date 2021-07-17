import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";

function App() {
	return (
		<ChakraProvider theme={theme}>
			added in chakra ui
			{/* TODO: add in <ColorModeSwitcher /> when Chakra UI fixes flashing issue
				Learn more:
					https://chakra-ui.com/docs/features/color-mode#color-mode-flash-issue */}
		</ChakraProvider>
	);
}

export default App;
