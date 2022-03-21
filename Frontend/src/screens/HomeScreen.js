import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productAction'


export const HomeScreen = () => {
const dispatch = useDispatch()
const params = useParams();

const keyword = params.keyword;

const pageNumber = params.pageNumber || 1

const productList = useSelector(state => state.productList)
const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber)) 

},[dispatch, keyword, pageNumber])


  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}

<h1>Electronics Accessories</h1>

            <Row>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message varient="#FC308B">{error}</Message>
              ) : (
                products && (
                  <>
                    {products
                    .filter((p) => p.category === "electronicsAccessories")
                      .map((electronics_accessories, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={3}>
                          <Product product={electronics_accessories} />
                        </Col>
                      ))}
                  </>
                )
              )}
            </Row>

      <h1>Home Appliances</h1>

            <Row>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message varient="#FC308B">{error}</Message>
              ) : (
                products && (
                  <>
                    {products
                      .filter((p) => p.category === "homeAppliances")
                      .map((home_appliance, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={3}>
                          <Product product={home_appliance} />
                        </Col>
                      ))}
                  </>
                )
              )}
            </Row>

      <h1>Latest Products</h1>
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}
