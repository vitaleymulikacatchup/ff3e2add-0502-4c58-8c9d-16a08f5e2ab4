"use client";

import React from "react";
import ProcessRoadmapComponent from "@/components/timeline/TimelineProcessFlow";
import type { TimelineProcessFlowItem } from "@/types/timeline";
import { getFunAndTrendyTimelineProcessFlowStyle } from "../../styles/roadmap/processRoadmapTimeline/funAndTrendy";
import { getFuturisticTimelineProcessFlowStyle } from "../../styles/roadmap/processRoadmapTimeline/futuristicAndOutOfBox";
import { getBrainRotTimelineProcessFlowStyle } from "../../styles/roadmap/processRoadmapTimeline/brainRot";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import { TimelineProcessFlowStyle } from "../../styles/roadmap/types";

interface ProcessRoadmapTimelineProps {
  items: TimelineProcessFlowItem[];
  className?: string;
}

const ProcessRoadmapTimeline = ({
  items,
  className = "",
}: ProcessRoadmapTimelineProps) => {
  const theme = useSiteTheme();
  const style: TimelineProcessFlowStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyTimelineProcessFlowStyle,
    futuristicAndOutOfBox: getFuturisticTimelineProcessFlowStyle,
    brainRot: getBrainRotTimelineProcessFlowStyle,
  });
  return (
    <ProcessRoadmapComponent items={items} {...style} className={className} />
  );
};

ProcessRoadmapTimeline.displayName = "ProcessRoadmapTimeline";

export default React.memo(ProcessRoadmapTimeline);
