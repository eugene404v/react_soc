import React from "react";
import styles from "./MessageOne.module.css"

const MessageOne = (props) => {
    return (


        <li>
            <h2>{props.name}</h2>
            <span>{props.id}</span>
        </li>
    )
}

export default MessageOne;