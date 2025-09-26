import { VoidHeroStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotVoidHeroStyle(
  colorTemplate: ColorTemplate = 1
): VoidHeroStyle {
  const colors = getBrainRotColors(colorTemplate);

  const animationProps = {
    variant: "trigger" as const,
  };

  const cellColor = colorTemplate === 1
    ? 'var(--color-brain-rot-template-1-secondary)'
    : 'var(--color-brain-rot-template-2-secondary)';

  return {
    section: {
      className: `${colors.primary} ${theme.fonts.body.className}`,
      height: "h-svh md:h-screen",
      cellWaveBackground: {
        enabled: true,
        cellColor: cellColor,
        columns: 8,
        rows: 24,
        duration: 0.25,
        delay: 1.25,
      },
    },
    heading: {
      className: `font-black md:text-7xl text-4xl mt-4 mx-auto tracking-tight uppercase ${theme.fonts.heading.className} ${theme.text.white}`,
      animationProps,
    },
    subheading: {
      className: `${theme.description.className} my-4 leading-5 md:max-w-[var(--width-40)] mx-auto ${theme.text.white}`,
    },
    radialGradient: {
      color:
        colorTemplate === 1
          ? "var(--color-brain-rot-template-1-secondary)"
          : "var(--color-brain-rot-template-2-secondary)",
    },
    tag: {
      labelClassName: `!font-black uppercase`,
      className: `mx-auto py-2 rounded-none ${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      } px-4 !text-black shadow-[4px_4px_0px_rgba(0,0,0)] ${
        theme.borders.button
      }`,
    },
    title: {
      className: `font-black md:text-7xl text-4xl mt-2 mx-auto tracking-tight uppercase ${theme.fonts.heading.className} ${theme.text.white}`,
      animationProps,
    },
    description: {
      className: `${theme.description.className} md:max-w-[var(--width-40)] mx-auto ${theme.text.white}`,
      animationProps,
    },
    buttons: {
      primary: {
        className: theme.buttons.primary.className,
        buttonBgColor:
          colorTemplate === 1
            ? "bg-brain-rot-template-1-secondary"
            : "bg-brain-rot-template-2-secondary",
        buttonTextColor: "!text-black",
        buttonHoverTextColor: "after:text-white",
        buttonContentClassName: theme.buttons.primary.contentClassName,
      },
      secondary: {
        className: theme.buttons.secondary.className,
        buttonBgColor: theme.buttons.secondary.base,
        buttonHoverBgColor: "after:bg-zinc-900",
        buttonTextColor: theme.buttons.secondary.text,
        buttonHoverTextColor: "after:text-white",
        buttonContentClassName: theme.buttons.secondary.contentClassName,
      },
    },
  };
}

export const brainRotVoidHeroStyle = getBrainRotVoidHeroStyle(1);
