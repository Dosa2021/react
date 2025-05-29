export const App = () => {
    // イベントハンドラ
    const onClickButton = () => console.log('fuga-----')

    // cssの当て方
    const contentStyle = {
        color: 'red',
        fontSiza: '20px'
    }
    return (
        <>
            <h1 style={contentStyle}>hoge</h1>
            <p>hogehoge</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}
