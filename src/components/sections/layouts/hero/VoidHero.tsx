"use client";

import { memo } from "react";
import { Rocket } from "lucide-react";
import BgRadialGradient from "@/components/background/BgRadialGradient";
import TextboxTaggable from "@/components/textbox/TextboxTaggable";
import { VoidHeroStyle } from "../../styles/hero/types";
import { getFunAndTrendyVoidHeroStyle } from "../../styles/hero/voidHero/funAndTrendy";
import { getFuturisticVoidHeroStyle } from "../../styles/hero/voidHero/futuristicAndOutOfBox";
import { getBrainRotVoidHeroStyle } from "../../styles/hero/voidHero/brainRot";
import { useSiteTheme, getThemeStyle } from "../../ThemeProvider";
import TextRenderer from "../../../text/TextRenderer";
import ButtonSlideBackground from "@/components/buttons/ButtonSlideBackground";
import CellWaveBackground from "@/components/background/CellWaveBackground";

interface VoidHeroProps {
  title?: string;
  description?: string;
  tagLabel?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const VoidHero = ({
  title = "Next-Gen DeFi Platform",
  description = "Experience the future of decentralized finance with cutting-edge technology and unmatched security.",
  tagLabel = "Now Live",
  primaryButtonText = "Launch App",
  secondaryButtonText = "Read Docs",
}: VoidHeroProps) => {
  const theme = useSiteTheme();
  const style: VoidHeroStyle = getThemeStyle(theme, {
    funAndTrendy: getFunAndTrendyVoidHeroStyle,
    futuristicAndOutOfBox: getFuturisticVoidHeroStyle,
    brainRot: getBrainRotVoidHeroStyle,
  });
  return (
    <section
      className={`relative min-h-screen overflow-x-hidden flex justify-center items-center flex-col max-w-[var(--width-100)] px-6 ${style.section.className}`}
    >
      {style.section.cellWaveBackground?.enabled && (
        <CellWaveBackground
          cellColor={style.section.cellWaveBackground.cellColor}
          columns={style.section.cellWaveBackground.columns}
          rows={style.section.cellWaveBackground.rows}
          duration={style.section.cellWaveBackground.duration}
          delay={style.section.cellWaveBackground.delay}
          className="px-[var(--width-10)]"
        />
      )}
      {style.section.backgroundPattern && (
        <div
          className={`absolute inset-0 opacity-30 ${style.section.backgroundPattern} bg-repeat`}
        />
      )}
      <BgRadialGradient color={style.radialGradient.color} />
      <TextboxTaggable
        tagClassName={style.tag.className}
        label={tagLabel || style.tag.label}
        icon={<Rocket className="h-[var(--text-base)]" />}
        title={
          <TextRenderer config={{ ...style.title, text: title }} as="h1" />
        }
        description={
          <TextRenderer
            config={{ ...style.description, text: description }}
            as="p"
          />
        }
        className="sm:max-w-[var(--width-90)] relative z-10 gap-6!"
        contentClassName="flex flex-col sm:flex-row gap-4 md:max-w-4xl"
        tagLabelClassName={style.tag.labelClassName}
      >
        <div className="flex gap-4 mt-2 sm:mt-0">
          <ButtonSlideBackground
            text={primaryButtonText}
            className={`${style.buttons.primary.className}`}
            bgColor={style.buttons.primary.buttonBgColor}
            contentClassName={style.buttons.primary.buttonContentClassName}
            hoverBgColor={style.buttons.primary.buttonHoverBgColor}
            textColor={style.buttons.primary.buttonTextColor}
            hoverTextColor={style.buttons.primary.buttonHoverTextColor}
          />

          <ButtonSlideBackground
            text={secondaryButtonText}
            className={`${style.buttons.secondary.className}`}
            bgColor={style.buttons.secondary.buttonBgColor}
            contentClassName={style.buttons.secondary.buttonContentClassName}
            hoverBgColor={style.buttons.secondary.buttonHoverBgColor}
            textColor={style.buttons.secondary.buttonTextColor}
            hoverTextColor={style.buttons.secondary.buttonHoverTextColor}
          />
        </div>
      </TextboxTaggable>
    </section>
  );
};

VoidHero.displayName = "VoidHero";

export default memo(VoidHero);
