import React from 'react'
import axios from "axios"
import StarWarsLoveur from "../screens/StarWarsLoveur"

class AppelApi extends React.Component {
    constructor(props) {
        super(props);
    this.state={
        starWarsCharacter: [],
        sliceArray: [],
    }
    }
    componentDidMount () {
        axios.get('https://miadil.github.io/starwars-api/api/all.json')
        .then((res) => this.setState({starWarsCharacter: res.data}))
    }

    render(){
       const sliceArray = this.state.starWarsCharacter.slice(0, 19)
       
    return(
        <div>
            <StarWarsLoveur sliceArray={sliceArray}/>
        </div>
    )
    }
}

export default AppelApi;