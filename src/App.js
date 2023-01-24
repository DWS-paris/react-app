/* 
    [CMP] Main import
    Define main imports to create the component
*/  
    // React modules
    import React, { Component } from 'react';

    // Store modules
    import { connect } from 'react-redux';
    import store from './store/index'
//

/* 
  [CMP] Main imports
*/
    // App componenets
    import HeaderMain from './components/HeaderMain';
//

/* 
    [CMP] Define compoennet
    Set component classe
*/
    class App extends Component{
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
            [CMP] Render
            Display componenet DOM
        */
            render(){
                return(
                    <div className="App">
                        <HeaderMain/>
                        <main>
                            <p>MAIN</p>
                        </main>
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
        return{
            user: state.user
        }
    }
//

/* 
    [CMP] Export
    Export component classe
*/
    export default connect( mapStateToPros )( App );
//