import React from 'react';
import axios from 'axios'
const api = {
  key: "7de94c6922cde97de8792f71077d0d4e",
  base: "https://home.openweathermap.org/api_keys"
}

const App = () => {
  let fetchData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Marbella&appid=${api.key}`)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log('An Error has been ocuerred'))
  }
  
    return (
      <div className="App">
        <main>
          <div className="search-box">
            <input 
              type="text"
              className = "search-bar"
              placeholder = "Search..."
            />
            <button onClick = {fetchData}>fetch</button>
            <h1>This is My List</h1>
          </div>
        </main>
      </div>
    );
}

export default App;
