import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";
import { VerticalCardTimelineStyle } from "../types";

export function getBrainRotTimelineStyle(
  colorTemplate: ColorTemplate = 1
): VerticalCardTimelineStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    sectionClassName: `${theme.spacing.sectionPadding} relative overflow-visible px-[var(--width-10)]`,
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
    gapClassName: "gap-[var(--width-30)] md:gap-30",
    paddingClassName: "p-3",
    cardClassName: `${colors.secondary} ${colors.shadow} ${theme.timeline.radius}`,
    imageContainerClassName: `${colors.cardInactive} ${colors.border} border-4 ${theme.timeline.radius}`,
    mediaClassName: theme.timeline.radius,
    titleClassName: `text-xl md:text-2xl ${theme.text.headingClass} leading-[110%] ${theme.fonts.heading.className} ${colors.textPrimary}`,
    descriptionClassName: `text-sm md:text-base ${theme.text.bodyClass} leading-[120%] ${theme.fonts.body.className} ${colors.textPrimary}`,
    sectionTitleClassName: `text-4xl md:text-6xl leading-none uppercase ${theme.text.headingClass} ${theme.text.white} ${theme.fonts.heading.className}`,
  };
}
