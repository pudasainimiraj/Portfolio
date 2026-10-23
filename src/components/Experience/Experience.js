import React from 'react';

import { Chip, ChipList, Container, Section, SectionHeader, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { education, experience } from '../../constants/constants';
import { Bullets, Company, Meta, Period, Role, RoleList, RoleTitle, StackRow, SubTitle } from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <Container>
      <SectionHeader>
        <SectionTitle>Experience</SectionTitle>
        <SectionText>What I did in each role, with the outcome.</SectionText>
      </SectionHeader>

      <RoleList>
        {experience.map((role) => (
          <Role key={`${role.title}-${role.company}`}>
            <Meta>
              <RoleTitle>{role.title}</RoleTitle>
              <Company>{role.company}</Company>
              <Period>{role.period}</Period>
            </Meta>
            <div>
              <Bullets>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </Bullets>
              {role.stack.length > 0 && (
                <StackRow>
                  <ChipList aria-label="Stack">
                    {role.stack.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </ChipList>
                </StackRow>
              )}
            </div>
          </Role>
        ))}
      </RoleList>

      <SubTitle>Education</SubTitle>
      <RoleList>
        {education.map((entry) => (
          <Role key={entry.degree}>
            <Meta>
              <Period>{entry.period}</Period>
            </Meta>
            <Meta>
              <RoleTitle>{entry.degree}</RoleTitle>
              <Company>{entry.school}</Company>
            </Meta>
          </Role>
        ))}
      </RoleList>
    </Container>
  </Section>
);

export default Experience;
