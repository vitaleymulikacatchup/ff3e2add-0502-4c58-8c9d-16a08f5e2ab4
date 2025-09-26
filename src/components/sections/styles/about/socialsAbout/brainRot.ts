import { AboutStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotAboutMomocoinStyle(
  colorTemplate: ColorTemplate = 1
): AboutStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding} !pb-0 ${theme.fonts.body.className}`,
      backgroundColor: colors.primary,
      showBorder: true,
      fadeBottom: false,
    },
    title: {
      className: `text-6xl md:text-[clamp(4rem,8vw,9rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
    },
    descriptions: {
      className: `${theme.description.className} text-white/90 font-bold uppercase`,
      containerClassName: "flex flex-col gap-3 md:gap-4",
    },
    layout: {
      alignStart: theme.layout.alignStart,
      descriptionClassName: "w-full",
      textboxClassName: "!gap-3 md:!gap-6",
    },
    button: {
      childClassName: `!px-0 h-13 md:!h-15 w-auto rounded-none aspect-square ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      }`,
      iconClassName: "h-[40%] w-auto text-black",
    },
    image: {
      parentClassName: "w-full md:w-11/12 mx-auto",
      className: `object-cover size-full ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      } p-6`,
    },
  };
}

export const brainRotMomocoinAboutStyle = getBrainRotAboutMomocoinStyle(1);
