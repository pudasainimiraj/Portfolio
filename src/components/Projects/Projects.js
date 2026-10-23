import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Metric, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <div>
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <SectionText>Each project states the problem, what I built and a measured result.</SectionText>

        <GridContainer>
        {projects.map((p) => {
        return (
          <BlogCard key={p.title}>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <CardInfo>{p.tagline}</CardInfo>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            {p.metric && <Metric>{p.metric}</Metric>}
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t) => {
                  return <Tag key={t}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.code} target="_blank" rel="noopener noreferrer">Code</ExternalLinks>
              {p.demo && <ExternalLinks href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</ExternalLinks>}
            </UtilityList>
          </BlogCard>
           );
          })}
      </GridContainer>

    </Section>
  </div>
);

export default Projects;
