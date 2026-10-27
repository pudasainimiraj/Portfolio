import React from 'react';

import { ButtonLinkSecondary, Container } from '../../styles/GlobalComponents';
import { asset, hero, site } from '../../constants/constants';
import LiveSearch from './LiveSearch';
import { Actions, Body, HeroInner, HeroSection, Sub, Tertiary, Title } from './HeroStyles';

const Hero = () => (
  <HeroSection>
    <Container>
      <HeroInner>
        <Title>{site.name}</Title>
        <Sub>{hero.headline}</Sub>
        <Body>{hero.body}</Body>
        <LiveSearch />
        <Actions>
          <ButtonLinkSecondary href="#projects">View work</ButtonLinkSecondary>
          <ButtonLinkSecondary href={asset(site.cv)} download>
            Download CV
          </ButtonLinkSecondary>
        </Actions>
        <Tertiary>
          {site.availability}. <a href={`mailto:${site.email}`}>Email {site.email}</a>
        </Tertiary>
      </HeroInner>
    </Container>
  </HeroSection>
);

export default Hero;
