import React, { useState, useEffect } from 'react';
import RatingsandReviews from './ratings/RatingsandReviews.jsx';
import ProductDetail from './productDetail/ProductDetail.jsx';
import QA from './QA/index.jsx';
import MainRelatedFeature from './relatedItems/mainRelatedFeature.jsx';
import axios from 'axios';

const App = () => {
  const [allProductsData, setAllProductsData] = useState([])
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setAllProductsData(response.data[3])
        setProductId(response.data[3].id)
      })
      .catch(error => console.log(error))
  }, []);
  return (
    <>
      <div id='Title'>Atelier</div>
      <div id="ProductDetailMain" className='MainComponent'>
        {productId !== 0 &&
          <ProductDetail productId={productId} allProductsData={allProductsData} />
        }
      </div>
      <div id="MainRelatedFeatureMain" className='MainComponent'>
        <MainRelatedFeature productId={productId} allProductsData={allProductsData} />
      </div>
      <div id="QAMain" className='MainComponent'>
        {productId !== 0 &&
          <QA productId={productId} allProductsData={allProductsData} />
        }
      </div>
      <div id="RatingsandReviewsMain">
        {productId !== 0 &&
          <RatingsandReviews productId={productId} allProductsData={allProductsData} />
        }
      </div>
    </>
  )
}

export default App;