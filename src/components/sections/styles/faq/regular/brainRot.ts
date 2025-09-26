import { FAQStyle } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotCentralFAQStyle(
  colorTemplate: ColorTemplate = 1
): FAQStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding} relative ${theme.fonts.body.className}`,
      backgroundColor: colors.primary,
      showBorder: true,
    },
    title: {
      text: "F.A.Q.",
      className: `text-6xl md:text-[clamp(4rem,8vw,8.5rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className} mb-7`,
    },
    description: {
      text: "Find answers to common questions about our platform and services.",
      className: `${theme.description.className} ${theme.text.white} max-w-2xl mx-auto`,
    },
    accordion: {
      className: "max-w-4xl mx-auto",
      itemClassName: `border-4 border-black ${
        colorTemplate === 1
          ? "!bg-brain-rot-template-1-secondary"
          : "!bg-brain-rot-template-2-secondary"
      } transition-all duration-300 !rounded-none`,
      itemTitleClassName: `text-black !font-black uppercase ${theme.fonts.heading.className} text-lg md:text-xl`,
      itemIconContainerClassName: `!rounded-none`,
      itemContentClassName: `${theme.fonts.body.className} text-base md:text-lg text-black tracking-tight uppercase !font-black`,
    },
  };
}

export const brainRotCentralFAQStyle = getBrainRotCentralFAQStyle(1);
