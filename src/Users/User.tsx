import s from "../Users/User.module.scss";
import React, {DragEventHandler} from "react";

type PropsType = {
    name: string
    // drag: DragEventHandler<HTMLDivElement>
}

export const User = (props: PropsType) => {

    function handleDrag(ev: React.DragEvent<HTMLDivElement>): void
    {

        const id = (ev.target as HTMLDivElement).id;
        ev.dataTransfer.setData("text/plain", id);
    }

    return <div draggable={true} onDragStart={handleDrag} >
        <div className={s.user} >
            {props.name}
        </div>
    </div>
}