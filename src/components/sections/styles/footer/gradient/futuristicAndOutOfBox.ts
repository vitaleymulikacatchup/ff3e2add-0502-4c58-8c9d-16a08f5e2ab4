import { FooterStyle } from "../types";
import { futuristicTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getFuturisticColors } from "../../shared/themeConfig";

export function getFuturisticFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getFuturisticColors(colorTemplate);

  return {
    className: `rounded-t-[var(--width-10)] md:rounded-t-[calc(var(--width-10)/2)] ${colors.primary} text-white! ${theme.fonts.body.className}`,
    gradientClassName: `bg-gradient-to-r from-transparent via-[${colors.gradientLinear}] to-transparent`,
    svgClassName: colors.spotlight,
  };
}

export const futuristicFooterStyle = getFuturisticFooterStyle(1);
