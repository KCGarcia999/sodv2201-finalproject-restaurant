import { useState, useEffect } from 'react'

function OrderMenu(){
    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState([
        {id: 1, name: "Test", category: "Starter", restrictions: "N/A", price: 0},
        {id: 2, name: "Test2", category: "Starter", restrictions: "N/A", price: 0},
        {id: 3, name: "Broccoli Tempura (6 pc)", category: "Starter", restrictions: "Vegan", price: 4.99},
    ]);

    return(
    <>
        <div className="menu">
            <h2>Menu</h2>
            <div className="searchandfilter">
                <label htmlFor="search">Search for an item... </label><input type="text" id="search"/>
                <label htmlFor="filter">Filter by... </label>
                <select className="filter" id="filter" value={filter} onChange={(e) => {
                    setFilter(e.target.value)
                    console.log(e.target.value)
                    }}>
                    <option value="">Select an option</option>
                    <option value="category">Category</option>
                    <option value="restrictions">Diet Restrictions</option>
                    <option value="pricelohi">Price (Low to High)</option>
                </select>
                
                <label htmlFor="restrict">Select a dietary restriction</label>
                <select id="restrict">
                    <option value="">None</option>
                    <option value="vegan">Vegan</option>
                </select>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Restrictions</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) =>(
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.restrictions}</td>
                                <td>${product.price}</td>
                                <td><button>Add to Order</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )   
}

export default OrderMenu