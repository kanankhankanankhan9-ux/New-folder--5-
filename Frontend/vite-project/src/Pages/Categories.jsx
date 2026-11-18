import React, { useState } from 'react'

const Categories = () => {
const [name, setName] = useState("")
const [showForm, setShowForm] = useState(false);

  const [categories, setCategories] = useState([
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 1" },
    { id: 3, name: "Category 1" },

  ])

  const handleSubmit = () => {
  setCategories([...categories, { id: Date.now(), name: name }])
  setName("")
  setShowForm(false)
}
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Categories
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {showForm && (
        <div className="flex gap-3 mb-6">
          <input type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            type='submit'
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      )}
      <table className="w-full border-collapse bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 border-b">#</th>
            <th className="text-left px-4 py-3 border-b">Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b">{index + 1}</td>
              <td className="px-4 py-3 border-b">{category.name}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Categories