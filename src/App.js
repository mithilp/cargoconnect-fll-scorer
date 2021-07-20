import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";

import Header from "./components/Header";
import M00 from "./components/M00";

function App() {
	return (
		<ChakraProvider theme={theme}>
			{/* TODO: add in <ColorModeSwitcher /> when Chakra UI fixes flashing issue
				Learn more:
					https://chakra-ui.com/docs/features/color-mode#color-mode-flash-issue */}
			<Header />
			<M00 />
		</ChakraProvider>
	);
}

export default App;
