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

            this.cmpFormValue = this.props.formvalue;
            this.state = {  }
            for( let item of this.cmpFormValue ){
                this.state[ item.name ] = item.value;
            }

            // Bind 'this within the needed methods
            this.onSubmit = this.onSubmit.bind( this );
            this.onChangeState = this.onChangeState.bind( this );
        }

        /* 
            [CMP] Methods
        */
            onSubmit( event ){
                // Stop event
                event.preventDefault();
                
                // Emit event to send value to parent component
                this.props.onSubmit( this.state )
            }

            onChangeState( event ){
                // Use React set state method
                this.setState( { 
                    [ event.target.getAttribute('name') ]: event.target.value
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

                    { 
                        this.cmpFormValue.map( (input, idx) => {
                            return(
                                <fieldset
                                    key={ 'form-input-' + idx }
                                >
                                    <label 
                                        htmlFor={ input.name }
                                    >
                                        { input.label }
                                    </label>

                                    <input 
                                        name={ input.name }
                                        type={ input.type }
                                        placeholder={ input.placeholder }
                                        min={ input.min ? input.min : null }
                                        required={ input.required ? input.required : false }
                                        
                                        value={ this.state[input.name] }
                                        onChange={ this.onChangeState }
                                    />
                                </fieldset>
                            )
                        }) 
                    }

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