export default {
  // Display face for headings, a plain readable face for everything else.
  fonts: {
    title: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
    main: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },
  // One accent colour (amber). Everything else is the page navy and white at four strengths.
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    surface: "#141C2E",
    border: "rgba(255, 255, 255, 0.1)",
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
