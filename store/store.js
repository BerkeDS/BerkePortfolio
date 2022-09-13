import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/workCardSlice';

import certificateReducer from './features/certificateCardSlice';


const store = configureStore({
    reducer: {
        cards: cardReducer,
        certificates: certificateReducer
    }
});



export default store;