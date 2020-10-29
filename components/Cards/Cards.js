// import SingleCard from 'components/SingleCard/SingleCard.js'

import SingleCard from "../SingleCard/SingleCard"

const Cards = (props) => {

    const formattedCards = props.games.map((game) => {
    return <SingleCard
      image = {game.image}
      title = {game.name}
      id = {game.id}
      />
    })

return (
    <div>  
    Cards
    { formattedCards }
    </div>
)

}

export default Cards