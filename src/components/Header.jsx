import React, { useState, useEffect } from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

function Header() {
    const navigate = useNavigate();
    const [mobileMenuToggle, setMobileMenuToogle] = useState(true);
    const [display, setDisplay] = useState("none");

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    const navigateAndCloseMenu = (path) => {
        navigate(path);
        changeDisplay();
    };

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
        <header>
            <div className='navbar'>
                <div className='navPosition'>
                    <header>
                        <h2 onClick={() => navigate("/")} className='logo'>JULIA L-U</h2>
                    </header>

                    <div id='menuIcon'>
                        {mobileMenuToggle ? (
                            <LuMenu onClick={changeDisplay} />
                        ) : (
                            <RxCross2 onClick={changeDisplay} />
                        )}
                    </div>
                </div>

                <OutsideClickHandler
                    onOutsideClick={() => {
                        if (!mobileMenuToggle && window.innerWidth < 768) {
                            changeDisplay();
                        }
                    }}
                >
                    <nav style={window.innerWidth < 768 ? { display: display } : {}}>
                        <ul className='hoverButton'>
                            <li onClick={() => navigateAndCloseMenu("/")} className='onlyMobile'>Главная</li>
                            <li onClick={() => navigate("/")}>Портфолио</li>
                            <a href="/JuliaLeonkovaCVru.pdf" target="_blank" rel="noopener noreferrer"><li id='cv'>Скачать CV</li></a>
                            <li onClick={() => navigateAndCloseMenu("aboutme")}>Обо мне</li>
                            <li onClick={scrollToBottom} className='mobileHidden' style={{ border: "2px solid #00412D" }}>Связаться со мной</li>
                        </ul>
                    </nav>
                </OutsideClickHandler>
            </div>
        </header>
    )
}

export default Header;
