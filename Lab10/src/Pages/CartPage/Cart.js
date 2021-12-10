import Header from '../../Components/HomeComponent/Header/header'
import Footer from '../../Components/HomeComponent/Footer/Footer'
import React from 'react';
import Users from '../../Components/CartComponents/MainCart';
function Cart() {
  return (
    <div className="Cart">
     <Header />
     <Users/>
     <Footer />
    </div>
  );
}
export default Cart;