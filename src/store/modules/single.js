const singleItem = JSON.parse( window.localStorage.getItem( 'single' ) ) || null

/* 
    Definition and export
*/
    export default function( state = singleItem , action ){
        // Check action type
        switch( action.type ){
            case 'SINGLE_UPDATE':
                // Save user infos
                window.localStorage.setItem( 'single', JSON.stringify( action.value ) );
                
                // Update state
                return state = action.value;

            default:
                return state = singleItem;
                break;
        }
    }
//