import React from 'react';
import  Container  from '@material-ui/core/Container';
import  {Link}  from 'react-router-dom';

const Home = () => {
    return ( 
        <Container>
            
            <Link to='/categorias'>Hola</Link>
        </Container>
     );
}   
 
export default Home;