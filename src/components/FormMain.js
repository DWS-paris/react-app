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
    class FormMain extends Component{
        // init
        constructor( props ){
            // ES6 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
            super( props );

            // Bind 'this within the needed methods
            this.onSubmit = this.onSubmit.bind( this );
        }

        /* 
            [CMP] Methods
        */
            onSubmit( event ){
                // Stop event
                event.preventDefault();

                // Emit event to send value to parent component
                this.props.onSubmit({
                    email: 'julien@dwsapp.io',
                    password: 'azertyuiop'
                })
            }
        //

        /* 
            [CMP] Render
            Display componenet DOM
        */
        render(){
            return(
                <form onSubmit={ this.onSubmit }>
                    <input type='text' name='email' />
                    <input type='password' name='password' />
                    <button type='submit'>Connexion</button>
                </form>
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
    export default connect( mapStateToPros )( FormMain );
//