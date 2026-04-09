import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      colors: {
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
        // Season-specific named colors
        forest: {
          DEFAULT: "#0A3323",
          light: "#1a5c40",
        },
        moss: {
          DEFAULT: "#839958",
          light: "#a3b97a",
        },
        cream: {
          DEFAULT: "#F7F4D5",
          dark: "#e8e4c0",
        },
        rosy: {
          DEFAULT: "#D3968C",
          light: "#e0b0a8",
        },
        midnight: {
          DEFAULT: "#105666",
          dark: "#0D1B2A",
        },
        golden: "#F5A623",
        terracotta: "#E8572A",
        ice: {
          DEFAULT: "#C8D8E8",
          light: "#F0F4F8",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "drift": {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(30px) rotate(360deg)", opacity: "0.3" },
        },
        "shimmer-up": {
          "0%": { transform: "translateY(10vh)", opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-10vh)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-slow": "fade-in-slow 1.2s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
        "drift": "drift 8s linear infinite",
        "shimmer-up": "shimmer-up 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
