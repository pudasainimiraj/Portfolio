import React from 'react';

import { Container } from '../../styles/GlobalComponents';
import { asset, site } from '../../constants/constants';
import { Bottom, Column, ColumnTitle, FooterGrid, FooterLink, FooterWrap } from './FooterStyles';

const Footer = () => (
  <FooterWrap>
    <Container>
      <FooterGrid>
        <Column>
          <ColumnTitle>Contact</ColumnTitle>
          <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
          <FooterLink href={asset(site.cv)} download>Download CV</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>Profiles</ColumnTitle>
          <FooterLink href={site.github} target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
          <FooterLink href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
        </Column>
        <Column>
          <ColumnTitle>On this page</ColumnTitle>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#experience">Experience</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </Column>
      </FooterGrid>
      <Bottom>© {new Date().getFullYear()} {site.name}</Bottom>
    </Container>
  </FooterWrap>
);

export default Footer;
