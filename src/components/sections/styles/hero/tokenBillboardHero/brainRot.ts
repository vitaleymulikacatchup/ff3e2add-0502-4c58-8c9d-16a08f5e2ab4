import { HeroStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotPepeHeroStyle(
  colorTemplate: ColorTemplate = 1
): HeroStyle {
  const colors = getBrainRotColors(colorTemplate);

  const cellColor =
    colorTemplate === 1
      ? "var(--color-brain-rot-template-1-secondary)"
      : "var(--color-brain-rot-template-2-secondary)";

  return {
    section: {
      className: colors.primary,
      height: "h-svh md:h-screen",
      contentAlignment: "items-center justify-center",
      textContainerClassName: `${theme.text.white} ${theme.fonts.heading.className}`,
      gapClassName: theme.spacing.gap,
      cellWaveBackground: {
        enabled: true,
        cellColor: cellColor,
        columns: 7,
        rows: 30,
        duration: 0.3,
        delay: 1.25,
      },
    },
    heading: {
      className: `text-6xl md:text-[clamp(4rem,8vw,9rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
      text: "",
    },
    subheading: {
      className: `md:max-w-[60%] mt-6 text-white ${theme.description.className}`,
    },
    ctaStyle: {
      containerClassName: `mt-3 md:mt-5 w-full py-4 px-6 ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      } flex items-center justify-between sm:max-w-[var(--width-30)] mx-auto border-4 border-black shadow-[4px_4px_0px_#000] ${
        theme.fonts.heading.className
      }`,
      addressClassName:
        "text-black truncate text-sm md:text-lg tracking-wider font-bold uppercase",
      buttonClassName: `text-sm md:text-base shrink-0 transition-colors duration-200 flex uppercase font-bold items-center gap-2 text-black`,
      iconClassName:
        "cursor-pointer h-[var(--text-sm)] md:h-[var(--text-base)] w-auto",
    },
  };
}

export const brainRotPepeStyle = getBrainRotPepeHeroStyle(1);
