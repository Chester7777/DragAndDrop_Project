import s from "../Users/User.module.scss";
import React from "react";

type PropsType = {
    name: string
    // drag: DragEventHandler<HTMLDivElement>
    // onDrag: DragEventHandler<boolean> | undefined
}

export const User = (props: PropsType) => {

    function handleDrag(ev: React.DragEvent<HTMLDivElement>, data: string): void {
        const id = (ev.target as HTMLDivElement).id;
        ev.dataTransfer.setData("id", id);
    }



    return <div
        draggable={true}
        onDragStart={(event) => handleDrag(event, "id")}
    >
        <div className={s.user}>
            {props.name}
        </div>
    </div>
}