import "./SkillBar.css";

function SkillBar(props){
    return (
        <>
            <div className="skill-bar">
                <div className="bar-header">
                    <p>{props.title}</p>
                    <p style={{position: "absolute", right: "0"}}>{props.level}</p>
                </div>
                <div className="bar-container">
                    <div className="skill" style={{width: props.percent}}></div>
                </div>
            </div>
        </>
    );
}
export default SkillBar;