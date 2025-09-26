import { AboutStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotAboutPudgyStyle(
  colorTemplate: ColorTemplate = 1
): AboutStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding} ${theme.fonts.body.className}`,
      backgroundColor: colors.primary,
      showBorder: true,
    },
    title: {
      className: `text-6xl md:text-[clamp(4rem,8vw,9rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
    },
    descriptions: {
      className: `${theme.description.className} text-white/90`,
      containerClassName: "flex flex-col gap-3 md:gap-4",
    },
    layout: {
      alignStart: theme.layout.alignStart,
      descriptionClassName: "w-full",
      textboxClassName: "!gap-3 md:!gap-6",
    },
    button: {
      childClassName: `h-13 md:!h-15 w-auto ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      }  text-black !font-black tracking-wide text-base md:text-xl uppercase rounded-none ${
        theme.fonts.heading.className
      }`,
    },
    image: {
      parentClassName: "w-full mx-auto md:h-[60vh]",
      className: `border-4 border-black object-contain h-full w-full shadow-[4px_4px_0px_#000] ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      } p-8`,
    },
  };
}

export const brainRotCtaAboutStyle = getBrainRotAboutPudgyStyle(1);
