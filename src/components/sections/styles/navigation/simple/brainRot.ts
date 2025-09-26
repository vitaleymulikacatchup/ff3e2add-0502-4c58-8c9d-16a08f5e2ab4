import { NavbarBaseStyle } from "../types";
import { ColorTemplate } from "../../shared/themeConfig";
import { getButtonConfig } from "../../shared/styleHelpers";

export function getBrainRotNavbarStyle(
  colorTemplate: ColorTemplate = 1
): NavbarBaseStyle {
  const buttonConfig = getButtonConfig("brainRot", "primary", colorTemplate);

  return {
    className: ``,
    logoClassName: "h-8 md:h-10",
    containerClassName: "max-w-[var(--width-100)]",
    ...buttonConfig,
  };
}

export const brainRotNavbarStyle = getBrainRotNavbarStyle(1);
