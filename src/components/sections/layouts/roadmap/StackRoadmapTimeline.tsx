"use client";

import React from "react";
import TimelineCardStackComponent from "@/components/timeline/TimelineCardStack";
import type { TimelineCardStackItem } from "@/types/timeline";
import { getFunAndTrendyTimelineCardStackStyle } from "../../styles/roadmap/stackRoadmapTimeline/funAndTrendy";
import { getFuturisticTimelineCardStackStyle } from "../../styles/roadmap/stackRoadmapTimeline/futuristicAndOutOfBox";
import { getBrainRotTimelineCardStackStyle } from "../../styles/roadmap/stackRoadmapTimeline/brainRot";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import { TimelineCardStackStyle } from "../../styles/roadmap/types";

interface StackRoadmapTimelineProps {
  items: TimelineCardStackItem[];
  className?: string;
}

const StackRoadmapTimeline = ({
  items,
  className = "",
}: StackRoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style: TimelineCardStackStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyTimelineCardStackStyle,
    futuristicAndOutOfBox: getFuturisticTimelineCardStackStyle,
    brainRot: getBrainRotTimelineCardStackStyle,
  });
  return (
    <TimelineCardStackComponent
      items={items}
      {...style}
      className={className}
    />
  );
};

StackRoadmapTimeline.displayName = "StackRoadmapTimeline";

export default React.memo(StackRoadmapTimeline);
