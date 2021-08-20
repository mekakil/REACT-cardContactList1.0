import React from "react";
import Card from "/Users/mekakil/cardproject1.3/src/components/Card.jsx";
import contacts from "/Users/mekakil/cardproject1.3/src/contacts.js";
import Dates from "/Users/mekakil/cardproject1.3/src/components/Dates.jsx";

function App(){
    return(
        <div>
            <Card
            name = {contacts[0].name}
            phone = {contacts[0].phone}
            email = {contacts[0].email}
            address = {contacts[0].address}
            imgURL = {contacts[0].imgURL}
            />
            <Card
            name = {contacts[1].name}
            phone = {contacts[1].phone}
            email = {contacts[1].email}
            address = {contacts[1].address}
            imgURL = {contacts[1].imgURL}
            />
            <Card
            name = {contacts[2].name}
            phone = {contacts[2].phone}
            email = {contacts[2].email}
            address = {contacts[2].address}
            imgURL = {contacts[2].imgURL}
            />
            <Card
            name = {contacts[3].name}
            phone = {contacts[3].phone}
            email = {contacts[3].email}
            address = {contacts[3].address}
            imgURL = {contacts[3].imgURL}
            />

           <p> Copyright <Dates/></p>
        </div>
    );
}

export default App;