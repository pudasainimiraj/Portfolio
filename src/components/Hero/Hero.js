import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { asset, hero, site } from '../../constants/constants';
import { Actions, Availability, Headline, LeftSection, PrimaryLink, SecondaryLink } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle as="h1" main>
          {site.name}
        </SectionTitle>
        <Availability>{site.availability}</Availability>
        <Headline>{hero.headline}</Headline>
        <SectionText>{hero.body}</SectionText>
        <Actions>
          <PrimaryLink href="#projects">View work</PrimaryLink>
          <SecondaryLink href={asset(site.cv)} download>
            Download CV
          </SecondaryLink>
        </Actions>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
