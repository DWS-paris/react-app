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

            // Bind 'this within the needed methods
            this.onLogout = this.onLogout.bind( this );
        }

        onLogout(){
            this.props.onLogout();
        }

        /* 
            [CMP] Render
            Display componenet DOM
        */
        render(){
            if( this.props.user === null ){
                return(
                    <header>
                        <h1>Bienvenue</h1>
                    </header>
                )
            }
            else{
                return(
                    <header>
                        <h1>Vous êtes connecté en tant que { this.props.user.email }</h1>
                        <nav>
                            <ul>
                                <li>
                                    <button
                                        onClick= { this.onLogout }
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                )
            }
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