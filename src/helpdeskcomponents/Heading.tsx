interface IProps {
    heading: string;
    color: string;
}

export const Heading: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className={`h3 ${props.color}`}>{props.heading}</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
};
export default Heading;