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
        className: `aspect-square flex items-center justify-center cursor-pointer ${
          colorTemplate === 1
            ? "!bg-brain-rot-template-1-secondary"
            : "!bg-brain-rot-template-2-secondary"
        } border-4 border-black rounded-none shadow-[4px_4px_0px_#000] z-10`,
        childClassName:
          "bg-transparent !px-0 h-12 md:h-15 w-auto aspect-square",
        iconClassName: "h-[35%] w-auto text-black",
        variant: "none" as const,
      },
      items: [],
      className: "px-0!",
      itemClassName: `${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      } border-4 border-black rounded-none shadow-[4px_4px_0px_#000] transition-all duration-300 hover:scale-105`,
      valueClassName: `text-black! font-black ${theme.fonts.heading.className}`,
      descriptionClassName: `font-black ${theme.fonts.body.className} text-black`,
      longDescriptionClassName: `text-sm !font-black uppercase ${theme.fonts.body.className} text-black`,
    },
    expandingCards: {
      cardClassName:
        "relative w-full flex flex-col rounded-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer select-none",
      activeCardClassName: `${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      }`,
      inactiveCardClassName: "invert bg-black/10",
      numberClassName: "text-sm font-black text-black uppercase",
      titleClassName: `${theme.tokenomics.value.large} font-black ${theme.heading.className} text-black uppercase`,
      descriptionClassName: `${theme.tokenomics.description.large} font-black uppercase ${theme.fonts.body.className} text-black pb-7 md:pb-0 md:mt-2 sm:text-xl`,
      buttonType: "plus" as const,
      buttonClassName: `aspect-square flex items-center justify-center cursor-pointer bg-transparent`,
      buttonContentClassName:
        "bg-black !px-0 h-12 w-auto aspect-square rounded-none",
      buttonIconClassName: "h-[40%] w-auto text-white",
    },
  };
}

export const brainRotTokenomicsStyle = getBrainRotTokenomicsStyle(1);
