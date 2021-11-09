
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import mustang from '../../../Assets/Images/mustang.png'
import './MainCatalog.css'

class MainCatalog extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            power: '',
            speed: '',
            records: [],
            find__input: '',
            reso: []
        };
        this.sortPowerByDsc = this.sortPowerByDsc.bind(this);
        this.sortPowerByAsc = this.sortPowerByAsc.bind(this);
        this.sortSpeedAsc = this.sortSpeedAsc.bind(this);
        this.sortSpeedByDsc = this.sortSpeedByDsc.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
      };
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
                  this.setState({
                      records: response.data
                  });
              })
              .catch((error) => console.log("error", error));
      };
      sortPowerByAsc() {
        this.setState(prevState => {
          return this.state.records.sort((a, b) => (a.power - b.power))
      });
      }
      sortPowerByDsc() {
        this.setState(prevState => {
          return this.state.records.sort((a, b) => (b.power - a.power))
      });
      }
      sortSpeedByDsc() {
        this.setState(prevState => {
          return this.state.records.sort((a, b) => (b.speed - a.speed))
      });
      }
      sortSpeedAsc() {
        this.setState(prevState => {
          return this.state.records.sort((a, b) => (a.speed - b.speed))
      });
      }
      searchByTitle  = () => {
        this.setState ({
          records: this.state.records.filter((value) => {
            return value.title.toLowerCase().includes(this.state.find__input.toLowerCase())
            })
        })
      }

  render() { 
    return (
      <div>
        <div className="heades-section">
            <div className="dropdown__buttons" >
              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Speed
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><button class="dropdown-item" onClick={this.sortSpeedByDsc}>Desc</button></li>
                      <li><button class="dropdown-item" onClick = {this.sortSpeedAsc}>Lovest</button></li>
                  </ul>
              </div>
              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Power
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><button class="dropdown-item" onClick={this.sortPowerByDsc} >Desc</button></li>
                      <li><button class="dropdown-item" onClick={this.sortPowerByAsc}>Lovest</button></li>
                  </ul>
              </div>
            </div>
            <div className="input-group mb-3">
              <input onChange={this.handleChange} value={this.state.find__input} name="find__input"  id="find__input" class="form-control input_text" type="text" placeholder="Type something..."/>
              <button onClick={(e) => this.searchByTitle(e)}  id="header__button__serch" class="btn btn-secondary header__button__serch">Search</button>
            </div>
        </div  >
            <div className="tile-section">
                  <ul id="items_container"> {
                      this.state.records && this.state.records.map(record => {
                        return ( 
                        <li className="car__card__catalog" id={record.id}>
                          <img className="mustang__img" src={mustang} alt="oops"/>
                          <h2 className="tile-section__title">{record.title}</h2>
                          <h1 className="tile-section__subtitle">{record.description}</h1>
                          <h1 >{record.power} lc</h1>
                          <h1 >{record.speed} km</h1>
                          <div className="main__button">
                            <Link to={`/catalog/${record.id}`}>
                            <button className="btn btn-secondary main__button_edit">View more</button>
                            </Link>
                          </div>
                        </li>)
                      })
                  }
                  </ul>
            </div>
      </div>
    )
}
}
export default MainCatalog


/*
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import mustang from '../../../Assets/Images/mustang.png'
import './MainCatalog.css'

class MainCatalog extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            power: '',
            speed: '',
            records: [],
            find__input: '',
        };
      };
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
                  this.setState({
                      records: response.data
                  });
              })
              .catch((error) => console.log("error", error));
      };
  render() {
    return (
      
          <div className="tile-section">
                <ul id="items_container"> {
                    this.state.records && this.state.records.map(record => {
                      return ( 
                      <li className="car__card__catalog" id={record.id}>
                        <img className="mustang__img" src={mustang} alt="oops"/>
                        <h2 className="tile-section__title">{record.title}</h2>
                        <h1 className="tile-section__subtitle">{record.description}</h1>
                        <h1 >{record.power} lc</h1>
                        <h1 >{record.speed} km</h1>
                        <div className="main__button">
                          <Link to={`/catalog/${record.id}`}>
                          <button className="btn btn-secondary main__button_edit">View more</button>
                          </Link>
                        </div>
                      </li>)
                    })
                }
                </ul>
          </div>
    )
}
}
export default MainCatalog

*/