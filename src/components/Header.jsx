import React, { useState, useEffect } from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    const [mobileMenuToggle, setMobileMenuToogle] = useState(true);
    const [display, setDisplay] = useState("none");

    const changeDisplay = () => {
        if (mobileMenuToggle) {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
        setMobileMenuToogle(!mobileMenuToggle);
    };


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setDisplay("block");
                setMobileMenuToogle(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='navbar'>
            <div className='navPosition'>
                <header>
                    <h2 className='logo'>JULIA L-U</h2>
                </header>

                <div id='menuIcon'>
                    {mobileMenuToggle ? (
                        <LuMenu onClick={changeDisplay} />
                    ) : (
                        <RxCross2 onClick={changeDisplay} />
                    )}
                </div>
            </div>

            <nav style={window.innerWidth < 768 ? { display: display } : {}}>
                <ul>
                    <li className='onlyMobile'>Главная</li>
                    <li>Портфолио</li>
                    <li id='cv'>Скачать CV</li>
                    <li onClick={() => navigate("aboutme")}>Обо мне</li>
                    <li className='mobileHidden' style={{ border: "2px solid #00412D" }}>Связаться со мной</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
