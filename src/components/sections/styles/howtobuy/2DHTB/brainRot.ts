import { HowToBuyStyle2D } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";
import { Wallet, Coins, ArrowLeftRight } from "lucide-react";

export function getBrainRotMinimalHowToBuyStyle2D(
  colorTemplate: ColorTemplate = 1
): HowToBuyStyle2D {
  const colors = getBrainRotColors(colorTemplate);

  return {
    section: {
      className: `${theme.spacing.sectionPadding} ${theme.fonts.body.className}`,
      backgroundColor: colors.primary,
    },
    title: {
      text: "How to Buy",
      className: `text-6xl md:text-[clamp(4rem,8vw,9rem)] ${theme.text.headingClass} leading-[0.9] text-white ${theme.heading.className}`,
    },
    simpleBento: {
      items: [
        {
          icon: Wallet,
          title: "Create Wallet",
          description:
            "Download and set up MetaMask or your preferred crypto wallet to store your tokens securely.",
        },
        {
          icon: Coins,
          title: "Get ETH",
          description:
            "Purchase Ethereum from an exchange and transfer it to your wallet address.",
        },
        {
          icon: ArrowLeftRight,
          title: "Swap for $PUDGY",
          description:
            "Connect to Uniswap decentralized exchange and swap your ETH for tokens.",
        },
      ],
      className: "",
      gridClassName: "",
      itemClassName: `!rounded-none ${
        colorTemplate === 1
          ? "bg-brain-rot-template-1-secondary"
          : "bg-brain-rot-template-2-secondary"
      }`,
      iconClassName: `${colors.textPrimary} p-6 ${colors.primary}`,
      titleClassName: `${theme.fonts.heading.className} ${theme.text.headingClass} text-black !font-black uppercase`,
      descriptionClassName: `${theme.fonts.body.className} ${theme.text.bodyClass} text-black/90 !font-black uppercase`,
    },
  };
}

export const brainRotMinimal2dStyle = getBrainRotMinimalHowToBuyStyle2D(1);
