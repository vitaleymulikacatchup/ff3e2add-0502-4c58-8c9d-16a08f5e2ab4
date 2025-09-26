"use client";

import React from "react";
import TimelineYearlyComponent, {
  type TimelineYearlyItem,
} from "@/components/timeline/TimelineYearly";
import { getFunAndTrendyTimelineYearlyStyle } from "../../styles/roadmap/yearRoadmapTimeline/funAndTrendy";
import { getFuturisticTimelineYearlyStyle } from "../../styles/roadmap/yearRoadmapTimeline/futuristicAndOutOfBox";
import { getBrainRotTimelineYearlyStyle } from "../../styles/roadmap/yearRoadmapTimeline/brainRot";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import { TimelineYearlyStyle } from "../../styles/roadmap/types";

interface YearRoadmapTimelineProps {
  items: TimelineYearlyItem[];
  className?: string;
}

const YearRoadmapTimeline = ({
  items,
  className = "",
}: YearRoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style: TimelineYearlyStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyTimelineYearlyStyle,
    futuristicAndOutOfBox: getFuturisticTimelineYearlyStyle,
    brainRot: getBrainRotTimelineYearlyStyle,
  });
  return (
    <TimelineYearlyComponent items={items} {...style} className={className} />
  );
};

YearRoadmapTimeline.displayName = "YearRoadmapTimeline";

export default React.memo(YearRoadmapTimeline);
