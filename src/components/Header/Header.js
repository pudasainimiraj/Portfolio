import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { asset, site } from '../../constants/constants';
import { Actions, Bar, Brand, CvLink, IconLink, Inner, Nav, NavLink } from './HeaderStyles';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Inner>
        <Link href="/" passHref>
          <Brand>{site.name}</Brand>
        </Link>
        <Nav aria-label="Sections">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <Actions>
          <IconLink href={site.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FiGithub size={22} />
          </IconLink>
          <IconLink href={site.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={22} />
          </IconLink>
          <CvLink href={asset(site.cv)} download>CV</CvLink>
        </Actions>
      </Inner>
    </Bar>
  );
};

export default Header;
