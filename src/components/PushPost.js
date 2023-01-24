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
    class PushPost extends Component{
        // init
        constructor( props ){
            // ES6 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
            super( props );

            // Get 'formvalue' informations
            this.cmpSingleItem = this.props.singleitem;
        }

        /* 
            [CMP] Render
            Display componenet DOM
        */
            render(){
                return(
                    <div className='push-post-component'>
                        <p>{ this.cmpSingleItem.title }</p>
                    </div>
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
        return{ }
    }
//

/* 
    [CMP] Export
    Export component classe
*/
    export default connect( mapStateToPros )( PushPost );
//