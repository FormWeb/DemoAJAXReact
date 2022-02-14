import { useState, useEffect } from "react"
import axios from "axios"

const URL = "https://api.agify.io/?name=__name__"

const Result = (props) => {
    const {name} = props

    const [age, setAge] = useState(0)

    useEffect(() => {
        // Pour récup la localisation
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Lat : ", position.coords.latitude)
            console.log("Long : ", position.coords.longitude)
        })

        // Call API
        if (name !== "") {
            axios.get(URL.replace("__name__", name))
                .then(({data}) => {
                    console.log(data)
                    setAge(data.age)
                })
        }
    }, [name])

    return (
        <div>
            <h1>{name}</h1>
            <p>Age predicted : {age}</p>
        </div>
    )
}

export default Result