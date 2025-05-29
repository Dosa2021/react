 export const ColorfulMessage = (props) => {
    const { color, children } = props
    const contentStyle_A = {
        color,
        fontSiza: '20px'
    }
    
    return <p style={contentStyle_A}>{children}</p>
}