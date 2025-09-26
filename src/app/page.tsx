"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const navLinks = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How To Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758886382987-0f9fb513.jpg" 
          logoAlt="MemePulse" 
          navItems={navLinks} 
          buttonText="Buy MemePulse"
        />
      </div>
      <div id="hero" data-section="hero">
        <SimpleHero 
          title="Welcome to MemePulse" 
          description="Join the playful memecoin revolution!" 
          primaryButtonText="Buy Now"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1758886380600-ba8945f5.jpg"
          backgroundImageAlt="Cartoon desert landscape"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout 
          description="MemePulse embodies the playful spirit of the crypto community, embracing humor and innovation." 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics 
          title="Tokenomics" 
          description="Transparent overview of our memecoin economics." 
          kpiItems={[{ value: "1M", description: "Total Supply" }, { value: "2%", description: "Transaction Fee" }, { value: "500K", description: "Market Cap" }]} />
      </div>
      <div id="footer" data-section="footer">
        <GradientFooter 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758886382987-0f9fb513.jpg" 
          logoAlt="MemePulse Logo" 
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => { /* navigate */ } }, { label: "About", onClick: () => { /* navigate */ } }] },
            { title: "Community", items: [{ label: "Twitter", onClick: () => { /* navigate */ } }, { label: "Discord", onClick: () => { /* navigate */ } }] }
          ]} 
          copyrightText="© 2023 MemePulse. All rights reserved." />
      </div>
    </SiteThemeProvider>
  );
}