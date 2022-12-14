import React from "react";


function ParticipantList({key, name, handleClick}) {

    return (
        <div className="participantDiv" key={key}>
            <label for="participantName">New Participant</label><br />
            <input type="text" id="participantName" name={name} defaultValue="New Participant"/>
            <button className="participantFormButtons" onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ParticipantList;