import React from 'react';

import BgAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { ButtonLink, ButtonLinkSecondary, Container } from '../../styles/GlobalComponents';
import { asset, hero, proof, site } from '../../constants/constants';
import { Actions, Backdrop, Body, Eyebrow, HeroInner, HeroSection, Proof, ProofLabel, ProofLink, ProofNumber, Sub, Tertiary, Title } from './HeroStyles';

const Hero = () => (
  <HeroSection>
    <Backdrop aria-hidden="true">
      <BgAnimation />
    </Backdrop>
    <Container>
      <HeroInner>
        <Eyebrow>{site.availability}</Eyebrow>
        <Title>{site.name}</Title>
        <Sub>{hero.headline}</Sub>
        <Body>{hero.body}</Body>
        <Proof>
          {proof.map((item) => (
            <li key={item.value + item.label}>
              <ProofLink href={item.href}>
                <ProofNumber>{item.value}</ProofNumber>
                <ProofLabel>{item.label}</ProofLabel>
              </ProofLink>
            </li>
          ))}
        </Proof>
        <Actions>
          <ButtonLink href="#projects">View work</ButtonLink>
          <ButtonLinkSecondary href={asset(site.cv)} download>
            Download CV
          </ButtonLinkSecondary>
        </Actions>
        <Tertiary href={`mailto:${site.email}`}>Or email {site.email}</Tertiary>
      </HeroInner>
    </Container>
  </HeroSection>
);

export default Hero;
