import{createStore, combineReducers, compose,applyMiddleware} from 'redux';
import thunkMiddlware from 'redux-thunk';
import{createLogger} from 'redux-logger';
import bookBrowserReducer from './modules/book-browser/book-browser.reducers';


//the root reducer will serve  as the parent for all other reduceres
//adding the module reducer to the root level here

const rootReducer = combineReducers({

    bookBrowser: bookBrowserReducer
});

//logging of information about dispached actions to the console
//including the previous state, the action details, and the next state

const loggerMiddleware = createLogger();

const store = createStore(

    //our reducer
    rootReducer,

    //preloaded_state

    undefined,

    //compose simply enables us to apply several store enhancers
    //Right now, we are only using applyMiddleware, 
    //just for future proofing the application
    compose(
        //middleware can intercept dispached actions before they reach the reducer
        //in order to modify it in some way

        applyMiddleware(
            //Thunk allows functions to be returned from action creators
            //so things like dispatching multiple actions
            //can be done  on a single action creator for async actions

            thunkMiddlware,
            //logger will output the previous state , next state and 
            //the action details to the console

            loggerMiddleware
        )
    )
);

export default store;