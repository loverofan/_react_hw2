

function Carts({cart, setCart, updateCart}) {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope='col' width="60">操作</th>
                    <th scope="col">品項</th>
                    <th scope="col">描述</th>
                    <th scope='col' width="90">數量</th>
                    <th scope="col">單價</th>
                    <th scope="col">小計</th>
                </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th>
                                    <button type="button" className="btn btn-sm"
                                        onClick={() => {
                                            const newCart = cart.filter(
                                                (cartItem) => cartItem.id !== item.id
                                            )
                                            setCart(newCart);
                                        }}
                                    >X</button>
                                </th>
                                <th>{item.name}</th>
                                <th>{item.description}</th>
                                <th>
                                    <select className="form-select" value={item.quantity}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                updateCart(item, value);
                                            }}>
                                    {[...Array(10).keys()].map((item) => {
                                        return( <option key={item} value={item+1}>{item + 1}</option>)
                                    })}
                                    </select>
                                </th>
                                <th>{item.price}</th>
                                <th>{item.subtotal}</th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}



export default Carts