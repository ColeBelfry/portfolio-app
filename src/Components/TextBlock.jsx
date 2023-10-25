import './TextBlock.css';

function TextBlock(props){
    return (
        <>
            <div className='TextBlock'>
                <h2 className="title">{props.title}</h2>
                    <hr className="style-line"/>
                    <p>{props.body}</p>
            </div>
        </>
    );
}
export default TextBlock;