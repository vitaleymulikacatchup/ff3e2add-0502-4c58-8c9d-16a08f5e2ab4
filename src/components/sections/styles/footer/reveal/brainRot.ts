import { FooterStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    columnTitleClassName: `!${colors.textSecondary} opacity-80 ${theme.fonts.body.className} ${theme.text.bodyClass}`,
    className: colors.secondary,
    copyrightContainerClassName: `${colors.border} border-t-2 `,
    privacyButtonClassName: `!${colors.textSecondary} ${theme.fonts.body.className} ${theme.text.bodyClass} md:text-lg`,
    copyrightTextClassName: `!${colors.textSecondary} ${theme.fonts.body.className} ${theme.text.bodyClass} md:text-lg`,
    gradientClassName: `bg-gradient-to-r from-transparent via-[${colors.primary.replace(
      "bg-",
      ""
    )}] to-transparent`,
    svgClassName:
      colorTemplate === 1
        ? "var(--color-brain-rot-template-1-secondary)"
        : "var(--color-brain-rot-template-2-secondary)",
    columnItemClassName: `${theme.fonts.body.className} ${theme.text.bodyClass} ${colors.textSecondary}`,
  };
}

export const brainRotFooterStyle = getBrainRotFooterStyle(1);
