const userInfo = JSON.parse( window.localStorage.getItem( 'user' ) ) || null

/* 
    Definition and export
*/
    export default function( state = userInfo , action ){
        // Check action type
        switch( action.type ){
            case 'LOGIN_USER':
                // Save user infos
                window.localStorage.setItem( 'user', JSON.stringify( action.value ) );
                
                // Update state
                return state = action.value;

            case 'LOGOUT_USER':
                // Delete user infos
                window.localStorage.removeItem( 'user' );

                // Clear state
                return state = null;

            default:
                return state = userInfo;
                break;
        }
    }
//