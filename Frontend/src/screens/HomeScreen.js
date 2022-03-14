import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productAction'


export const HomeScreen = () => {
const dispatch = useDispatch()
const params = useParams();

const keyword = params.keyword;

const pageNumber = params.pageNumber || 1

const productList = useSelector(state => state.productList)
const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber)) 

},[dispatch, keyword, pageNumber])


  return (
    <>
        <h1>Latest products</h1>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
        <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      }
        
    </>
  )
}
