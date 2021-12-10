import React, {Component} from 'react'
import mustang from '../../../../Assets/Images/mustang.png'
import '../body.css'

class TileSection extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            power: '',
            speed: '',
            records: []
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
    function showAll () {
           const ul = document.getElementById('items_container');
           const listItems = ul.getElementsByTagName('li');
           for (let i = 0; i <= listItems.length - 1; i++) {
               console.log (listItems[i]);
               listItems[i].className += "Hide"
           }
    }
    return (
          <div>
              <div className="tile-section">
                    <ul id="items_container"> {
                        this.state.records && this.state.records.map(record => {
                          return ( 
                          <li className="car__card" id="car__card" >
                            <img className="mustang__img" src={mustang} alt="oops"/>
                            <h2 className="tile-section__title">{record.title}</h2>
                            <h1 className="tile-section__subtitle">{record.description}</h1>
                            <h1 >{record.power} lc</h1>
                            <h1 >{record.speed} km</h1>
                          </li>)
                        })
                    }
                    </ul>
              </div>
              <button onClick={showAll} type="button" className="btn btn-secondary" >View more</button>
          </div>
    )
}
}
export default TileSection