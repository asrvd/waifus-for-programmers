import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "600px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({
  fonts: {
    body: "Inter",
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  ...breakpoints,
});

// 3. extend the theme
//const theme = extendTheme({config})

export default theme;
