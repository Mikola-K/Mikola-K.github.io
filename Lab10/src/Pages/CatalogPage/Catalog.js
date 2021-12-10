import React from 'react';
import Header from '../../Components/HomeComponent/Header/header'
import Footer from '../../Components/HomeComponent/Footer/Footer'
import MainCatalog from '../../Components/CatalogCompotents/Body/MainCatalog'

function Catalog() {
  return (
    <div className="Catalog">
     <Header />
     <MainCatalog />
     <Footer />
    </div>
  );
}

export default Catalog;