import {
    CARGANDO_CATEGORIAS,
    //UPDATE_FAVORITES,
    ADD_FAVORITE_CATEGORY,
    REMOVE_FAVORITE_CATEGORY
} from '../../types/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch(action.type){

        case CARGANDO_CATEGORIAS:
            return {
                ...state,
            }
        case ADD_FAVORITE_CATEGORY:
            return{
                ...state,
                categoriasFavoritas:[action.payload, ...state.categoriasFavoritas]
            }
        case REMOVE_FAVORITE_CATEGORY:
            return {
                ...state,
                categoriasFavoritas:state.categoriasFavoritas.filter(categoria => categoria.id !== action.payload)
            }

        default:
            return state;
    }

}