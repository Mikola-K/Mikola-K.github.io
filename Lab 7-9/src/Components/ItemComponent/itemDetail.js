
import React, { Component } from 'react';
import Header from '../HomeComponent/Header/header'
import Footer from '../HomeComponent/Footer/Footer'
import mustang from '../../Assets/Images/mustang.png'
import './itemDetail.css'

class ItemDetail extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            records: []
        };
      };
    componentWillMount() {
        this.itemViewMore(this.state.id);
    }
    itemViewMore = (id) => {
        id -= 1
        const axios = require('axios').default;
        axios.get('/api/get/' + id)
        .then((response) => {
          console.log("responde", response.data)
          this.setState({
            records: response.data,
          });
        })
      }
  render() {
    return (
      <div >
        <Header/>
        <div className="itms__selection">
          <img className="mustang__images__item" src={mustang} />
           <div>
              <li className="car__card__item">
                      <h2 className="item-section__title">{this.state.records.title}</h2>
                      <h1 className="item-section__subtitle ">{this.state.records.description}</h1>
                      <div className="items_description">
                        <h1 className="item__power" >Speed: {this.state.records.power} lc</h1>
                        <h1 className="item__speed" >Power: {this.state.records.speed} km</h1>
                      </div>
              </li>
          </div>
        </div>
        <Footer/>
      </div >
    )
}
}
export default ItemDetail
