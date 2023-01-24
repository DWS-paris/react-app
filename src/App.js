/* 
    [CMP] Main import
    Define main imports to create the component
*/  
    // React modules
    import React, { Component } from 'react';

    // Store modules
    import { connect } from 'react-redux';
    import store from './store/index';

    // Router modules
    import { Routes, Route } from 'react-router-dom';

    // App views
    import HomeView from './views/HomeView';
    import DashboardView from './views/DashboardView';
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

        onLogout(){
            /* 
                [STORE] Dispatch
                Dispatch action to change state value
            */
                store.dispatch({
                    type: 'LOGOUT_USER',
                    value: null
                })
            //
        }

        /* 
            [CMP] Render
            Display componenet DOM
        */
            render(){
                if( this.props.user === null ){
                    return(
                        <div className="App">
                            <main>
                                {/* Use the Routes directive to define App routes */}
                                <Routes>
                                    <Route path='/' element={ <HomeView/> } />
                                </Routes>
                            </main>
                        </div>
                    )
                }
                else{
                    return(
                        <div className="App">
                            <HeaderMain onLogout={ this.onLogout } />
                            <main>
                                {/* Use the Routes directive to define App routes */}
                                <Routes>
                                    <Route path='/' element={ <DashboardView/> } />
                                </Routes>
                            </main>
                        </div>
                    )
                }
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