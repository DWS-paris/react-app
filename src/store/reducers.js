/* 
    Imports
*/
    // Redux module
    import { combineReducers } from 'redux';

    // Store module
    import user from './modules/user';
//

/* 
    Definition and export
*/
    export default combineReducers({
        user: user
    });
//