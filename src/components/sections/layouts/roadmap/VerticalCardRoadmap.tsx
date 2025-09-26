"use client";

import React from "react";
import VerticalCardComponent from "@/components/timeline/TimelineBase";
import { getFunAndTrendyTimelineStyle } from "../../styles/roadmap/verticalCardTimeline/funAndTrendy";
import { getFuturisticTimelineStyle } from "../../styles/roadmap/verticalCardTimeline/futuristicAndOutOfBox";
import { getBrainRotTimelineStyle } from "../../styles/roadmap/verticalCardTimeline/brainRot";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import { VerticalCardTimelineStyle } from "../../styles/roadmap/types";

interface VerticalCardItem {
  title: string;
  description: string;
  video?: string;
  image?: string;
}

interface VerticalCardProps {
  items: VerticalCardItem[];
  title?: string;
  className?: string;
}

const VerticalCardRoadmap = ({
  items,
  title = "TimelineBase",
  className = "",
}: VerticalCardProps) => {
  const theme = useSiteTheme();
  const style: VerticalCardTimelineStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyTimelineStyle,
    futuristicAndOutOfBox: getFuturisticTimelineStyle,
    brainRot: getBrainRotTimelineStyle,
  });

  const titleConfig = {
    ...style,
    text: title,
    className: style.sectionTitleClassName,
  };

  return (
    <VerticalCardComponent
      items={items}
      {...style}
      title={title}
      titleConfig={titleConfig}
      className={className}
    />
  );
};

VerticalCardRoadmap.displayName = "VerticalCardRoadmap";

export default React.memo(VerticalCardRoadmap);
