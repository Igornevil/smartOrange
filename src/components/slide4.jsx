import React from "react";
import Image from "../utils/Image";
import img5 from "../img/img_5.jpg";
import img6 from "../img/img_6.jpg";
import img7 from "../img/img_7.jpg";
import img8 from "../img/img_8.jpg";
import img9 from "../img/img_9.jpg";
import Arrow from "../img/arrow_white.svg";
import Button from "../utils/button";

const Slide4 = () => {
    return (
        <section className="slide_4">
            <h2>Наши проекты</h2>
            <div className="slide_4_image">
                <div className="slide_4_image_top">
                    <div className="slide_4_image_top_image_5">
                        <div className="slide_4_image_top_image_5_bg">
                            <h1>ДОСУГОВЫЙ ЦЕНТР</h1>
                            <p>
                                ПОДРОБНЕЕ{" "}
                                <Image src={Arrow} className={"arrow"} />
                            </p>
                        </div>
                        <Image src={img5} className={"image_5"} />
                    </div>
                    <Image src={img6} />
                </div>
                <div className="slide_4_image_bottom">
                    <Image src={img7} className={"image_7"} />
                    <Image src={img8} className={"image_8"} />
                    <Image src={img9} className={"image_9"} />
                </div>
            </div>
            <div className="slide_4_button">
                <Button
                    text={"Читать"}
                    href={"#"}
                    className={"slide_4_btn"}
                    type={"black"}
                />
            </div>
        </section>
    );
};

export default Slide4;
