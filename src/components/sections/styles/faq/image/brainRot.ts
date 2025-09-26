import { ImageFAQStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotImageFAQStyle(
  colorTemplate: ColorTemplate = 1
): ImageFAQStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    title: {
      text: "F.A.Q.",
      className: `text-6xl md:text-[clamp(4rem,8vw,8.5rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className} mb-7`,
    },
    section: {
      className: `${colors.primary} ${theme.fonts.body.className}`,
      contentAlignment: "items-center justify-center",
      textContainerClassName: `${theme.text.white} ${theme.fonts.heading.className}`,
      gapClassName: theme.spacing.gap,
    },
    heading: {
      className: `text-6xl md:text-[clamp(4rem,15vw,12rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
      text: "Frequently Asked Questions",
    },
    subheading: {
      className: `max-w-[90%] md:text-lg lg:text-xl ${theme.description.className} leading-[1.3] text-white/90`,
    },
    image: {
      className: `w-full h-auto border-2 !object-contain p-4 !rounded-none bg-zinc-900`,
      containerClassName:
        "relative transform hover:scale-105 transition-all duration-500 !rounded-none",
    },
    accordion: {
      className: "w-full",
      itemClassName: `border-2 ${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary !border-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary !border-brain-rot-template-2-secondary"
      } transition-all duration-300 !rounded-none`,
      itemTitleClassName: `text-black !font-black uppercase ${theme.fonts.heading.className}`,
      itemIconContainerClassName: `!rounded-none`,
      itemContentClassName: `text-black ${theme.fonts.body.className} !font-black`,
    },
  };
}

export const brainRotImageFAQStyle = getBrainRotImageFAQStyle(1);
