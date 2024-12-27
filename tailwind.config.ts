import type { Config } from "tailwindcss";
import { content, plugin } from "flowbite-react/tailwind";

export default {
  darkMode: 'selector',
  content: [
    './node_modules/flowbite/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('flowbite/plugin'),
    plugin(),
  ],
} satisfies Config;
