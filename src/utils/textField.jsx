import React from "react";
import PropTypes from "prop-types";

function TextField({
    type,
    name,
    value,
    onChange,
    error,
    label,
    placeholder,
    onSend
}) {
    const handleChange = (event) => {
        if (onChange) {
            onChange({ name: event.target.name, value: event.target.value });
        }
    };
    const getInputClasses = () => {
        return "form-input" + (error ? " is-invalid _input_border_danger" : "");
    };

    const handelValidateTel = ({ target }) => {
        if (type !== "tel") return;
        if (!/^\+\d*$/.test(value)) {
            onChange({ name: target.name, value: "+" });
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && onSend) {
            onSend();
        }
    };

    return (
        <>
            <div
                className={
                    "__input_textfield " +
                    (name === "text" ? "__input_textarea" : "")
                }
            >
                {label && <label htmlFor={name}>{label}</label>}
                <div className="has-validation">
                    <input
                        type={"text"}
                        id={name}
                        value={value}
                        placeholder={placeholder}
                        aria-label={placeholder}
                        name={name}
                        onChange={handleChange}
                        className={getInputClasses()}
                        autoComplete={"off"}
                        maxLength={type === "tel" ? 16 : ""}
                        onFocus={handelValidateTel}
                        // onKeyUp={}
                        // onKeyDown={type === "tel" ? handleKeyUp : () => {}}
                        onKeyDown={handleKeyDown}
                    />
                    {/* {error && (
                        <div className="invalid-feedback">
                            {<p>*{error}</p>}
                        </div>
                    )} */}
                </div>
            </div>
        </>
    );
}

TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextField;
