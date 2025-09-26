import { SimpleHeroStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotSimpleHeroStyle(
  colorTemplate: ColorTemplate = 1
): SimpleHeroStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `pt-25 pb-8 md:py-19 px-6 sm:px-[var(--width-10)] flex flex-col ${colors.primary}`,
      height: "h-svh md:h-screen",
      imageClassName: `border-4 ${
        colorTemplate === 1
          ? "border-brain-rot-template-1-secondary"
          : "border-brain-rot-template-2-secondary"
      } shadow-[6px_6px_0px_rgba(0,0,0)]`,

      imageContainerClassName: `w-full h-full absolute z-0 ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      } p-4`,
    },
    overlayClassName: `bg-gradient-to-tr from-black md:from-black/80 via-black/50 md:via-black/30 to-transparent`,
    descriptions: {
      className: `${theme.text.white} ${theme.description.className}`,
      containerClassName: "flex flex-col gap-3 md:gap-4",
    },
    layout: {
      alignStart: true,
      descriptionClassName: "w-full",
      textboxClassName: "!gap-4 sm:!gap-5 !text-center md:!text-left",
      titleClassName: "!text-center md:!text-left",
    },
    title: {
      className: `text-5xl md:text-8xl !tracking-normal ${theme.text.headingClass} ${theme.text.white} ${theme.fonts.heading.className}`,
    },
    buttons: {
      buttonClassName: theme.buttons.primary.className,
      buttonBgColor:
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary",
      buttonTextColor: "!text-black",
      buttonHoverTextColor: "after:text-white",
      buttonContentClassName: theme.buttons.primary.contentClassName,
    },
    secondaryButton: {
      buttonClassName: theme.buttons.secondary.className,
      buttonBgColor: theme.buttons.secondary.base,
      buttonHoverBgColor: "after:bg-white",
      buttonTextColor: theme.buttons.secondary.text,
      buttonHoverTextColor: "after:text-black",
      buttonContentClassName: theme.buttons.secondary.contentClassName,
    },
  };
}

export const brainRotSimpleHeroStyle = getBrainRotSimpleHeroStyle(1);
