import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return (
<Grid
  templateAreas={{
    base: `"nav" "main"`, // mobile <768px
    lg: `"nav nav" "aside main"`, // desktop >1025px
  }}
>
  <GridItem area="nav">
    <NavBar/>
  </GridItem>
  <Show above="lg">
    <GridItem area="aside" >
      <GenreList />
    </GridItem>
  </Show>
  <GridItem area="main" >
    <GameGrid />
  </GridItem>
</Grid>
  )
}

export default App
