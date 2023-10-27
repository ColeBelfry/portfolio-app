import "./ProjectCard.css";

function ProjectCard(props){

    const onClick = () => {

    };

    const getCard = () => {
        if(props.type === "selected"){
            return <div className="selected-card">
            <img src={props.src}/>
            <div className="card-body">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        }
        else if(props.type === "blank"){
            return <div className="empty-card">
        </div>
        } else{
            return <div className="card">
                <img src={props.src}/>
                <div className="card-body">
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        }
    };
    return (
        <>
            {getCard()}
        </>
    );
}
export default ProjectCard;