function Scroll(probs) {

    return (
        <div style={{overflowY:'scroll', border: '5px solid black', height: '800px'}}>
            {probs.children}
        </div>// Will return its children as shown in App.js
    )

}
export default Scroll;