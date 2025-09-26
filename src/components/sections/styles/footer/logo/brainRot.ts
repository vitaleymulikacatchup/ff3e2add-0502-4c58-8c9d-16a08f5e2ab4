import { FooterStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    className: `${theme.timeline.radius} ${colors.primary} ${colors.textSecondary}! ${theme.fonts.body.className} ${theme.text.bodyClass}`,
    buttonClassName: `${colors.textSecondary}! !${theme.text.bodyClass}`,
    iconClassName: `${
      colorTemplate === 1
        ? `!text-[var(--color-brain-rot-template-1-secondary)]`
        : `!text-[var(--color-brain-rot-template-2-secondary)]`
    }`,
    gradientClassName: colors.patternGradient,
    svgClassName:
      colorTemplate === 1
        ? "var(--color-brain-rot-template-1-secondary)"
        : "var(--color-brain-rot-template-2-secondary)",
  };
}

export const brainRotFooterStyle = getBrainRotFooterStyle(1);
