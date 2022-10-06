import React, { useState } from "react";
import navData from "../dummyData/navData";
import Navlink from './Navlink';
import styles from '../css/Header.module.css';
import realEstateLogo from '../imgs/real-estate-logo.png';

function Header(){
    const [navlinks,setNavLinks] = useState(navData);

    function linkHandle(id){
        setNavLinks(prevNavLinks => {
            return prevNavLinks.map(navlink => {
                return id === navlink.id ? {
                    ...navlink,
                    isClicked: true
                }: {
                    ...navlink,
                    isClicked: false
                }
            })
        })
    }

    const allNavLinks = navlinks.map(linkData => <Navlink key={linkData.id} 
                                                        linkHandle={linkHandle}
                                                        data={linkData}
                                                    />);

    return (
        <nav className={styles.navigation}>
            <div className={styles.organization}>
                <img className={styles.logo} src={realEstateLogo}/>
                <h3 className={styles.title}>Estatery</h3>
            </div>
            <ul className={styles.navlist}>
                {allNavLinks}
            </ul>
            <div className={styles.authentication}>
                <button className={styles.login}>Login</button>
                <button className={styles.signUp}>Sign up</button>
            </div>
        </nav>
    )
}

export default Header;