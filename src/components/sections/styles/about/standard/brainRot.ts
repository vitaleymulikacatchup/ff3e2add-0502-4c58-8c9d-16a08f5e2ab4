import { AboutStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotAboutStyle(
  colorTemplate: ColorTemplate = 1
): AboutStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding} ${theme.fonts.body.className}`,
      backgroundColor: colors.primary,
    },
    title: {
      className: `text-6xl md:text-[clamp(4rem,6vw,7rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
    },
    descriptions: {
      className: `${theme.description.className} text-white/90 font-bold uppercase`,
      containerClassName: "flex flex-col gap-3 md:gap-4",
    },
    layout: {
      alignStart: theme.layout.alignStart,
      descriptionClassName: "w-full md:w-[45%]",
    },
  };
}

export const brainRotAboutStyle = getBrainRotAboutStyle(1);
