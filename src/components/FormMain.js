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

            // Get 'formvalue' informations
            this.cmpFormValue = this.props.formvalue;
            this.formIsValide = true;

            this.state = {};
            for( let item of this.cmpFormValue ){
                this.state[ item.name ] = '';
            }

            // Bind 'this within the needed methods
            this.onUpdateFormValue = this.onUpdateFormValue.bind( this );
            this.onSubmit = this.onSubmit.bind( this );
        }

        onUpdateFormValue( event, item ){
            // Update component states with setState()
            // TODO: check form value
            this.setState( 
                { 
                    [ event.target.getAttribute('name') ]: event.target.value 
                }
            )
        }

        onSubmit( event ){
            // Stop event
            event.preventDefault();

            // Emit event to send back object data to parent componenet
            this.props.onSubmitFormMain( this.state )
        }

        /* 
            [CMP] Render
            Display componenet DOM
        */
            render(){
                return(
                    <form onSubmit={ this.onSubmit }>
                        {
                            this.cmpFormValue.map( ( item, idx ) => {
                                return(
                                    <fieldset key={ 'item-form-' + idx }>
                                        <label 
                                            htmlFor={ item.name } 
                                            className='label'
                                        >
                                            { item.label }
                                        </label>

                                        <input
                                            className='input'
                                            name={ item.name }
                                            type={ item.type }
                                            placeholder={ item.placeholder }
                                            min={ item.min ? item.min : undefined }
                                            max={ item.max ? item.max : undefined }
                                            required={ item.required ? item.required : undefined }
                                            value={ this.state[ item.name ] }
                                            onChange={ event => this.onUpdateFormValue( event, item)  }
                                        />
                                    </fieldset>
                                )
                            })
                        }


                        <button 
                            type='submit' 
                            className='mt-5 button is-primary is-small is-fullwidth'
                            disabled={ !this.formIsValide }
                        >
                            OK
                        </button>
                    </form>
                )
            }
        //
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