import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addItemToCart, removeItemFromCart, increaseItemAmount, decreaseItemAmount } from '../../reducer/actions/usersAction'

 class users extends Component {
    render() {
        return (
            <div>
                <h3>Total Power: {this.props.users.users.reduce(function(a, b) { return a + b.power; }, 0)}</h3>
                <ul id="items_container"> {
                   this.props.users.users.map(record => {
                        return ( 
                        <li className="car__card__catalog" id={record.id}>
                          <h2 className="tile-section__title">{record.title}</h2>
                          <h1 className="tile-section__subtitle">{record.description}</h1>
                          <h1 >{record.power} lc</h1>
                          <h1 >{record.speed} km</h1>
                          <button className='btn-secondary' onClick={() => {this.props.increaseItemAmount(record.id)}}>Increase</button>
                          <button className='btn-secondary' onClick={() => {this.props.removeItemFromCart(record.id)}}>Delete cart</button>
                          <button className='btn-secondary' onClick={() => {this.props.decreaseItemAmount(record.id)}}>Decrease</button>
                        </li>)
                      })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {addItemToCart,removeItemFromCart, increaseItemAmount, decreaseItemAmount })(users)