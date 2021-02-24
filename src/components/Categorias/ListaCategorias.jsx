import React, { useContext, useEffect } from 'react';

import { Container, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
//Componentes Hijos
import CardCategoria from './CardCategoria';
//Contextos que manejan el state
import CategoriasContext from '../../context/Categorias/categoriasContext';
import LabelCategorias from './LabelCategorias';


const ListaCategorias = () => {


    const categoriasContext = useContext(CategoriasContext);
    const {categorias, cargarCategorias} = categoriasContext;
    //debo hacer un Context que me regrese un categorias[con las categorias cargadas en el initialState]
    useEffect(() => {
        
        //cargarCategorias();
    }, [])

    console.log(categorias)

    return ( 
        <Container>
            <Link to='/'>Regresar</Link>
            <h2>Desde Lista Categorias</h2>
            <Grid 
                container
                justify='center'
                alignItems='center'
                spacing={2}
            >
               {categorias.map((categoria) => (
                        <Grid item xs={6} sm={3} > 
                            <CardCategoria categoria={categoria}/>
                        </Grid>
                       

                ))}
            </Grid>


            <LabelCategorias />            
            
            
        </Container>
     );
}
 
export default ListaCategorias;