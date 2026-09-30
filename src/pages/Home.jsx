import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import OurVision from '../components/OurVision';
import Credentials from '../components/Credentials';
import Industries from '../components/Industries';
import MarketSignal from '../components/MarketSignal';
import Faq from '../components/Faq';
import ReadyToTalk from '../components/ReadyToTalk';

export default function Home({ onOpenAuditModal }) {
  return (
    <main id="main">
      <Hero onOpenAuditModal={onOpenAuditModal} />
      <WhatWeDo />
      <OurVision />
      <Industries />
      <MarketSignal />
      <Faq />
      <ReadyToTalk />
    </main>
  );
}
