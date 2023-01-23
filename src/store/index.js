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
*/
    export default createStore( rootReducer );
//