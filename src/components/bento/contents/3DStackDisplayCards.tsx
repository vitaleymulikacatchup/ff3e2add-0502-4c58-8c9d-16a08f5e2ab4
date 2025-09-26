"use client";

import { cls } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ThreeDStackDisplayCardProps {
  className?: string;
  Icon?: LucideIcon;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
}

function ThreeDStackDisplayCard({
  className,
  Icon,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "",
  iconClassName = "",
  descriptionClassName = "",
  dateClassName = "",
}: ThreeDStackDisplayCardProps) {
  return (
    <div
      className={cls(
        "relative flex h-40 md:h-33 w-60 md:w-25 -skew-y-[8deg] select-none flex-col justify-between rounded bg-white text-black shadow backdrop-blur-sm p-6 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[var(--width-60)] after:md:w-[var(--width-25)] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <div
            className={cls(
              "h-5 aspect-square relative rounded-full bg-black text-white flex items-center justify-center",
              iconClassName
            )}
          >
            <Icon className="h-1/2 w-auto aspect-square" strokeWidth={1.5} />
          </div>
        )}
        <p className={cls("text-base", titleClassName)}>{title}</p>
      </div>
      <p className={cls("whitespace-nowrap text-lg", descriptionClassName)}>
        {description}
      </p>
      <p className={cls("text-base", dateClassName)}>{date}</p>
    </div>
  );
}

interface ThreeDStackDisplayCardsProps {
  cards?: ThreeDStackDisplayCardProps[];
}

export default function ThreeDStackDisplayCards({
  cards,
}: ThreeDStackDisplayCardsProps) {
  const baseClassNames = [
    "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:rounded before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:rounded before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  ];

  const defaultCards = baseClassNames.map((className) => ({ className }));

  const displayCards = cards
    ? cards.slice(0, 3).map((card, index) => ({
        ...card,
        className: `${baseClassNames[index]} ${card.className || ""}`,
      }))
    : defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <ThreeDStackDisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
