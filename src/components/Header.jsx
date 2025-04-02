import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";


function Header() {

    const [mobileMenuToggle, setMobileMenuToogle] = useState(false);

    const [display, setDisplay] = useState("none");

    const changeDisplay = () => {
        if (mobileMenuToggle) {
            setDisplay("block")
        } else {
            setDisplay("none")
        }
        setMobileMenuToogle(!mobileMenuToggle)
    }


    return (
        <div className='navbar'>

            <div className='navPosition'>
                <header>
                    <h2>JULIA L-U</h2>
                </header>

                <div id='menuIcon'>
                    {mobileMenuToggle ? <LuMenu onClick={changeDisplay} /> : <RxCross2 onClick={changeDisplay} />}
                </div>

            </div>

            <nav style={{ display: display }}>
                <ul>
                    <li>Главная</li>
                    <li>Портфолио</li>
                    <li id='cv'>Скачать CV</li>
                    <li>Обо мне</li>
                </ul>
            </nav>

        </div>
    )
}

export default Header
