import heart2 from "./images/heart-2.webp"
import heart1 from "./images/heart-1.webp"

export function Sectionone() {

    return (
        <section className="card-section">
            <div className="corner-card-large">
                <img className="heart-2" src={heart2} alt="valentine day heart" /></div>
            <div className="center-card Myheart">
            </div>
            <div className="corner-card-short "><img src={heart1} alt="red hearts" /></div>
        </section>

    )
}
