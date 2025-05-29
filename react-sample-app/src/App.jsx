import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {
    const [num, setNum] = useState(0)

    // イベントハンドラ
    const onClickCountUp = () => {
        setNum((prev) => prev + 1)
        setNum((prev) => prev + 1)
    }

    // cssの当て方
    const contentStyle_A = {
        color: 'red',
        fontSiza: '20px'
    }
    const contentStyle_B = {
        color: 'green',
        fontSiza: '30px'
    }

    return (
        <>
            <h1 style={contentStyle_A}>こんにちは</h1>
            <ColorfulMessage color="blue" >お元気ですか</ColorfulMessage>
            <ColorfulMessage color="green" >元気です</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
        </>
    )
}
