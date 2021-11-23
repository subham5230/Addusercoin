import React, { useState } from "react";
// import TextField from '@material-ui/core/TextField';


export default function Login() {
    const [state, setState] = useState({
        name: "",
        Password: ""
    });

    // const handleFormSubmit = event => {
    //     event.preventDefault();
    //     axios.post("https://coinstronaut-admin.herokuapp.com/create-or-update-coin", {
    //         coin: state
    //     }).then(
    //         console.log(state)
    //     )
    // };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(state);
      };

    const dispatcher = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    return (
        <>
            <div className="Login">
                <div>
                    <form action="#">
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="firstname"
                            placeholder="Enter Name.."
                            value={state.name}
                            onChange={dispatcher("name")}
                        />
                        <label>Password</label>
                        <input
                            type="Password"
                            id="Password"
                            name="Password"
                            placeholder="Enter Password"
                            value={state.Password}
                            onChange={dispatcher("Password")}
                        />
                        <input type="submit" onClick={handleFormSubmit} value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}