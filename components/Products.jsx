

function Products({drinks, onClick}) {
    return (
      <div className="list-group">
        {drinks.map((drink) => {
          return (
            <a href="#" className="list-group-item list-group-item-action" key={drink.id}
               onClick={(e) => {
                e.preventDefault();
                onClick(drink)
               }}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{drink.name}</h5>
              </div>
              <p className="mb-1">{drink.description}</p>
              {/* <p className="mb-1">單價: ${drink.price}元</p> */}

            </a>
          )
        })}
      </div>
    )
}


export default Products