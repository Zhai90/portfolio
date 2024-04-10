import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: ["'Red Hat Mono'", "'Courier New'", "serif"],
        serif: ["'Georgia'", "serif"],
        custom: ["'Oswald'", "sans-serif"],
      },
      colors: {
        background: "#00091c",
      },
    },
  },
  plugins: [],
};
export default config;
