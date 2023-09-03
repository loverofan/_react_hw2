import { useState, useEffect } from 'react'

import Products from '../components/Products';
import Carts from '../components/Carts';
import CheckOut from '../components/CheckOut';
import UserOrder from '../components/UserOrder';


const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
]

function App() {
  const [drinks] = useState(data);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [order, setOrder] = useState({});
  const [description, setDescription] = useState('');

  const addToCart = (drink) => {

    const currentItemIndex = cart.find((item) => item.name === drink.name);

    if (currentItemIndex) {
      console.log('add qty');
      const newCart = cart.map((item) => {
        return item.name === drink.name 
          ? {...item, 
            quantity: item.quantity + 1,
            subtotal: item.subtotal + item.price} 
          : item
      })
      setCart(newCart);
    } else {
      setCart([...cart, {
        ...drink,
        id: new Date().getTime(),
        quantity: 1,
        subtotal: drink.price
      }])
      
    }
  }

  const updateCart = (item, value) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value)
        }
      }
      return cartItem

    })
    setCart(newCart)
  }

  const createOrder = () => {
    setOrder({
      id: new Date().getTime(),
      cart,
      description,
      sum
    })

    console.log(order)
    setCart([])
    setDescription('')
  }

  useEffect(() => {
    const total = cart.reduce((pre, next) => {
      return pre + next.subtotal
    }, 0)
    setSum(total)
  }, [cart])

  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-4">
          <Products drinks={drinks} onClick={addToCart} />
        </div>
        <div className="col-md-8">
          <Carts cart={cart}
                 setCart={setCart}
                 updateCart={updateCart}
          />
          <CheckOut cart={cart}
                    createOrder={createOrder}
                    sum={sum}
                    setDescription={setDescription}
          />
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-8">
          <UserOrder order={order} />
        </div>
      </div>
    </div>
  )
}


export default App
