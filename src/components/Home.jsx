import React from 'react'

const Home = () => {
  return (
    <div>
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <h1>Welcome to My Website</h1>
    </header>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien id libero tempor ultricies.
        </p>

        <h2>Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Home