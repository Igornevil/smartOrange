import React from "react";
import Image from "../utils/Image";
// import logo from "../img/logotype.png";
import Logo from "../img/Logo.svg";

const Header = () => {
    const navElem = [
        {
            label: "Главная",
            href: "#"
        },
        {
            label: "Галерея",
            href: "#"
        },
        {
            label: "Проекты",
            href: "#"
        },
        {
            label: "Сертификаты",
            href: "#"
        },
        {
            label: "Контакты",
            href: "#"
        }
    ];
    return (
        <header>
            <div className="logotype">
                <Image src={Logo} alt="logotype" className="logo_img" />
            </div>
            <div className="nav-list">
                {navElem.map((el) => (
                    <a href={el.href}>{el.label}</a>
                ))}
            </div>
        </header>
    );
};

export default Header;
