import React from "react";
import styles from "./Messages.module.css"
import MessageOne from "./MessageOne/MessageOne";


const Messages = () => {
    let messagesData = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Zuhra'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Pier'},
        {id: 5, name: 'Albert'}
    ]


    return (
        <div className={styles.messages}>
            <MessageOne name={messagesData[0].name} id={messagesData[0].id}/>
            <MessageOne name={messagesData[1].name} id={messagesData[1].id}/>
            <MessageOne name={messagesData[2].name} id={messagesData[2].id}/>
        </div>

    )
}

export default Messages;