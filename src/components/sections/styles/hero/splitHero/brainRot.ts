import { CyclopsHeroStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotCyclopsHeroStyle(
  colorTemplate: ColorTemplate = 1
): CyclopsHeroStyle {
  const colors = getBrainRotColors(colorTemplate);

  const cellColor =
    colorTemplate === 1
      ? "var(--color-brain-rot-template-1-secondary)"
      : "var(--color-brain-rot-template-2-secondary)";

  return {
    section: {
      className: `${colors.primary} ${theme.fonts.body.className}`,
      contentAlignment: "items-center justify-center pt-10",
      cellWaveBackground: {
        enabled: true,
        cellColor: cellColor,
        columns: 5,
        rows: 24,
        duration: 0.25,
        delay: 1.25,
      },
    },
    heading: {
      className: `${theme.heading.sizes.hero} px-1 text-center mx-auto md:mx-0 md:text-start !tracking-tight ${theme.text.headingClass} leading-[1.2] w-full ${theme.text.white} ${theme.heading.className}`,
    },
    subheading: {
      className: `max-w-[90%] md:text-lg lg:text-xl ${theme.description.className} leading-[1.3] text-white/90`,
    },
    characterImage: {
      className: `w-full h-auto border-4 p-4 ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary border-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary border-brain-rot-template-2-secondary"
      } rounded shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]`,
      containerClassName:
        "relative transform hover:scale-105 transition-all duration-500 rounded-lg",
      width: 600,
      height: 600,
    },
    buttons: {
      primary: {
        className: theme.buttons.primary.className,
        bgColor:
          colorTemplate === 1
            ? "bg-brain-rot-template-1-secondary"
            : "bg-brain-rot-template-2-secondary",
        textColor: "!text-black",
        hoverTextColor: "after:text-white",
        textClassName: theme.buttons.primary.contentClassName,
      },
      secondary: {
        className: theme.buttons.secondary.className,
        bgColor: theme.buttons.secondary.base,
        hoverBgColor: "after:bg-white",
        textColor: theme.buttons.secondary.text,
        hoverTextColor: "after:text-black",
        textClassName: theme.buttons.secondary.contentClassName,
      },
      containerClassName: "flex-row flex-wrap gap-4 md:gap-6",
    },
    layout: {
      textSectionClassName: "text-left md:pr-8",
      imageSectionClassName: "size-full",
    },
  };
}

export const brainRotCyclopsHeroStyle = getBrainRotCyclopsHeroStyle(1);
