import React from 'react';

import { Card, CardTitle, Chip, ChipList, Container, Kicker, Section, SectionHeader, SectionText, SectionTitle, TextLink } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Description, Grid, Links, Metric } from './ProjectsStyles';

const Projects = () => (
  <Section id="projects">
    <Container>
      <SectionHeader>
        <SectionTitle>Projects</SectionTitle>
        <SectionText>Each project states the problem, what I built and a measured result.</SectionText>
      </SectionHeader>
      <Grid>
        {projects.map((p) => (
          <Card key={p.title}>
            <div>
              <CardTitle>{p.title}</CardTitle>
              <Kicker>{p.tagline}</Kicker>
            </div>
            <Description>{p.description}</Description>
            {p.metric && <Metric>{p.metric}</Metric>}
            <ChipList aria-label="Stack">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ChipList>
            <Links>
              <TextLink href={p.code} target="_blank" rel="noopener noreferrer">
                Code
              </TextLink>
              {p.demo && (
                <TextLink href={p.demo} target="_blank" rel="noopener noreferrer">
                  Live demo
                </TextLink>
              )}
            </Links>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Projects;
