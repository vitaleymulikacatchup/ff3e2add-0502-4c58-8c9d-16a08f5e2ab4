import { AboutStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotMinimalStyle(
  colorTemplate: ColorTemplate = 1
): AboutStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding} !pb-0 ${theme.fonts.body.className}`,
      backgroundColor: colors.primary,
      showBorder: true,
      fadeBottom: true,
      sparkles: {
        particleColor: "#ffffff",
        particleDensity: 80,
        minSize: 0.5,
        maxSize: 1.5,
        speed: 2,
      },
    },
    title: {
      className: `text-6xl md:text-[clamp(4rem,8vw,9rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
    },
    descriptions: {
      className: `${theme.description.className} text-white/90 text-center md:!text-2xl font-bold uppercase`,
      containerClassName: "flex flex-col gap-3 md:gap-4",
    },
    layout: {
      alignStart: theme.layout.alignStart,
      descriptionClassName: "w-full",
      textboxClassName: "!gap-3",
    },
    button: {
      className: ` ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      }`,
      childClassName: `h-12 md:h-15 w-auto ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      } text-black !font-black text-base md:text-xl uppercase rounded-none ${
        theme.fonts.heading.className
      }`,
      variant: "none" as const,
    },
  };
}

export const brainRotMinimalStyle = getBrainRotMinimalStyle(1);
