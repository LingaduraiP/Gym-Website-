import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
    const [showBar, setShowBar] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(true);
    const btnHandler = () => {
        if (showBar) {
            setShowMenu((prev) => !prev);
        } else {
            setShowMenu(true);
        }
    };

    React.useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth < 550) {
                setShowBar(true);
                setShowMenu(false);
            } else {
                setShowBar(false);
                setShowMenu(true);
            }
        };
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    });
    return (
        <div className='header'>
            <img className='img' src={logo} alt='' />
            {showBar && (
                <img className='bars' src={bars} alt='' onClick={btnHandler} />
            )}

            {showMenu && (
                <ul className='header-menu'>
                    <li>
                        <Link
                            onClick={btnHandler}
                            to='Home'
                            spy={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={btnHandler}
                            to='Program'
                            spy={true}
                            smooth={true}
                        >
                            Program
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={btnHandler}
                            to='Why'
                            spy={true}
                            smooth={true}
                        >
                            Why us
                        </Link>{" "}
                    </li>
                    <li>
                        <Link
                            onClick={btnHandler}
                            to='Journey'
                            spy={true}
                            smooth={true}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={btnHandler}
                            to='Tesimonials'
                            spy={true}
                            smooth={true}
                        >
                            Tesimonials
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Header;
