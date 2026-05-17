import React from 'react'

const WelcomeCard = (props) => {
  return (
    <div>
      <h2>Welcome back, {props.businessName}!</h2>
      <p>Here is your business overview for today.</p>
    </div>
  )
}

export default WelcomeCard