import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineBook } from "react-icons/ai";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display:"flex", alignItems: "center", color: 'white', marginBottom:20}}>
          <AiOutlineBook size="3rem"/><Span>Portfólio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projetos</NavLink>
      </Link>
      <Link href="#contact">
        <NavLink>Contactos</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>Sobre mim</NavLink>
      </Link>    
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/sérgio-carreirinha/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/SergioCarreirinha">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/sergio_carreirinha/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
