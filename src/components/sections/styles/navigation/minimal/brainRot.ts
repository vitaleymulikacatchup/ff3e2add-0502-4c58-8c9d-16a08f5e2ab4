import { NavbarStyleMinimalStyle } from "../types";
import { ColorTemplate } from "../../shared/themeConfig";
import { getButtonConfig } from "../../shared/styleHelpers";

export function getBrainRotNavbarStyle(
  colorTemplate: ColorTemplate = 1
): NavbarStyleMinimalStyle {
  const buttonConfig = getButtonConfig("brainRot", "primary", colorTemplate);

  return {
    className: "",
    logoClassName: "h-8 md:h-10",
    ...buttonConfig,
  };
}

export const brainRotNavbarStyle = getBrainRotNavbarStyle(1);
