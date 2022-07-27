import { Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
};

export const Button = (props) => {
    const { onClick, newBalance } = props;

    return (
        <>
            <Link to="/" style={linkStyle} state={{ state: newBalance }}>
                <button onClick={onClick}>Calcurate</button>
            </Link>
        </>
    );
};