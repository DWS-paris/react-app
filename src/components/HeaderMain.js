/* 
    [CMP] Main import
    Define main imports to create the component
*/  
    // React modules
    import React, { Component } from 'react';

    // Store modules
    import { connect } from 'react-redux';
//

/* 
    [CMP] Define compoennet
    Set component classe
*/
    class HeaderMain extends Component{
        // init
        constructor( props ){
            // ES6 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
            super( props );
        }

        /* 
            [CMP] Render
            Display componenet DOM
        */
        render(){
            return(
                <header>
                    <h1>Hello world</h1>
                </header>
            )
        }
    }
//

/* 
    [STORE] State
    Map store state to component props
*/
    const mapStateToPros = state => {
        return{
            user: state.user
        }
    }
//

/* 
    [CMP] Export
    Export component classe
*/
    export default connect( mapStateToPros )( HeaderMain );
//