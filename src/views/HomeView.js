/* 
    [CMP] Main import
    Define main imports to create the component
*/  
    // React modules
    import React, { Component } from 'react';

    // Store modules
    import { connect } from 'react-redux';
    import store from '../store/index'
	import axios from 'axios';
//

/* 
  [CMP] Main imports
*/
    // App componenets
    import FormMain from '../components/FormMain';
//

/* 
    [CMP] Define compoennet
    Set component classe
*/
    class HomeView extends Component{
        // init
        constructor( props ){
            // ES6 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
            super( props );

            /* 
                [CMP] State
                Define inner compenent value (state)
            */
           
                this.state = {
                    activeForm:  'login',
                    cmpLoginFormValue: [
                        {
                            name: 'email',
                            value: '',
                            label: 'Your email',
                            placeholder: 'Required min. 5 charts',
                            type: 'email',
                            min: 5,
                            required: true
                        },
                        {
                            name: 'password',
                            value: '',
                            label: 'Your password',
                            placeholder: 'Required min. 5 charts',
                            type: 'password',
                            min: 5,
                            required: true
                        }
                    ],
                    cmpRegisterFormValue: [
                        {
                            name: 'email',
                            value: '',
                            label: 'Your email',
                            placeholder: 'Required min. 5 charts',
                            type: 'email',
                            min: 5,
                            required: true
                        },
                        {
                            name: 'given_name',
                            value: '',
                            label: 'Your name',
                            placeholder: 'Required min. 5 charts',
                            type: 'text',
                            min: 2,
                            required: true
                        },
                        {
                            name: 'family_name',
                            value: '',
                            label: 'Your family name',
                            placeholder: 'Required min. 5 charts',
                            type: 'text',
                            min: 2,
                            required: true
                        },
                        {
                            name: 'password',
                            value: '',
                            label: 'Your password',
                            placeholder: 'Required min. 5 charts',
                            type: 'password',
                            min: 5,
                            required: true
                        }
                    ]
                }
            //

			// Bind 'this within the needed methods
            this.onSubmit = this.onSubmit.bind( this );
            this.onChangeForm = this.onChangeForm.bind( this );
        }

        /* 
            [CMP] Method
            Set classe methods
        */
            // Bind "change" event on input tag
            onChangeForm( type ){
                this.setState({ activeForm: type })
            }
            
            // Bind "submit" event on form tag
			async onSubmit( event, type ){
                let axiosRequest = null

                // Check type to defien Axios request
                if( type === 'login' ){
                    // Log user with email and password
                    axiosRequest = await axios.get(`
                    http://localhost:3001/users?email=${ event.email }&password=${ event.password }
                `);
                }
                else if( type === 'register' ){
                    // Register user with state value
                    axiosRequest = await axios.post(
                        `http://localhost:3001/users`,
                        event
                    );
                }
                

                /* 
                    [CHECK] Response
                    TODO: make it real
                */
                    if( axiosRequest.data.length || type === 'register' ){
                        /* 
                            [STORE] Dispatch
                        */
                            store.dispatch({
                                type: 'LOGIN_USER',
                                value: type !== 'register' ? axiosRequest.data[0] : axiosRequest.data
                            })
                        //
                    }
                    else{
                        /* 
                            [STORE] Dispatch
                        */
                            store.dispatch({
                                type: 'LOGOUT_USER',
                                value: null
                            })
                        //
                    }
                //
			}
		//

        /* 
            [CMP] Render
            Display componenet DOM
        */
        render(){
            { 
                if( this.state.activeForm === 'login' ){
                    return(
                        <div className="home-view-component">
                            <FormMain 
                                formvalue={ this.state.cmpLoginFormValue }
                                onSubmitFormMain={ event => this.onSubmit( event, 'login' ) }
                            />

                            <button
                                className='button is-fullwidth mt-3'
                                onClick={ event => this.onChangeForm('register') }
                            >
                                Register
                            </button>
                        </div>
                    )
                }
                else if( this.state.activeForm === 'register' ){
                    return(
                        <div className="home-view-component-register">
                            <h1>Register</h1>
                            <FormMain 
                                formvalue={ this.state.cmpRegisterFormValue }
                                onSubmitFormMain={ event => this.onSubmit( event, 'register' ) }
                            />

                            <button
                                className='button is-fullwidth mt-3'
                                onClick={ event => this.onChangeForm('login') }
                            >
                                Login
                            </button>
                        </div>
                    )
                }
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
    export default connect( mapStateToPros )( HomeView );
//