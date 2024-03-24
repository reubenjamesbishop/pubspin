"use client";

import { FaqSimple } from "./landing/components/FaqSimple";
import { FeaturesGrid } from "./landing/components/FeaturesGrid";
import { FooterLinks } from "./landing/components/FooterLinks";
import { GetInTouchSimple } from "./landing/components/GetInTouchSimple";
import { HeaderMegaMenu } from "./landing/components/HeaderMegaMenu";
import { HeroBullets } from "./landing/components/HeroBullets";

//TODO: Appshell this...

export default function Home() {
  return (
    <>
      <HeaderMegaMenu />
      <HeroBullets />
      <FeaturesGrid />
      <FaqSimple />
      <GetInTouchSimple />
      <FooterLinks />
    </>
  );
}
