import React from "react";
import Image from "../utils/Image";
import img1 from "../img/img_1.jpg";
import Button from "../utils/button";
import Arrow from "../img/arrow.svg";

const Slide1 = () => {
    return (
        <section className="slide_1">
            <div className="slide_1_left">
                <h1 className="slide_1_left_project">PROJECT</h1>
                <h1 className="slide_1_left_home">HOME</h1>
                <div className="slide_1_left_nav_btn">
                    <div className="slide_1_left_nav_btn_back">
                        <Image src={Arrow} className="arrow_back" />
                    </div>
                    <div className="slide_1_left_nav_btn_next">
                        <Image src={Arrow} />
                    </div>
                </div>
                <div className="slide_1_left_slide_numbers">
                    <span className="slide_1_page">01</span>
                    <span className="slide_1_line"></span>
                    <span className="slide_1_page">02</span>
                </div>
            </div>
            <div className="slide_1_right">
                <div className="slide_1_right_content">
                    <Image src={img1} />
                    <Button
                        text={"Взглянуть"}
                        href={"#"}
                        className={"slide_1_right_content_btn"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Slide1;
