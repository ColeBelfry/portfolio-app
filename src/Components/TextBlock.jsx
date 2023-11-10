import './TextBlock.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function TextBlock(props){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".revealUp").forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: true,
            onEnter: function () {
                gsap.fromTo(
                    elem,
                    {y: 100, autoAlpha: 0},
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeave: function () {
                gsap.fromTo(elem, { autoAlpha: 1}, { autoAlpha: 0, overwrite: "auto"});
            },
            onEnterBack: function () {
                gsap.fromTo(
                    elem,
                    {y: -100, autoAlpha: 0},
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: function () {
                gsap.fromTo(elem, { autoAlpha: 1}, {
                    autoAlpha: 0, overwrite: "auto"
                });
            }
        });
    });
    return (
        <>
            <div className='TextBlock revealUp'>
                <h2 className="title">{props.title}</h2>
                    <hr className="style-line"/>
                    <p>{props.body}</p>
            </div>
            <div class="spacer"></div>
        </>
    );
}
export default TextBlock;