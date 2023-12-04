import React from "react";
import Image from "../utils/Image";
import img2 from "../img/img_2.jpg";
import img3 from "../img/img_3.jpg";
import img4 from "../img/img_4.jpg";
import Button from "../utils/button";

const Slide2 = () => {
    return (
        <section className="slide_2">
            <div className="slide_2_left">
                <div className="slide_2_left_double">
                    <Image src={img2} className={"slide_2_img slide_2_img2"} />
                    <Image src={img3} className={"slide_2_img slide_2_img3"} />
                </div>
                <Image src={img4} className={"slide_2_img slide_2_img4"} />
            </div>
            <div className="slide_2_right">
                <h2>О компании</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. 'tds;lfsdlkfl;sdkf'
                </p>
                <Button
                    text={"Читать"}
                    href={"#"}
                    // className={"slide_1_right_content_btn"}
                />
            </div>
            <div className="slide_2_bg"></div>
        </section>
    );
};

export default Slide2;
