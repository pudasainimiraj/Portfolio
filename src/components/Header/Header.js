import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { asset, site } from '../../constants/constants';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
            <span>{site.name}</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#skills">Skills</NavLink>
        </li>
        <li>
          <NavLink href="#experience">Experience</NavLink>
        </li>
        <li>
          <NavLink href={asset(site.cv)}>CV</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href={site.github} aria-label="GitHub">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={site.linkedin} aria-label="LinkedIn">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
