import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Alteracoes from './components/pages/alteracoes';
import Cadastro from './components/pages/cadastro';
import Recebimentos from './components/pages/recebimentos'
import Perfil from './components/pages/perfil'
import Permissoes from './components/pages/permissoes'
import Gastos from "./components/pages/gastos"
import Cht from "./components/pages/cht"
import Navbar from './components/Navbar'

const Header= () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<Perfil />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/permissoes' element={<Permissoes />} />
                    <Route path='/alteracoes' element={<Alteracoes />} />
                    <Route path='/gastos' element={<Gastos />} />
                    <Route path='/cht' element={<Cht />} />
                    <Route path='/recebimentos' element={<Recebimentos />} />
                </Routes>
            </div>
        </>
      
    )

}

export default Header