/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "background-white": "var(--background-white)",
        "dark-500": "var(--dark-500)",
        "greysgray-500": "var(--greysgray-500)",
        "greysgray-900": "var(--greysgray-900)",
        monochromeblack: "var(--monochromeblack)",
        "monochromedark-gray": "var(--monochromedark-gray)",
        "monochromegray-100": "var(--monochromegray-100)",
        "monochromegray-200": "var(--monochromegray-200)",
        "monochromegray-500": "var(--monochromegray-500)",
        "monochromegray-800": "var(--monochromegray-800)",
        "monochromeplain-white": "var(--monochromeplain-white)",
        monochromewhite: "var(--monochromewhite)",
        "text-2-dark-gray": "var(--text-2-dark-gray)",
        "text-3-gray": "var(--text-3-gray)",
        "white-500": "var(--white-500)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-3-regular": "var(--body-3-regular-font-family)",
        "bold-24": "var(--bold-24-font-family)",
        "button-bold": "var(--button-bold-font-family)",
        "m3-label-medium": "var(--m3-label-medium-font-family)",
        "regular-10": "var(--regular-10-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};