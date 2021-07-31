import {User} from "./User";
import s from "../Users/Users.module.scss";
import React, {useState} from "react";


type PropsType = {
    title: string
}

export const Users = (props: PropsType) => {

    const [content, setContent] = useState<string>("Drop Something Here");

    // This function will be triggered when dropping
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("id");
        console.log("!!!")
        // event.target.append(document.getElementById(data))
        setContent(data);
    };

    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        // event.preventDefault()
        // event.target.style.backgroundColor = "lightgray"
    };

    return <div
        className={s.usersContainer}
        onDragOver={allowDrop}
        onDrop={dropHandler}
    >
        {props.title}
        <User name={"Anna"}/>
        <User name={"Oly"}/>
        {content}
        <User name={"Katy"}/>
    </div>
}