import React, {useState} from 'react';
import s from "./App.module.scss";
// import {Users} from "./Users/Users";


type BoardsType = { id: number, title: string, items: ItemsType };
type ItemsType = [{ items: ItemType }];
type ItemType = { id: number, title: string }

function App() {
    const [boards, setBoards] = useState<any>([
        {
            id: 1,
            title: "Сделано",
            items: [{id: 1, title: "Пойти в магазин"}, {id: 2, title: "Выкинуть муссор"}, {
                id: 3,
                title: "Прочитать книгу по JS"
            }]
        },
        {
            id: 2,
            title: "Сделать",
            items: [{id: 4, title: "Написать код"}, {id: 5, title: "Создать новый проект"}, {
                id: 6,
                title: "Выучить React Native"
            }]
        },
        {
            id: 3,
            title: "Проверить",
            items: [{id: 7, title: "Уроки у дочки"}, {id: 8, title: "Работу подчиненных"}, {
                id: 9,
                title: "Почтовый ящик"
            }]
        },
    ]);

    const [currentBoard, setCurrentBoard] = useState<any>(null)
    const [currentItem, setCurrentItem] = useState<any>(null)

    const dragOverHandler = (e: any) => {
        e.preventDefault()
        if (e.target.className == "item") {
            e.target.style.boxShadow = "0 4px 3px gray"
        }
    }

    // React.DragEvent<HTMLDivElement>
    const dragLeaveHandler = (e: any) => {
        e.target.style.boxShadow = "0 4px 3px none"
    }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: any, item: any) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    const dragEndHandler = (e: any) => {
        e.target.style.boxShadow = "0 4px 3px none"
    }

    const dropHandler = (e: any, board: any, item: any) => {
        e.preventDefault()
        if (!!currentBoard) {
            const currentIndex = currentBoard.items.indexOf(currentItem);
            currentBoard.items.splice(currentIndex, 1);
        }

        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);
        setBoards(boards.map((b: any) => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
        e.target.style.boxShadow = "none"
    }

    const dropCardHandler = (e: any, board: any) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        setBoards(boards.map((b: any) => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
        e.target.style.boxShadow = "none"
    }

    return (
        <div className={s.app}>
            {boards.map((board: any) => {
                return <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                    className={s.board}
                >
                    <div className={s.board_title}>
                        {board.title}
                    </div>
                    {board.items.map((item: any) => {
                        return <div
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                            draggable={true}
                            className={s.item}
                        >
                            {item.title}
                        </div>
                    })}
                </div>
            })}
            {/*<Users  title={"Users"}/>*/}
            {/*<Users title={"Mentors"}/>*/}
        </div>
    );
}

export default App;



