import React, { Component } from 'react';
import './App.css';
import mustang from './Assets/Images/mustang.jpg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        title: '',
        description: '',
        power: '',
        speed: '',
        records: [],
        update: false,
        totalPower: '',
        find__input: '',
    };
    this.sortByPower = this.sortByPower.bind(this);
    this.sortByLowestSpeed = this.sortByLowestSpeed.bind(this);
    this.searchByTitle = this.searchByTitle.bind(this);
  };

  createCarsButton = (e) => {
    e.preventDefault();
    document.getElementById("create__car").classList.toggle("active");
    document.getElementById("main").classList.toggle("active");
  };
  
  createRecord = () => {
    var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
    const axios = require('axios').default;
    const {id, title, description, power, speed} = this.state;
    axios.post("/api/create", {
      id: id,
      title: title,
      description: description,
      power: power,
      speed: speed
    }).then((response) => {
      console.log("responde", response);
      this.setState({
        title: "dsa",
        description: "",
        speed: "",
        power: ""
      });
    },this.fetchAllRecords())
    .catch((error) => console.log("error", error));
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  componentWillMount() {
    this.fetchAllRecords();
  }
  fetchAllRecords = () => {
    const axios = require('axios').default;
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
    axios.get('/api/get').then((response) => {
      		console.log("result", response);
      		this.setState({
      			records: response.data
      		});
      	})
      	.catch((error) => console.log("error", error));
	};
 
  editRecord = (id) => { 
    id -= 1;
    const axios = require('axios').default;
    axios.get('/api/get/' + id)
    .then(response => {
      console.log("repo", response);
      this.setState({
      id: id,
      update: true,
      title: response.data.title,
      description: response.data.description,
      power: response.data.power,
      speed: response.data.speed
    })})
    .catch((error) => console.log("error", error));
  };

  updateRecord = () => {
    const axios = require('axios').default;
    var myHeaders = new Headers();
	  myHeaders.append("Content-Type", "application/json");
    const {id, title, description, power, speed} = this.state;
    axios.put("/api/update", {
      id: id+1,
      title: title,
      description: description,
      power: power,
      speed: speed
    }).then((response) => {
      console.log(response);
      this.setState({
        update: false,
        id: "",
        title: "",
        description: "",
        speed: "",
        power: ""
      });
      this.fetchAllRecords();
    })
    .catch((error) => console.log("error", error));
  }

  deleteRecord = (id) => {
    const axios = require('axios').default;
    axios.delete('/api/delete/' + id).then((response) => {
      console.log(response);
    },this.fetchAllRecords())
    .catch((error) => console.log("error", error));
  }

  clearInputs = () => {
    this.setState({
      id: "",
      title: "",
      description: "",
      speed: "",
      power: ""
    });
  }
  sortByPower() {
    this.setState(prevState => {
      return this.state.records.sort((a, b) => (b.power - a.power))
  });
  }
  sortByLowestSpeed() {
    this.setState(prevState => {
      return this.state.records.sort((a, b) => (a.speed - b.speed))
  });
   }
  countTotalPower () {return this.state.records.reduce((acc, curr) => acc + curr.speed, 0); }
 
  searchByTitle  = () => {
    return this.state.records.filter((value) => {
    return value.title.toLowerCase().includes(this.state.find__input.toLowerCase())
    })
  }
render() {
  return (
    <body>
      <section class="section__main" id="section__main">
      <header>
          <div class="header__body">
              <nav class="nav__header">
                  <div class="header__menu">
                      <h2>My Car</h2>
                      <div class="header__buttons">
                          <button class="header__button" type="button">My Cars</button>
                          <button onClick={this.createCarsButton} id="create__button" class="header__button" type="button">Create Cars</button>
                      </div>
                  </div>
                  <div class="header__input">
                      <input onChange={this.handleChange} value={this.state.find__input} name="find__input"  id="find__input" class="header__input_text" type="text" placeholder="Type something..."/>
                      <div>
                      <button onClick={console.log("Result of searching - ",this.searchByTitle())}  id="header__button__serch" class="header__button__serch">Search</button>
                      <button id="header__button__clear" class="header__button__clear">Clear</button>
                      </div>
                  </div>
              </nav>
          </div>
      </header>
      <main class="main" id="main">
          <div class="left__section">
              <h3 class="main__header">Manage Cars</h3>
              <button onClick = {this.sortByPower} class="main__button_sort" id="sort_items_asc">Sort by the most powerful car</button>
              <button onClick = {this.sortByLowestSpeed} class="main__button_sort" id="sort_items_desc">Sort by the lowest speed</button>
              <hr/>
              <h2 class="main__title_count">Count total power:</h2>
              <button id = "count_total" type="button" class="main__button_count">Count</button>
              <h2 class="main__subtittle_total">Total power: <span id="total_power">{this.countTotalPower()} </span></h2>
          </div>
          <div class="right_-section">  
              <ul id="items_container"> {
                  this.state.records && this.state.records.map(record => {
                    return ( 
                    <li class="card" id={record.id}>
                      <img class="mustang__img" src={mustang} alt="oops"/>
                      <h2 class="main__title">{record.title}</h2>
                      <h1 class="main__subtittle">{record.description}</h1>
                      <h1 class="change_content"  contenteditable="false">{record.power} lc</h1>
                      <h1  class="change_content"  contenteditable="false">{record.speed} km</h1>
                      <div class="main__button">
                        <button  onClick={() => this.editRecord(record.id)} name="edit_button"  class="main__button_edit">Edit</button>
                        <button  onClick={() => this.deleteRecord(record.id)} class="main__button_remove">Remove</button>
                      </div>
                    </li>)
                }) }
              </ul>
            </div>
      </main>
    </section>
      <section id ="create__car" class="create__car">
          <div class="bild__car">
          <legend>Create car</legend>
              <p class="paragraph">
                <label for="name">Mark</label>
                <input onChange={this.handleChange} value={this.state.title} name="title" type="text" class="title_input" id="title_input" placeholder="Some text..." />
              </p>
              <p  class="paragraph">
                  <label for="name">Description</label>
                  <input onChange={this.handleChange} value={this.state.description} name="description" type="text" id="description_input"
                  class="description_input" />
                </p>
              <p  class="paragraph">
                <label for="price">Power</label>
                <input onChange={this.handleChange} value={this.state.power} name="power" class="power__input" type="text" id="power__input" />
              </p>
              <p class="paragraph">
                  <label for="price">Max speed</label>
                  <input onChange={this.handleChange} value={this.state.speed} name="speed" class="max-speed_input" type="text" id="max-speed_input" />
                </p>
                
                {this.state.update === true ? <button class="create__sumnit" onClick={this.updateRecord}>update</button> :
                <button  onClick={() => {this.createRecord(); this.clearInputs(); }} id="create__sumnit" class="create__sumnit" type="submit">Save</button>}
          </div>
      </section>
      <script type="module" src="./index.js"></script>
    </body>
    );
  }
}

export default App;