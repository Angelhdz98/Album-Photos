import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/AlbumApi";


export const store= configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware : (getDefaultmiddleware) => {
        return getDefaultmiddleware().concat(albumsApi.middleware)
    }
});

//Temporal 
//esto sirve para poder tener un acceso sencillo  a la store desde el buscador 
window.store = store; 

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from './apis/AlbumApi';
