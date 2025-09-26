import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";
import { TimelineYearlyStyle } from "../types";

export function getBrainRotTimelineYearlyStyle(
  colorTemplate: ColorTemplate = 1
): TimelineYearlyStyle {
  const colors = getBrainRotColors(colorTemplate);

  return {
    sectionClassName: `${theme.spacing.sectionPadding} px-[var(--width-10)]`,
    backgroundColor: `${colors.primary}`,
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
    showAurora: false,
    lineClassName: colors.timelineInactive,
    activeLineClassName: colors.timelineActive,
    dotClassName: `${colors.secondary}`,
    yearClassName: `${theme.heading.sizes.year} ${theme.text.headingClass} leading-[100%] ${theme.fonts.heading.className} ${colors.textSecondary} mb-3 md:mb-0 block`,
    titleClassName: `text-xl ${theme.text.headingClass} leading-[120%] ${theme.fonts.heading.className} ${colors.textSecondary}`,
    descriptionClassName: `text-sm md:text-base ${theme.text.bodyClass} leading-[120%] ${theme.fonts.body.className} ${colors.textSecondary}/90`,
    gapClassName: "gap-[var(--width-10)] md:gap-10",
    paddingClassName:
      "p-[calc(var(--width-10)/2)] pl-[var(--width-10)] md:pl-[calc(var(--width-10)/2)]",
    marginClassName: "mb-[var(--width-10)] md:mb-10 last:mb-0",
  };
}
