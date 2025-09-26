import { TokenomicsStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotTokenomicsStyle(
  colorTemplate: ColorTemplate = 1
): TokenomicsStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding}`,
      backgroundColor: colors.primary,
    },
    title: {
      className: `${theme.heading.sizes.hero} leading-none uppercase tracking-tight mb-6 ${theme.text.headingClass} ${theme.text.white} ${theme.heading.className}`,
    },
    description: {
      className: `${theme.text.white} ${theme.description.className} ${theme.text.bodyClass}`,
    },
    bento: {
      button: {
        className: `aspect-square flex items-center justify-center cursor-pointer bg-black ring-2 rounded-none z-10`,
        childClassName:
          "bg-transparent !px-0 h-12 md:h-15 w-auto aspect-square",
        iconClassName: "h-[40%] w-auto text-white",
        variant: "none" as const,
      },
      items: [],
      className: "px-0!",
      itemClassName: `${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      } border-4 border-black rounded-none shadow-[4px_4px_0px_#000] h-90!`,
      valueClassName: `text-black !font-black ${theme.fonts.heading.className}`,
      descriptionClassName: `!font-black ${theme.fonts.body.className} text-black md:!text-lg`,
      gradientClassName: `bg-gradient-to-br from-black to-gray-800`,
    },
  };
}

export const brainRotTokenomicsStyle = getBrainRotTokenomicsStyle(1);
