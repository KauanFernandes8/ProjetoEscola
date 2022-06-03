import React from 'react';
import {Routes, Route} from "react-router-dom";

import Main from './components/template/Main';
import CrudAluno from './components/CrudAluno/CrudAluno';
import CrudCurso from './components/CrudCurso/CrudCurso';


export default function Rotas()
{
 return(
     <Routes>
        <Route exact path='/'
            element=
                {
                    <Main title = "Bem Vindo!!">
                        <div>Cadastro de Alunos, Cursos e Carômetro</div>
                    </Main>  
                }
        />

        <Route path = '/alunos' element={<CrudAluno></CrudAluno>}/>
        <Route path = "*" to = '/'/>
        <Route path = '/cursos' element={<CrudCurso></CrudCurso>}/>
        <Route path = "*" to = '/'/>
     </Routes>
 )
}