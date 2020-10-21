import React from "react"

const Display = (props) => {

const {states} = props

const loaded = () => (
    <div style={{textAlign: "center"}}>
        {states.map(state => (
            <article>
                <h2>{state.state}</h2>
                <img src={state.img}/>
                <button onClick={() => {
                    props.selectState(state)
                    props.history.push("/edit")
                }}>Edit</button>

            </article>
        ))}
    </div>
)
return states.length > 0 ? loaded():
<h1>Loading...</h1>
}
export default Display