import React from 'react';

import { site } from '../../constants/constants';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${site.email}`}>{site.email}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>LinkedIn</LinkTitle>
          <LinkItem href={site.linkedin}>linkedin.com/in/miraj-pudasaini</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>GitHub</LinkTitle>
          <LinkItem href={site.github}>github.com/pudasainimiraj</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© {new Date().getFullYear()} {site.name}</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
