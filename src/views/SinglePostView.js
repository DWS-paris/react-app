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
    import PushPost from '../components/PushPost';
//

/* 
    [CMP] Define compoennet
    Set component classe
*/
    class SinglePostView extends Component{
        // init
        constructor( props ){
            // ES6 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
            super( props );

            /* 
                [CMP] State
                Define inner compenent value (state)
            */
           
                this.state = {}
            //
        }

        /* 
            [CMP] Methods
            Define classes functions
        */
            // Get post list from API
            async getSinglePost(){
                // Get path params (plain JS)
                const pathParams = window.location.pathname.split('/').filter( item => item.length );

                // Use Axios to send AJAX request
                const axiosRequest = await axios.get(`http://localhost:3001/${pathParams[0]}/${ pathParams[1] }`);

                // Dispatch store action
                store.dispatch({
                    type: 'SINGLE_UPDATE',
                    value: axiosRequest.data
                })
            }
        //

        /* 
            [CMP] Hooks
            Special event from the React object
        */
            componentDidMount(){
                this.getSinglePost()
            }
        //
        

		/* 
			[CMP] Methods
		*/
		//

        /* 
            [CMP] Render
            Display componenet DOM
        */
        render(){
            // Check if single is not null
            if( this.props.single === null ){
                return(
                    <div className="single-post-view-component">
                        <p>No data</p>
                    </div>
                )
            }
            else{
                return(
                    <div className="single-post-view-component">
                        <pre>{ JSON.stringify( this.props.single ) }</pre>
                    </div>
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
            user: state.user,
            single: state.single,
        }
    }
//

/* 
    [CMP] Export
    Export component classe
*/
    export default connect( mapStateToPros )( SinglePostView );
//