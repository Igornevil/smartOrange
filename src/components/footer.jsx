import React from "react";
import Image from "../utils/Image";
import Logo from "../img/LogoWhite.svg";
import { Link } from "react-router-dom";

import Twitter from "../img/Twitter.svg";
import Pinterest from "../img/Pinterest.svg";
import Linked_In from "../img/Linked_In.svg";
import Facebook from "../img/Facebook.svg";
import Maps from "../img/maps.svg";
import Phone from "../img/phone.svg";
import Email from "../img/email.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_content_logo">
                    <Image src={Logo} alt="logotype" className="logo_img" />
                </div>
                <div className="footer_content_center">
                    <div className="footer_content_info">
                        <h3>Информация</h3>
                        <ul>
                            <li>
                                <Link to="#">Главная</Link>
                            </li>
                            <li>
                                <Link to="#">Галерея</Link>
                            </li>
                            <li>
                                <Link to="#">Проекты</Link>
                            </li>
                            <li>
                                <Link to="#">Сертификаты</Link>
                            </li>
                            <li>
                                <Link to="#">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_content_contacts">
                        <h3>Информация</h3>
                        <ul>
                            <li>
                                <Image src={Maps} />
                                <p>
                                    100000, Республика Казахстан,
                                    <br /> г. Караганда, ул. Телевизионная 10
                                </p>
                            </li>
                            <li>
                                <Image src={Phone} />
                                <p>
                                    <a href="tel:+380990000000">
                                        +38 (099) 000 00 00
                                    </a>
                                </p>
                            </li>
                            <li>
                                <Image src={Email} />
                                <p>
                                    <a href="mailto:mail@gmail.com">
                                        mail@gmail.com
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_content_media">
                    <h3>Социальные сети</h3>
                    <div className="footer_content_media_icons">
                        <Image src={Facebook} href={"/#"} />
                        <Image src={Twitter} href={"#"} />
                        <Image src={Linked_In} href={"#"} />
                        <Image src={Pinterest} href={"#"} />
                    </div>
                </div>
            </div>
            <div className="footer_line">
                <p>© 2019 Digital Project. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
