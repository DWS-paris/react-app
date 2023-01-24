/* 
    [CMP] Main import
    Define main imports to create the component
*/  
    // React modules
    import React, { Component } from 'react';

    // Store modules
    import { connect } from 'react-redux';
    import store from './store/index'
	import axios from 'axios';
//

/* 
  [CMP] Main imports
*/
    // App componenets
    import FormMain from './components/FormMain';
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
                    ]
                }
            //

			// Bind 'this within the needed methods
            this.onSubmit = this.onSubmit.bind( this );
        }

        

		/* 
			[CMP] Methods
		*/
			async onSubmit( event ){         
                const connectedUser = await axios.get(`
                    http://localhost:3001/users?email=${ event.email }&password=${ event.password }
                `);

                if( connectedUser.data.length ){
                    /* 
                        [STORE] Dispatch
                    */
                        store.dispatch({
                            type: 'LOGIN_USER',
                            value: connectedUser.data[0]
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
			}
		//

        /* 
            [CMP] Render
            Display componenet DOM
        */
        render(){
            return(
                <div className="home-view-component">
                    <FormMain 
                        formvalue={ this.state.cmpLoginFormValue }
                        onSubmitFormMain={ this.onSubmit }
                    />
                </div>
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
    export default connect( mapStateToPros )( HomeView );
//