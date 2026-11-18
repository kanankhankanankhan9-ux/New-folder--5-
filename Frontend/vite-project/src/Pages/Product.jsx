import React, { useState } from 'react'

const Product = () => {
  const [showForm, setShowForm] = useState(false)
  const [price, setPrice] = useState("")
  const [name, setName] = useState("")
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "10" },
    { id: 2, name: "Product 2", price: "15" },
    { id: 3, name: "Product 3", price: "20" },
    { id: 4, name: "Product 4", price: "25" },
    { id: 5, name: "Product 5", price: "30" },
  ])

 const handleSubmit = () => {
  setProducts([...products, { id: Date.now(), name: name, price: price }])
  setName("")
  setPrice("")
  setShowForm(false)
}

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-900 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {showForm && (
        <div className="bg-white border rounded p-4 mb-6 grid grid-cols-3 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded px-3 py-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border rounded px-3 py-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      )}

      <table className="w-full bg-white border rounded text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-t">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Product