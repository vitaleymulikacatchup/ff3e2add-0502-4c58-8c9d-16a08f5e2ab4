import { FooterStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotWalletFooterStyle(
  colorTemplate: ColorTemplate = 1
): FooterStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    className: `${colors.secondary} ${colors.border} border-t-4 py-6 md:py-10`,
    containerClassName: "max-w-none px-4 md:px-6",
    logoTextClassName: `${colors.textSecondary} text-xl md:text-2xl ${theme.text.headingClass} ${theme.fonts.heading.className}`,
    walletContainerClassName: `py-2 md:py-3 px-4 md:px-6 ${colors.textPrimary} ${colors.cardInactive} ${colors.border} border-4 flex flex-row items-center justify-between gap-3 max-w-full sm:max-w-[var(--width-30)] ${theme.heading.className} ${theme.timeline.radius}`,
    walletAddressClassName:
      "truncate text-xs sm:text-sm md:text-lg w-full sm:w-auto text-center sm:text-left -translate-y-0 sm:-translate-y-0.5",
    copyButtonClassName:
      "text-xs sm:text-sm md:text-base transition-colors duration-200 flex items-center gap-2 justify-center -translate-y-0 sm:-translate-y-0.5 font-black",
    copyIconClassName:
      "cursor-pointer h-3 sm:h-[var(--text-sm)] md:h-[var(--text-base)] w-auto mt-0 sm:mt-1",
    bottomContainerClassName: `${colors.border} border-t-2 pt-4 md:pt-6 mt-12 md:mt-24 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0`,
    copyrightTextClassName: `${theme.text.bodyClass} ${theme.fonts.body.className} text-xs md:text-sm text-center sm:text-left`,
    socialContainerClassName:
      "gap-3 md:gap-6 flex justify-center sm:justify-end",
    socialButtonClassName: `${theme.timeline.radius} ${colors.button} ${colors.border} border-2`,
    socialButtonChildClassName: `!px-0 h-10 md:h-13 lg:!h-15 w-auto aspect-square ${theme.timeline.radius} ${colors.cardInactive} ${colors.border} border-2`,
    socialIconClassName: `h-[35%] md:h-[40%] w-auto ${colors.textPrimary}`,
  };
}

export const brainRotWalletFooterStyle = getBrainRotWalletFooterStyle(1);
