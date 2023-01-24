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
    class DashboardView extends Component{
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
        }

        /* 
            [CMP] Methods
            Define classes functions
        */
            // Get post list from API
            async getPostList(){
                // Use Axios to send AJAX request
                const axiosRequest = await axios.get(`http://localhost:3001/posts`);

                // Dispatch store action
                store.dispatch({
                    type: 'POST_UPDATE',
                    value: axiosRequest.data
                })
            }
        //

        /* 
            [CMP] Hooks
            Special event from the React object
        */
            componentDidMount(){
                this.getPostList()
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
            /* 
                Display post list
                - create a component for PushPost (post title)
                - loop on it
            */

            // Check if post list is not null
            if( this.props.posts !== null ){
                return(
                    <div className="dashboard-view-component">
                        {/* Loop on post list */}
                        {
                            this.props.posts.map( ( post, idx ) => {
                                return(
                                    <PushPost
                                        key={ 'push-post-item-' + idx }
                                        singleitem={ post }
                                    />
                                )
                            })
                        }
                    </div>
                )
            }
            else{
                return(
                    <div className="dashboard-view-component">
                        <p className='is-size-5'>Aucun post</p>
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
            posts: state.posts,
        }
    }
//

/* 
    [CMP] Export
    Export component classe
*/
    export default connect( mapStateToPros )( DashboardView );
//