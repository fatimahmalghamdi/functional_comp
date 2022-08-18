import React from "react";

const PersonalCard = props => {
    const {fName , lName, age, hairColor} = props.person;
    return (
        <div>
            <h2> {fName} {lName} </h2>
            <h5>Age: {age} </h5>
            <h5>HairColor: {hairColor}</h5>
        </div>
    );
}

export default PersonalCard;