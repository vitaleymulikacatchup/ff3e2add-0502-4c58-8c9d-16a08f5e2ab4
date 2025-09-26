import { FooterStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    className: `${colors.secondary} ${colors.border} border-t-4`,
    columnTitleClassName: `!${colors.textPrimary} opacity-80 underline ${theme.fonts.body.className} ${theme.text.bodyClass}`,
    copyrightContainerClassName: `border-t-2 !border-black/40`,
    columnItemClassName: `text-base ${theme.text.bodyClass} ${theme.fonts.body.className} ${colors.textPrimary}`,
    privacyButtonClassName: `!${colors.textPrimary} ${theme.fonts.body.className} ${theme.text.bodyClass} md:text-lg`,
    copyrightTextClassName: `!${colors.textPrimary} ${theme.fonts.body.className} ${theme.text.bodyClass} md:text-lg`,
    gradientClassName: colors.primary,
  };
}

export const brainRotFooterStyle = getBrainRotFooterStyle(1);
