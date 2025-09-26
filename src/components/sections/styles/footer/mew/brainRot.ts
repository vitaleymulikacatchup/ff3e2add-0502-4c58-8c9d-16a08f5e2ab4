import { FooterStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    titleClassName: `${theme.text.headingClass} text-5xl ${theme.fonts.heading.className} md:text-5xl ${colors.textPrimary}`,
    section: {
      backgroundPattern: "",
    },
    className: `${colors.border} ${colors.secondary}`,
    button: {
      variant: "side" as const,
      className: `${theme.timeline.radius} bg-transparent`,
      childClassName: `!px-0 h-13 md:!h-15 w-auto aspect-square ${theme.timeline.radius} ${colors.border} border-2 bg-black`,
      iconClassName: `h-[40%] w-auto ${colors.textSecondary}`,
    },
    gradient: {
      show: false,
    },
  };
}

export const brainRotFooterStyle = getBrainRotFooterStyle(1);
