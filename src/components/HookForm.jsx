import React, { useState } from "react";

function HookForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleInput = (e) => {
        const thename = e.target.name;
        console.log("te=he inputName is: ,,,  ",thename);
        if (thename === "firstName"){
            console.log("inside if $$$$$$$$$$$$$$$$$$$$$$$$$$$$  ",thename);
            if (e.target.value.length < 2){
                setErrorMessage("The First name shouldn't be less than 2 char")
            }
            else{
                setErrorMessage("")
                setFirstName(e.target.value);
            }
        }
        else if (thename === "lastName"){
            if (e.target.value.length < 2){
                setErrorMessage("The Last name shouldn't be less than 2 char")
            }
            else{
                setErrorMessage("")
                setLastName(e.target.value);
            }
        }
        else if (thename === "email"){
            if (e.target.value.length < 5){
                setErrorMessage("The email shouldn't be less than 5 char")
            }
            else{
                setErrorMessage("")
                setEmail(e.target.value);
            }
        }
        else if (thename === "password"){
            if (e.target.value.length < 8){
                setErrorMessage("The Password shouldn't be less than 8 char")
            }
            else{
                setErrorMessage("")
                setPassword(e.target.value);
            }
        }
        else if (thename === "confPass"){
            if (password != e.target.value){
                setErrorMessage("The Confirm Password should match the password")
            }
            else{
                setErrorMessage("")
                setConfPass(e.target.value)
            }
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome ", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
	} else {
        return "Welcome, please submit the form";
	}
    };


    return(
        <div style={{ fontFamily: "cursive", marginTop: "30px", color: "blue" }}>
            
            <div>
            <form onSubmit= { createUser }>
                <div><h4>{formMessage()}</h4></div>
                <div style={{margin: "20px"}}>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={ handleInput } />
                    { 
                    errorMessage ? <p style={{color: "red"}}> {errorMessage} </p> : <p></p> 
                    }
                </div>

                <div style={{margin: "20px"}}>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={ handleInput } />
                    { 
                    errorMessage ? <p style={{color: "red"}}> {errorMessage} </p> : <p></p> 
                    }
                </div>

                <div style={{margin: "20px"}}>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={ handleInput } />
                    { 
                    errorMessage ? <p style={{color: "red"}}> {errorMessage} </p> : <p></p> 
                    }
                </div>

                <div style={{margin: "20px"}}>
                    <label>Password: </label>
                    <input type="text" name="password" onChange={ handleInput } />
                    { 
                    errorMessage ? <p style={{color: "red"}}> {errorMessage} </p> : <p></p> 
                    }
                </div>

                <div style={{margin: "20px"}}>
                    <label>Confirm password: </label>
                    <input type="text" name="confPass" onChange={ handleInput } />
                    { 
                    errorMessage ? <p style={{color: "red"}}> {errorMessage} </p> : <p></p> 
                    }
                </div>

                <div>
                    <input type="submit" value= "create user" style={{backgroundColor: "lightgreen"}}/>
                </div>

            </form>
            </div>

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