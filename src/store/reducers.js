/* 
    Imports
*/
    // Redux module
    import { combineReducers } from 'redux';

    // Store module
    import user from './modules/user';
    import posts from './modules/posts';
//

/* 
    Definition and export
*/
    export default combineReducers({
        user: user,
        posts: posts
    });
//