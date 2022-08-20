import React, { useState } from "react";

function HookForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confPass};
        console.log("Welcome ", newUser);
    };

    return(
        <div style={{ fontFamily: "cursive", marginTop: "30px", color: "blue" }}>
            <form onSubmit= { createUser }>
                <div style={{margin: "20px"}}>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>

                <div style={{margin: "20px"}}>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>

                <div style={{margin: "20px"}}>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>

                <div style={{margin: "20px"}}>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>

                <div style={{margin: "20px"}}>
                    <label>Confirm password: </label>
                    <input type="text" onChange={ (e) => setConfPass(e.target.value) } />
                </div>

                <div>
                    <input type="submit" value= "create user" style={{backgroundColor: "lightgreen"}}/>
                </div>

            </form>

            {/* display user info in real time: */}
            <div>
                <h4> First Name: { firstName }</h4>
                <h4> Last Name: { lastName }</h4>
                <h4> Email: { email }</h4>
                <h4> Password: { password }</h4>
                <h4> Confirm password: { confPass }</h4>
            </div>

        </div>
    );

};

export default HookForm;