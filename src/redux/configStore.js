import { combineReducers, createStore } from 'redux';
import {gioHangReducer} from './Reducers/gioHangReducer';

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ state của ứng dụng
    // reducer gần giống state
    gioHangReducer: gioHangReducer

});

export const store = createStore(rootReducer);

