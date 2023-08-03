import React, { useState } from "react";
import Image from "../utils/Image";
import img10 from "../img/img_10.jpg";
import Button from "../utils/button";
import CheckBoxField from "../utils/checkBoxField";
import TextField from "../utils/textField";

const Slide5 = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        product: "",
        text: "",
        licence: false
    });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <section className="slide_5">
            <h2>Связаться с нами</h2>
            <div className="slide_5_content">
                <div className="slide_5_content_form">
                    <form>
                        <TextField
                            type={"text"}
                            id={"name"}
                            value={data.name}
                            name={"name"}
                            placeholder={"Имя"}
                            onChange={handleChange}
                            // error={errors.password}
                        />
                        <TextField
                            type={"phone"}
                            id={"phone"}
                            value={data.phone}
                            name={"phone"}
                            placeholder={"Номер телефона"}
                            onChange={handleChange}
                            // error={errors.password}
                        />
                        <TextField
                            type={"email"}
                            id={"email"}
                            value={data.email}
                            name={"email"}
                            placeholder={"E-mail*"}
                            onChange={handleChange}
                            // error={errors.password}
                        />
                        <TextField
                            type={"text"}
                            id={"product"}
                            value={data.product}
                            name={"product"}
                            placeholder={"Интересующий товар/услуга"}
                            onChange={handleChange}
                            // error={errors.password}
                        />
                        <TextField
                            type={"text"}
                            id={"text"}
                            value={data.text}
                            name={"text"}
                            placeholder={"Сообщение"}
                            onChange={handleChange}
                            // error={errors.password}
                        />
                    </form>
                </div>
                <Image src={img10} />
            </div>

            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                // error={errors.licence}
            >
                <p>
                    Отправляя заявку Вы соглашаетесь с политикой
                    конфиденциальности
                </p>
            </CheckBoxField>
            <Button
                text={"Отправить"}
                href={"#"}
                className={"slide_5_btn"}
                type={"black"}
            />
        </section>
    );
};

export default Slide5;
