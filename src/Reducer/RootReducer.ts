import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import {reducer as reduxFormReducer } from 'redux-form'; 
//import BoardsCollection from './BoardsCollectionReducer';
import BoardsCollectionReducer from './BoardsCollectionReducer';
import ListReducer from './ListReducer';
import ListCollectionReducer from './ListCollectionReducer';
import ActiveBoardReducer from './ActiveBoardReducer';

const RootReducer = combineReducers({
    form:reduxFormReducer,
    createBoard:CreateBoardReducer,
    boardsCollection:BoardsCollectionReducer,
    createList:ListReducer,
    listsCollection:ListCollectionReducer,
    activeBoard:ActiveBoardReducer
})

export default RootReducer;