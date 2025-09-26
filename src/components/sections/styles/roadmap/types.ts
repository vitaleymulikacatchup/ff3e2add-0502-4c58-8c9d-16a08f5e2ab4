export type ColorTemplate = 1 | 2;

export interface ColorThemeProps {
  colorTemplate?: ColorTemplate;
}

export interface RoadmapBaseStyle {
  sectionClassName?: string;
  backgroundColor?: string;
  backgroundPattern?: string;
  gradient?: {
    show?: boolean;
    inset?: string;
    rounded?: string;
    radialOpacity?: string;
    linearOpacity?: string;
    radialColor?: string;
    linearColor?: string;
  };
}

// Specific roadmap component styles that extend the base
export interface TimelineYearlyStyle extends RoadmapBaseStyle {
  yearClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  itemClassName?: string;
  containerClassName?: string;
  sectionTitleClassName?: string;
  showAurora?: boolean;
  lineClassName?: string;
  activeLineClassName?: string;
  dotClassName?: string;
  gapClassName?: string;
  paddingClassName?: string;
  marginClassName?: string;
}

export interface TimelineProcessFlowStyle extends RoadmapBaseStyle {
  gapClassName?: string;
  paddingClassName?: string;
  cardClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  lineClassName?: string;
  activeLineClassName?: string;
  mediaClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  sectionTitleClassName?: string;
  stepNumberClassName?: string;
  numberClassName?: string;
  stepNumberSize?: string;
  contentGapClassName?: string;
  listItemClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
}

export interface VerticalCardTimelineStyle extends RoadmapBaseStyle {
  gapClassName?: string;
  paddingClassName?: string;
  cardClassName?: string;
  imageContainerClassName?: string;
  mediaClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  sectionTitleClassName?: string;
}

export interface TimelineCardStackStyle extends RoadmapBaseStyle {
  gapClassName?: string;
  cardClassName?: string;
  cardHeight?: string;
  cardStickyPosition?: string;
  stepNumberClassName?: string;
  stepNumberSize?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentGapClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
}
