import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

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
    <GridItem area="aside" bg="gold">
      Aside
    </GridItem>
  </Show>
  <GridItem area="main" bg="green">
    Main
  </GridItem>
</Grid>
  )
}

export default App
