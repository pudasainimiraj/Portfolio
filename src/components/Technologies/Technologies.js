import React from 'react';
import { FaBrain, FaCode, FaDatabase } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { skills } from '../../constants/constants';

const icons = [FaBrain, FaDatabase, FaCode];

const Technologies = () =>  (
  <div>
    <Section id='skills'>
      <SectionTitle>
        Skills
      </SectionTitle>
      <SectionText>
        What I use at work and in my own projects.
      </SectionText>
      <SectionDivider>

      </SectionDivider>
      <List>
        {skills.map((group, i) => {
          const Icon = icons[i];
          return (
            <ListItem key={group.group}>
              <Icon size="3rem" />
              <ListContainer>
                <ListTitle>
                  {group.group}
                </ListTitle>
                <ListParagraph>
                  {group.items.map((item) => (
                    <React.Fragment key={item}>
                      {item} <br />
                    </React.Fragment>
                  ))}
                </ListParagraph>
              </ListContainer>
            </ListItem>
          );
        })}
      </List>
      </Section>
  </div>
);

export default Technologies;
