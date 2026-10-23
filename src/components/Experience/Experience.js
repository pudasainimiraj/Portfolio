import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { education, experience } from '../../constants/constants';
import { Bullets, EduList, Role, RoleCompany, RoleHeader, RoleList, RolePeriod, RoleTitle, StackLine, SubTitle } from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>What I did in each role, with the outcome.</SectionText>

    <RoleList>
      {experience.map((role) => (
        <Role key={`${role.title}-${role.company}`}>
          <RoleHeader>
            <RoleTitle>
              {role.title} <RoleCompany>· {role.company}</RoleCompany>
            </RoleTitle>
            <RolePeriod>{role.period}</RolePeriod>
          </RoleHeader>
          <Bullets>
            {role.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </Bullets>
          {role.stack.length > 0 && <StackLine>{role.stack.join(' · ')}</StackLine>}
        </Role>
      ))}
    </RoleList>

    <SubTitle>Education</SubTitle>
    <EduList>
      {education.map((entry) => (
        <li key={entry.degree}>
          {entry.degree}, {entry.school}, {entry.period}
        </li>
      ))}
    </EduList>
  </Section>
);

export default Experience;
