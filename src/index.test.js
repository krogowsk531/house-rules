import Home from '../pages/index.js'
import { screen, render, waitFor } from '@testing-library/react'
import { getGames } from '../pages/api/apiCalls'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
// jest.mock('../pages/api/apiCalls')

describe('Homepage', () => {
  let props;
  beforeEach(() => {
    props = global.getStaticProps = {
      games: [
        {id:"1", name: "game1", image: "game1url"},
        {id:"2", name: "game2", image: "game2url"}
      ]
    }
        
  })
  it('render page fetch data', () => {
    render(
      <Home games={props.games}/>
    )

    expect(screen.getByText("House Rules")).toBeInTheDocument()
    expect(screen.getByTestId("game1")).toBeInTheDocument()
    expect(screen.getByTestId("game2")).toBeInTheDocument()
  })
  it('should have cards that are links', () => {
    render(
      <Home games={props.games}/>
    )
      
    screen.debug()
  })
})