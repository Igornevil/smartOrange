import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Image from "./Image";
import Arrow from "../img/arrow.svg";
import ArrowWhite from "../img/arrow_white.svg";
import classNames from "classnames";

const Button = ({ text, alt, className, href, color, type }) => {
    const classes = classNames(
        className,
        "btn",
        type === "black" ? "bg_black" : "bg_white"
    );

    // if (href) {
    //     return (
    //         <Link to={href}>
    //             <img src={src} alt={alt} className={classes} />
    //         </Link>
    //     );
    // }
    // return <img src={src} alt={alt} className={classes} />;
    if (type === "black") {
        return (
            <Link to={"/"}>
                <div className={classes}>
                    <div className="btn_content">
                        <span className="btn_text ">{text}</span>
                        <Image src={ArrowWhite} alt={"arrow"} />
                    </div>
                </div>
            </Link>
        );
    }
    return (
        <Link to={"/"}>
            <div className={classes}>
                <div className="btn_content">
                    <span className="btn_text">{text}</span>
                    <Image src={Arrow} alt={"arrow"} />
                </div>
            </div>
        </Link>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
};

export default Button;
