import {combineReducers} from 'redux';
import {createReducer} from '../common/redux.helpers';

const bookModalReducer = createReducer({isOpen: false},{

});

const bookBrowserReducer = combineReducers({

    bookModal: movieModalReducer
});

export default movivieBrowserReducer;