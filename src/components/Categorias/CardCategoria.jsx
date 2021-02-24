import React, { useState, useContext } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from '@material-ui/core/IconButton';
import { Card, CardHeader } from "@material-ui/core";

import CategoriasContext from '../../context/Categorias/categoriasContext'

import Heart from '../Likes/Heart';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        borderRadius: "15px",
        border: "0px solid #000",
        backgroundColor: "#4ba3c7",
        /*boxShadow:'1px 1px 7px 3px rgba(140,172,184,1)'*/
    },
    btnRoot: {
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
    },
    media: {
        height: 0,
        //marginTop:'-10',
        paddingTop: "56.25%", // 16:9
    },
    titleCard: {
        textAlign: "center",
        color: "#fff",
        padding: 1,
    },
    image: {
        position: "relative",
        height: 200,
        [theme.breakpoints.down("xs")]: {
            width: "100% !important", // Overrides inline-style
            height: 100,
        },
        "&:hover, &$focusVisible": {
            zIndex: 1,
            "& $imageBackdrop": {
                opacity: 0.15,
            },
            "& $imageMarked": {
                opacity: 0,
            },
            "& $imageTitle": {
                border: "4px solid currentColor",
            },
        },
    },
    focusVisible: {},
 
    imageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
    },
    imageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create("opacity"),
    },
    red:{
        fontSize:'3rem',
        color: 'rgb(245, 0, 87)',
        zIndex:2,
    }
}));

const CardCategoria = ({categoria}) => {


    const { nombre, urlImage } = categoria;

    
    const [ selected, setSelected] = useState(false);
    
    const {agregarFavoritas, eliminarFavoritas} = useContext(CategoriasContext)


    //Al dar click extraido el nombre de la categoria para despues pasarlo al state
    const onclick = (categoria) => {
        if(selected){
            setSelected(false);
            eliminarFavoritas(categoria);
        }else{
            setSelected(true);
            agregarFavoritas(categoria);
        }
   
        console.log(categoria)

    };

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className={`${classes.titleCard}`} title={nombre} />
            <div className={classes.btnRoot}>
                <ButtonBase
                    focusRipple
                    key={nombre}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: "100%",
                    }}
                    onClick={() => onclick(categoria)}
                    value={nombre}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${urlImage})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <IconButton variant="contained" color="secondary" className={classes.red}>
                        {selected ? (
                            <i class="fas fa-heart red" value={nombre}></i>
                        ) : (
                            <i class="fas fa-plus"></i>
                        )}
                    </IconButton>
                </ButtonBase>
            </div>
        </Card>
    );
};

export default CardCategoria;
