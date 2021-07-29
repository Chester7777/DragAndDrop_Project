import React, {useState} from 'react';
import s from "../src/App.module.scss";


function App() {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: "Сделано",
            item: [{id: 1, title: "Пойти в магазин"}, {id: 2, title: "Выкинуть муссор"}, {id: 3, title: "Прочитать книгу по JS"}]
        },
        {
            id: 2,
            title: "Сделать",
            item: [{id: 4, title: "Написать код"}, {id: 5, title: "Создать новый проект"}, {id: 6, title: "Выучить React Native"}]
        },
        {
            id: 3,
            title: "Проверить",
            item: [{id: 7, title: "Уроки у дочки"}, {id: 8, title: "Работу подчиненных"}, {id: 9, title: "Почтовый ящик"}]
        },
    ]);


    return (
        <div className={s.app}>
            {boards.map(board => {
                <div className={s.board}>
                    <div className={s.board_title}>
                        {board.title}
                    </div>
                    {board.item.map(item => {
                        <div
                            draggable={true}
                            className={s.item}
                        >
                            {item.title}
                        </div>
                    })}
                </div>
            })}


            {/*<Users title={"Users"}/>*/}
            {/*<Users title={"Mentors"}/>*/}
        </div>
    );
}


export default App;
