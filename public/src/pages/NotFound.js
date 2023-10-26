import React from 'react'

const NotFound = () => {
  return (

      <div className='mainContent notFound' style={{paddingTop: 50, flexDirection: 'column'}}>
        <div style={{marginTop: 60}}/>

      <div className='WelcomeText' style={{fontWeight: 750, fontSize: '16vh'}} >404</div>
      <div className='ContactText' >Not Found</div>
        <div style={{marginTop: 40}}/>
      
      <div className='ContactText ' > Something went wrong</div>

      <a href='/' className='ContactText hoverPink ' style={{textDecoration: 'underline', paddingLeft: 10 }} >
        <div className='welcomeText '>Go back to Home</div>
      </a>

      </div>

  )
}

export default NotFound