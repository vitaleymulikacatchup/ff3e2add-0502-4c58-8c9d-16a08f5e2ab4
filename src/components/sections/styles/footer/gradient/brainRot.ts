import { FooterStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    className: `${theme.timeline.radius} ${colors.secondary} ${colors.border} border-t-4 ${colors.textSecondary}! ${theme.fonts.body.className}`,
    buttonClassName: `!${colors.textPrimary} !font-black`,
    gradientClassName: colors.patternGradient,
  };
}

export const brainRotFooterStyle = getBrainRotFooterStyle(1);
