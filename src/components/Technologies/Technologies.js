import React from 'react';
import { FiCode, FiCpu, FiDatabase } from 'react-icons/fi';

import { Card, CardTitle, Chip, ChipList, Container, IconTile, Section, SectionHeader, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { skills } from '../../constants/constants';
import { Grid } from './TechnologiesStyles';

const icons = [FiCpu, FiDatabase, FiCode];

const Technologies = () => (
  <Section id="skills">
    <Container>
      <SectionHeader>
        <SectionTitle>Skills</SectionTitle>
        <SectionText>What I use at work and in my own projects.</SectionText>
      </SectionHeader>
      <Grid>
        {skills.map((group, i) => {
          const Icon = icons[i];
          return (
            <Card key={group.group}>
              <IconTile aria-hidden="true">
                <Icon size={24} />
              </IconTile>
              <CardTitle>{group.group}</CardTitle>
              <ChipList>
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipList>
            </Card>
          );
        })}
      </Grid>
    </Container>
  </Section>
);

export default Technologies;
