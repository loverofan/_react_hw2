


function CheckOut({cart, createOrder, sum, setDescription}) {
    return(
        <div>
            {
                cart.length === 0 
                ? <div className="alert alert-primary text-center" role="alert"
                       style={{height: '100%', width: '100%'}}>請選擇商品</div> 
                : ( <>
                        <div className="text-end mb-3"> 
                            <h5 style={{textAlign: "right", padding: "0.75rem"}}>總計: <span>${sum}</span></h5>
                        </div>
                        <textarea 
                            className="form-control mb-3" rows="3" placeholder="備註"
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}>
                        </textarea>
                        <button 
                            className="btn btn-primary" 
                            onClick={(e) => {
                                e.preventDefault();
                                createOrder()
                            }}> 送出訂單
                        </button>


                    </>
                )

            }
        </div>
    )
}

export default CheckOut