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
      longDescriptionClassName: `text-sm !font-black uppercase ${theme.fonts.body.className}`,
      button: {
        className: `!rounded-none !absolute left-6 bottom-6 bg-transparent`,
        childClassName: `!px-0 h-8 md:!h-12 w-auto aspect-square rounded-none ${
          colorTemplate === 1
            ? "bg-brain-rot-template-1-secondary"
            : "bg-brain-rot-template-2-secondary"
        } border-4 border-black bg-black`,
        iconClassName: "h-[40%] w-auto text-white",
      },
      items: [],
      className: "!mt-0",
      gridClassName: "gap-3 md:gap-6",
      itemClassName: `${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      } rounded-none justify-center items-center`,
      valueClassName: `!font-black ${theme.heading.className} text-black leading-[130%]`,
      descriptionClassName: `${theme.tokenomics.description.medium} !font-black uppercase ${theme.description.className} text-black md:!text-2xl`,
    },
  };
}

export const brainRotTokenomicsStyle = getBrainRotTokenomicsStyle(1);
