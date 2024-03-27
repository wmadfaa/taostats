import localFont from "next/font/local";

/**
 * these font files were downloaded from 'https://freedafonts.com/twk-everett-font-family/'
 * and converted the downloaded rar to zip via 'https://www.ezyzip.com/convert-rar-to-zip.html'
 */

const TWKEverett = localFont({
  variable: "--font-twk-everett",
  src: [
    {
      path: "./TWKEverett/TWKEverett-Black.otf",
      style: "normal",
      weight: "900",
    },
    {
      path: "./TWKEverett/TWKEverett-BlackItalic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "./TWKEverett/TWKEverett-Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./TWKEverett/TWKEverett-BoldItalic.otf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./TWKEverett/TWKEverett-Extrabold.otf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./TWKEverett/TWKEverett-ExtraboldItalic.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "./TWKEverett/TWKEverett-Hairline.otf",
      style: "normal",
      weight: "100",
    },
    {
      path: "./TWKEverett/TWKEverett-HairlineItalic.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./TWKEverett/TWKEverett-Light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./TWKEverett/TWKEverett-LightItalic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./TWKEverett/TWKEverett-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./TWKEverett/TWKEverett-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./TWKEverett/TWKEverett-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./TWKEverett/TWKEverett-RegularItalic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./TWKEverett/TWKEverett-Super.otf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./TWKEverett/TWKEverett-SuperItalic.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "./TWKEverett/TWKEverett-Thin.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./TWKEverett/TWKEverett-ThinItalic.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./TWKEverett/TWKEverett-Ultralight.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./TWKEverett/TWKEverett-UltralightItalic.otf",
      style: "italic",
      weight: "200",
    },
  ],
});

export { TWKEverett };
