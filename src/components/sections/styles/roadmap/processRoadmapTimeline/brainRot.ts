import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";
import { TimelineProcessFlowStyle } from "../types";

export function getBrainRotTimelineProcessFlowStyle(
  colorTemplate: ColorTemplate = 1
): TimelineProcessFlowStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    sectionClassName: `${theme.spacing.sectionPadding} h-fit p-0 relative overflow-visible`,
    backgroundColor: colors.primary,
    backgroundPattern: "",
    gradient: {
      show: false,
      inset: "inset-0",
      rounded: "rounded-none",
      radialColor: "",
      radialOpacity: "0%",
      linearColor: "",
      linearOpacity: "0%",
    },
    lineClassName: colors.timelineInactive,
    activeLineClassName: colors.timelineActive,
    cardClassName: `${colors.shadow} ${colors.border} border-4 ${theme.timeline.radius}`,
    imageClassName: theme.timeline.radius,
    numberClassName: `${colors.secondary} ${colors.shadow} ${colors.textPrimary} ${theme.timeline.radius}`,
    titleClassName: `text-2xl md:text-4xl ${theme.text.headingClass} leading-[110%] ${theme.fonts.heading.className} ${colors.textPrimary} ${theme.text.white}`,
    descriptionClassName: `text-sm md:text-base ${theme.text.bodyClass} leading-[120%] ${theme.fonts.body.className} ${colors.textPrimary} ${theme.text.white}`,
    listItemClassName: `text-lg ${theme.text.white} opacity-90 ${theme.text.bodyClass} ${theme.fonts.body.className} tracking-wide`,
    iconContainerClassName: `!${colors.secondary} ${theme.timeline.radius}`,
    iconClassName: colors.textPrimary,
    gapClassName: "gap-20",
    paddingClassName: "px-[var(--width-10)]",
  };
}
