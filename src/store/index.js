/* 
    Imports
*/
    // React modules
    import { createStore } from 'redux';

    // Store reducer
    import rootReducer from './reducers';
//

/* 
    Definition and export
    TODO: check createStore
*/
    export default createStore( rootReducer );
//