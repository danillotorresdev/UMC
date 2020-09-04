import React from 'react';
import {
  Navbar,
  NavBrand,
  NavList,
  NavItem,
} from './styles';
import { FaGoogleWallet } from 'react-icons/fa'
import { GiPapers } from 'react-icons/gi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineUser, AiOutlineDashboard } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'

const Sidebar: React.FC = () => {
  return (
    <Navbar>
      <NavBrand><FaGoogleWallet size="30" color="#fff" /><span>PEG Contas</span></NavBrand>
      <NavList>
        <NavItem>
          <GiPapers size="20" />
          <span>Minhas <br /> atividades</span>
        </NavItem>
        <NavItem>
          <HiOutlineMenuAlt4 size="20" />
          <span>Todas as <br /> contas</span></NavItem>
        <NavItem>
          <AiOutlineUser size="20" />
          <span>Usuários</span>
        </NavItem>
        <NavItem>
          <GoGraph size="20" />
          <span>Desempenho</span></NavItem>
        <NavItem><AiOutlineDashboard size="20" /><span>Dashboard</span></NavItem>
      </NavList>
    </Navbar>
  )

}


export default Sidebar;
