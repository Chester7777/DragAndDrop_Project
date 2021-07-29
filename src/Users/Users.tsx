import {User} from "./User";
import s from "../Users/Users.module.scss";
import React from "react";


type PropsType = {
    title: string
}

export const Users = (props: PropsType) => {

    // This function will be triggered when dropping
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        debugger
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        // setContent(data);
    };

    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        debugger
        event.preventDefault();
    };

    return <>
        <div className={s.usersContainer} onDragOver={allowDrop}  	onDrop={dropHandler}>
            {props.title}

        <User name={"Anna"} />
        <User name={"Oly"} />
        <User name={"Katy"} />
    </div>
    </>
}