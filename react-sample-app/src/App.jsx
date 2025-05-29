import { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage"

export const App = () => {
    const [num, setNum] = useState(0)
    const [isShowFace, setIsShowFace] = useState(false)

    // イベントハンドラ
    const onClickCountUp = () => {
        setNum((prev) => prev + 1)
    }
    const onClickToggele = () => {
        setIsShowFace(!isShowFace)
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

    // useEffectを使用して処理の制御。下の書き方では不具合が起きる
    useEffect(() => {
        if (num > 0 ) {
            if (num % 3 === 0) {
                isShowFace || setIsShowFace(true)
            } else {
                isShowFace && setIsShowFace(false)
            }
        }
    }, [num])

    // この処理を書いた時点でonClickToggeleが機能しなくなってしまう。。。
    // if (num > 0 ) {
    //     if (num % 3 === 0) {
    //         isShowFace || setIsShowFace(true)
    //     } else {
    //         isShowFace && setIsShowFace(false)
    //     }
    // }

    return (
        <>
            <h1 style={contentStyle_A}>こんにちは</h1>
            <ColorfulMessage color="blue" >お元気ですか</ColorfulMessage>
            <ColorfulMessage color="green" >元気です</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggele}>on/off</button>
            {isShowFace && < p>hoge</p>}
        </>
    )
}
