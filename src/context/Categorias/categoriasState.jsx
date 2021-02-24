import React, { useReducer } from "react";
import CategoriasContext from "./categoriasContext";
import CategoriasReducer from "./categoriasReducer";
import images from "../../assets/images";

import {
    CARGANDO_CATEGORIAS,
    UPDATE_FAVORITES,
    ADD_FAVORITE_CATEGORY,
    REMOVE_FAVORITE_CATEGORY,
    
} from '../../types/index'

const CategoriasState = (props) => {
    const initialState = {
        categorias: [
            { id: 1, nombre: "Ciencias", urlImage: images.ciencia },
            { id: 2, nombre: "Deportes", urlImage: images.deportes },
            { id: 3, nombre: "Gamers", urlImage: images.games },
            { id: 4, nombre: "Moda", urlImage: images.moda },
            { id: 5, nombre: "Niños", urlImage: images.ninio },
            { id: 6, nombre: "Peliculas", urlImage: images.starWars },
            { id: 7, nombre: "DC Comic's", urlImage: images.superhero },
            { id: 8, nombre: "Viajes", urlImage: images.viajes },
            { id: 9, nombre: "Lectura", urlImage: images.lectura },
            {
                id: 10,
                nombre: "NI IDEA",
                urlImage:
                    "https://images.pexels.com/photos/4886807/pexels-photo-4886807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
        ],
        categoriasFavoritas:[],
    };

    const [state, dispatch] = useReducer(CategoriasReducer, initialState);

    const cargarCategorias = () =>{
        dispatch({
            type:CARGANDO_CATEGORIAS
        })
    }

    const agregarFavoritas = (categoria) =>{
        dispatch({
            type:ADD_FAVORITE_CATEGORY,
            payload:categoria
        })
    }

    const eliminarFavoritas = (categoria) =>{
        dispatch({
            type:REMOVE_FAVORITE_CATEGORY,
            payload:categoria,
        })
    }

    

    return (
        <CategoriasContext.Provider
            value={{
                categoriasFavoritas: state.categoriasFavoritas,
                categorias: state.categorias,
                cargarCategorias,
                agregarFavoritas,
                eliminarFavoritas
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasState;
