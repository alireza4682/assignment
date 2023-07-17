/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        ButtonPrimary: "hsl(var(--Button-primary))",
        Stroke1: "hsl(var(--Stroke1))",
        Stroke2: "hsl(var(--Stroke2))",
      },
    },
    boxShadow: {
      nav: "var(--box-shadow-nav)",
      card: "var(--box-shadow-card)",
      QR: "var(--box-shadow-QR)",
    },
    textColor: {
      Buttonfont: "hsl(var(--Button-font))",
      FontBody: "hsl(var(--Font-body))",
      FontDark: "hsl(var(--Font-Dark))",
      FontDisable: "hsl(var(--Font-disable))",
      FontTitle: "hsl(var(--Font-title))",
      FontPrimary: "hsl(var(--Font-primary))",
      Google: "hsl(var(--Google))",
      Logo: "hsl(var(--Logo))",
    },
    fontSize: {
      big: "18px",
      extraBig: "24px",
      normal: "14px",
      small: "12px",
    },
    fontWeight: {
      bold7: "700",
      bold5: "500",
      normal4: "400",
    },
    letterSpacing: {
      high: "0.4px",
      low: "0.1px",
      normal: "0.25px",
    },
  },
  plugins: [],
};
