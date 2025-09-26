import { HowToBuyStyle2D } from "../types";
import { brainRotTheme as theme } from "../../shared/themes";
import { ColorTemplate } from "../../shared/themeConfig";
import { getBrainRotColors } from "../../shared/themeConfig";

export function getBrainRotHowToBuyStyle2D(
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
    bento: {
      items: [
        {
          id: "01",
          title: "Create Wallet",
          description:
            "Download and set up MetaMask or your preferred crypto wallet to store your tokens securely.",
          imageSrc: "/sections/images/brainrotplaceholder2.jpeg",
        },
        {
          id: "02",
          title: "Get ETH",
          description:
            "Purchase Ethereum from an exchange and transfer it to your wallet address.",
          imageSrc: "/sections/images/brainrotplaceholder2.jpeg",
        },
        {
          id: "03",
          title: "Swap for $PUDGY",
          description:
            "Connect to Uniswap decentralized exchange and swap your ETH for tokens.",
          imageSrc: "/sections/images/brainrotplaceholder2.jpeg",
        },
      ],
      enableHoverAnimation: true,
      showImages: true,
      className: "",
      itemClassName: `!font-black`,
      itemContentClassName: "!bg-black",
      itemTitleClassName: `!font-black !text-white uppercase`,
      itemDescriptionClassName: `!font-black !text-white uppercase`,
    },
  };
}

export const brainRotReveal2dStyle = getBrainRotHowToBuyStyle2D(1);
