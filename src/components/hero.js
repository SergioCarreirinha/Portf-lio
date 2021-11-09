import React from 'react';

import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import { LeftSection } from '../styles/HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem-vindo ao meu <br />
        Portfólio pessoal
      </SectionTitle>
      <SectionText>
        Qualquer um pode escrever um código que o computador entenda. 
        Bons programadores escrevem códigos que os humanos entendam. <br />
        <i>Martin Fowler</i>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;