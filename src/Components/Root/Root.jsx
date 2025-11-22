import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './root.css'

const Root = () => {

    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);


    return (
        <div>
            <Header></Header>
             <div className='root-main'>
                 <SideBar></SideBar>
                 {isNavigation && <span>Loading...</span>}
                 <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;


/**
 * 1. use: usersPromise > suspense > promise > use(usersPromise)
 * 2. [less used so far]  > useState + useEffect (() > {}, [])
 * 3. load data before router component is rendered
 * 
 */