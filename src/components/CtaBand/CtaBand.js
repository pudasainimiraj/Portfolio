import React from 'react';
import styled from 'styled-components';

import { ButtonLink, ButtonLinkSecondary, Container, Section } from '../../styles/GlobalComponents';
import { asset, cta, site } from '../../constants/constants';

// One contrasting statement band before the footer: a single sentence and the primary action.
const Band = styled(Section)`
  padding: 96px 0;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 64px 0;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 24px;
  }
`;

const Statement = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 36px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 12px;
  }
`;

const CtaBand = () => (
  <Band band id="contact">
    <Container narrow>
      <Inner>
        <Statement>{cta.line}</Statement>
        <Actions>
          <ButtonLink href={`mailto:${site.email}`}>{cta.button}</ButtonLink>
          <ButtonLinkSecondary href={asset(site.cv)} download>
            Download CV
          </ButtonLinkSecondary>
        </Actions>
      </Inner>
    </Container>
  </Band>
);

export default CtaBand;
