import { useState } from "react";

const SearchBar = (props) => {

    const {onSearch} = props;

    const [name, setName] = useState("")

    const handleSearch = () => {

        onSearch(name)

        setName("")
    }

    return (
        <div>
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)}/>
            
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar