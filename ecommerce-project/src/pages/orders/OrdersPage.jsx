import { Header } from '../../components/Header';
import './OrdersPage.css';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react'
import { OrderHeader } from './OrderHeader';
import { OrderDetails } from './OrderDetails';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    }

    fetchProductData();
  }, [])


  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">

                <OrderHeader order={order} />

                <OrderDetails order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}