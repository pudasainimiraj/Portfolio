export default {
  // Display face for headings, a plain readable face for everything else.
  fonts: {
    title: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
    main: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },
  // One accent colour (amber). Everything else is the page navy and white at four strengths.
  colors: {
    text: "hsl(204,23.8%,95.9%)",
    textStrong: "#fff",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    surface: "#141C2E",
    fillSubtle: "rgba(255, 255, 255, 0.06)",
    fill: "rgba(255, 255, 255, 0.08)",
    fillHover: "rgba(255, 255, 255, 0.14)",
    // Input and select edges: 3.58:1 against surface (WCAG 1.4.11 needs 3:1).
    border: "rgba(255, 255, 255, 0.4)",
    textMuted: "rgba(255, 255, 255, 0.72)",
    textSubtle: "rgba(255, 255, 255, 0.5)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
  header: {
    desktop: '85px',
    mobile: '70px',
  },
}
