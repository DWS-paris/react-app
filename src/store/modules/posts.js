const postsList = JSON.parse( window.localStorage.getItem( 'posts' ) ) || null

/* 
    Definition and export
*/
    export default function( state = postsList , action ){
        // Check action type
        switch( action.type ){
            case 'POST_UPDATE':
                // Save user infos
                window.localStorage.setItem( 'posts', JSON.stringify( action.value ) );
                
                // Update state
                return state = action.value;

            default:
                return state = postsList;
                break;
        }
    }
//