import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";

import Timer from "./components/Timer";

function App() {
	return (
		<ChakraProvider theme={theme}>
			added in chakra ui
			{/* TODO: add in <ColorModeSwitcher /> when Chakra UI fixes flashing issue
				Learn more:
					https://chakra-ui.com/docs/features/color-mode#color-mode-flash-issue */}
			<Timer />
		</ChakraProvider>
	);
}

export default App;
