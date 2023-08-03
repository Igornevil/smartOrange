import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

const Image = ({ src, alt, className, href }) => {
    const classes = classNames(className);
    if (href) {
        return (
            <Link to={href}>
                <img src={src} alt={alt} className={classes} />
            </Link>
        );
    }
    return <img src={src} alt={alt} className={classes} />;
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
};

export default Image;
