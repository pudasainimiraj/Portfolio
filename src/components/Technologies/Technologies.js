import React from 'react';

import { CardTitle, Chip, ChipList, Container, Section, SectionHeader, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { skills } from '../../constants/constants';
import { Grid, Group } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="skills">
    <Container>
      <SectionHeader>
        <SectionTitle>Skills</SectionTitle>
        <SectionText>What I use at work and in my own projects.</SectionText>
      </SectionHeader>
      <Grid>
        {skills.map((group) => (
          <Group key={group.group}>
            <CardTitle>{group.group}</CardTitle>
            <ChipList>
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipList>
          </Group>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Technologies;
