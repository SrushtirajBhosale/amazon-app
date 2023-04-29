import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css';
import { useStateValue } from "./StateProvider";
import Order from './Order';
import { onSnapshot, orderBy, query, collection, doc, getDoc } from 'firebase/firestore';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        // const ref = getDoc(collection(db, 'users', user?.uid, 'orders'))
        const orderedOrders = query(collection(db, 'users', user?.uid, 'orders'), orderBy('created', 'desc'))
        onSnapshot(orderedOrders, snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })

        // Firebase v8.x code:
        // db
        // .collection('users')
        // .doc(user?.uid)
        // .collection('orders')
        // .orderBy('created', 'desc')
        // .onSnapshot(snapshot => (
        //     setOrders(snapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data()
        //     })))
        // ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div> 
        </div>
    )
}

export default Orders;