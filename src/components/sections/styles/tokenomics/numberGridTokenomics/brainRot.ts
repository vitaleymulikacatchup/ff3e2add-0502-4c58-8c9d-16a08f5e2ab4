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
      longDescriptionClassName: `text-sm !font-bold uppercase ${theme.fonts.body.className}`,
      items: [],
      className: "!mt-0",
      gridClassName: "gap-4 md:gap-6",
      itemClassName: `${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      } border-4 border-black rounded-none p-6 shadow-[4px_4px_0px_#000]`,
      valueClassName: `${theme.tokenomics.value.large} font-black ${theme.heading.className} text-black`,
      descriptionClassName: `${theme.tokenomics.description.large} !font-black uppercase ${theme.description.className} text-black`,
    },
  };
}

export const brainRotTokenomicsStyle = getBrainRotTokenomicsStyle(1);
