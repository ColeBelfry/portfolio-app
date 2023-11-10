import "./ProjectCard.css";

function ProjectCard(props){

    const onClick = () => {

    };

    const getCard = () => {
        if(props.type === "selected"){
            return <div className="card selected shadow">
            <img src={props.src}/>
            <div className="card-body">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        }
        else if(props.type === "blank"){
            return <div className="card empty shadow">
        </div>
        } else{
            return <div className="card shadow">
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