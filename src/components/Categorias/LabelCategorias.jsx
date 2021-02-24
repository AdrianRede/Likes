import { Container, Grid, Button } from "@material-ui/core";
import React, { useContext } from "react";
import CategoriasContext from "../../context/Categorias/categoriasContext";

const LabelCategorias = () => {
    const { categoriasFavoritas } = useContext(CategoriasContext);
    console.log(categoriasFavoritas);
    return (
        <Container>
            <Grid container spacing={2}>
                {categoriasFavoritas.map((categoria) => (
                    <Grid item >
                        <Button variant="contained" color="primary">
                            {categoria.nombre}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default LabelCategorias;
