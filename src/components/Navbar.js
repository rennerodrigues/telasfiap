import logo from '../assets/logo.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBNavbarNav,
    MDBIcon,
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo03'
                        aria-controls='navbarTogglerDemo03'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBNavbarBrand> 
                        <Link className='nav-link' to="/"> <img src={logo} width="100" height="100"  />Dashboard</Link>
                    </MDBNavbarBrand>
                    <MDBCollapse navbar show={showNavNoTogglerThird}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/">Dashboard</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/configuracoes">Cadastro</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/permissoes">Permissões</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/gastos">Gastos</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='nav-link' to="/recebimentos">Recebimentos</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                            <Link className='nav-link' to="/cht">Chat</Link>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}