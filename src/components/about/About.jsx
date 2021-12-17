import "./about.css";
import cityscape from "../../img/cityscape.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={cityscape} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am passionate about seeing seeing people's dreams become a reality.
                </p>
                <p className="a-desc">
                    I have spent the last 10 years growing in multiple creative disciplines, advancing in technological studies and counselling people towards optimistic endeavors. I hope that with my heart of creativity and unique skillset, I can help others, whether an individual or an organization, get closer to seeing their dreams come true.
                </p>
            </div>
        </div>
    )
}

export default About
