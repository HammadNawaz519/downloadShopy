/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        shopy: {
          bg: "#F4F4F2",
          surface: "#E8E8E8",
          muted: "#BBBFCA",
          dark: "#495464",
          darker: "#363E4B",
          light: "#FAFAF9",
          ink: "#181A1D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 30px 80px -30px rgba(54, 62, 75, 0.35)",
        card: "0 1px 0 rgba(187, 191, 202, 0.4), 0 20px 50px -30px rgba(54, 62, 75, 0.25)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
