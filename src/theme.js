import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
	sm: "320px",
	md: "768px",
	lg: "900px",
	xl: "1275px",
});

export const theme = extendTheme({
	breakpoints,
	config: {
		initialColorMode: "light",
	},
	colors: {
		green: {
			50: "#EEF7EE",
			100: "#CFE8CF",
			200: "#B0D9B0",
			300: "#92CA91",
			400: "#73BB72",
			500: "#54AC53",
			600: "#438A42",
			700: "#326732",
			800: "#224521",
			900: "#112211",
		},
		blue: {
			50: "#E9F1FB",
			100: "#C2D8F4",
			200: "#9BBFED",
			300: "#75A6E6",
			400: "#4E8DDF",
			500: "#2774D8",
			600: "#1F5DAD",
			700: "#174682",
			800: "#0F2E57",
			900: "#08172B",
		},
		cyan: {
			50: "#EAF7FB",
			100: "#C3E7F3",
			200: "#9DD8EC",
			300: "#76C9E5",
			400: "#50B9DD",
			500: "#29AAD6",
			600: "#2188AB",
			700: "#196680",
			800: "#104456",
			900: "#08222B",
		},
	},
	fonts: {
		heading:
			'"GT-Walsheim-Pro", Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		body: '"GT-Walsheim-Pro", Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	},
	components: {
		Link: {
			baseStyle: {
				textDecoration: "underline",
				borderRadius: "5px",
				_hover: {
					color: "blue.300",
				},
			},
		},
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode("white", "blue.900")(props),
			},
			html: {
				scrollBehavior: "smooth",
			},
		}),
	},
});

export default theme;
