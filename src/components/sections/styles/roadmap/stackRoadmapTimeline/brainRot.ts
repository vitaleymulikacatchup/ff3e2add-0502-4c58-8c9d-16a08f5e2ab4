import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";
import { TimelineCardStackStyle } from "../types";

export function getBrainRotTimelineCardStackStyle(
  colorTemplate: ColorTemplate = 1
): TimelineCardStackStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    sectionClassName: `relative overflow-visible h-fit p-[var(--width-10)]`,
    backgroundColor: colors.primary,
    backgroundPattern: "",
    gradient: {
      show: false,
      inset: "inset-0",
      rounded: "rounded-none",
      radialOpacity: "0%",
      linearOpacity: "0%",
      radialColor: "",
      linearColor: "",
    },
    gapClassName: "gap-[var(--width-25)] md:gap-[6.25vh]",
    cardClassName: `${colors.secondary} ${colors.shadow} ${theme.timeline.radius}`,
    cardHeight: "h-[150vw] md:h-[75vh]",
    cardStickyPosition: "top-[20vw] md:top-[12.5vh]",
    stepNumberClassName: `bg-black ${colors.border} border-2 ${colors.shadow} !${theme.timeline.radius} font-black ${theme.fonts.heading.className}`,
    stepNumberSize: "h-8 w-[var(--height-8)] text-white",
    titleClassName: `text-4xl md:text-5xl ${theme.text.headingClass} leading-[100%] ${colors.textPrimary} ${theme.fonts.heading.className}`,
    descriptionClassName: `text-base leading-[110%] ${colors.textPrimary} ${theme.fonts.body.className} ${theme.text.bodyClass}`,
    contentGapClassName: "gap-3 md:gap-6",
    imageContainerClassName: `${colors.border} border-4 ${colors.shadow} overflow-hidden ${theme.timeline.radius}`,
    imageClassName: "object-cover",
  };
}
