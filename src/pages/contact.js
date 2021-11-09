import React from 'react';
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../styles/ContactStyles';

const contact = () =>  (
  <Section>
    <SectionTitle>Contactos</SectionTitle>
    <List>
    <ListItem>
      <AiFillMail size="3rem" />
        <ListContainer>
          <ListTitle>Email Pessoal</ListTitle>
          <ListParagraph>
            sergiocarreirinha@gmail.com
          </ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
      <AiFillMail size="3rem" />
        <ListContainer>
          <ListTitle>Email Institucional</ListTitle>
          <ListParagraph>
            1180800@isep.ipp.pt
          </ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
      <AiFillLinkedin size="3rem" />
        <ListContainer>
          <ListTitle>LinkedIn</ListTitle>
          <ListParagraph>
          https://www.linkedin.com/in/sérgio-carreirinha/
          </ListParagraph>
        </ListContainer>
    </ListItem>
    </List>
  </Section>
);

export default contact;
