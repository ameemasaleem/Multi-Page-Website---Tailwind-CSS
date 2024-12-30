import React from 'react'

const Dresses = () => {

    const dressData = [
        {id : 1, name: 'Khadi', price: 12000, description: 'New Arrival', image: '/dress image 3.webp'},
        {id : 2, name: 'Sana Safinaz', price: 8000, description: 'Sporty Design', image: '/dress image 1.webp'},
        {id : 3, name: 'Nishat', price: 25000, description: 'Elegant timepiece', image: '/dress image 2.webp'},
        {id: 4, name: 'Edenrobe', price: 20000, description: 'Sporty and Stylish', image: '/dress image 4.webp'},
        {id: 5, name: 'Ethnic', price: 15000, description: 'Bold and rugged', image: '/dress image 5.webp'},
        {id: 6, name: 'Saya', price: 12000, description: 'Affordable and reliable', image: '/dress image 6.jpg'},

    ]
  return (
  
      <div className="dresses">
        {dressData.map((dress) => (
        <div key={dress.id} className="dress-card">
          <img src={dress.image} alt={dress.name} />
          <h3>{dress.name}</h3>
          <p>{dress.description}</p>
          <div className='price'>${dress.price}</div>
          <button className='btn'>Add to Cart</button>
        </div>))}
      </div>

      
  )
}

export default Dresses