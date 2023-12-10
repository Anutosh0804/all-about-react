import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oops Error!!</h1>
            <p>Error Code: {err.status}</p>
        </div>
    )
}

export default Error;