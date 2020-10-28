import React from 'react'

class Page extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.boardgameatlas.com/api/search?order_by=popularity&client_id=')
    const json = await res.json()
    console.log(json)
    return { stars: json.games}
  }

  render() {
    return(
      <div>Next stars: </div>  
    ) 
  }
}

export default Page
