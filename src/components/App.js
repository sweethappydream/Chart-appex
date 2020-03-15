import React from "react";
import Defaultpage from "./Defaultpage";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

// Contexts
import { SimulatorContextProvider } from "../contexts";

function App() {
  // Init default values

  return (
    <div>
      <SimulatorContextProvider>
        <Defaultpage />
      </SimulatorContextProvider>

      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Github" />
                <List link inverted>
                  <List.Item as="a" href="https://github.com/stockmlbot">
                    StockMLBoT
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  2020 made with React,NodeJS,Tensorflow and {"❤️"}!
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
