import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Segment, Grid, Dropdown, List } from 'semantic-ui-react';


const ImageExampleFluid = () => (
    <Image src='http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/wod-three-peaks-image.png' fluid style={{ marginTop: '-5px'}} />
)

export default ImageExampleFluid

class TopMenu extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <div style={{backgroundColor: "black"}}>
        <Menu borderless style={{
          backgroundColor: 'black', paddingBottom: '25px', paddingTop: '10px'}}>

          <Container>

            <Menu.Item style={{ color: 'white', fontSize: '1.2em'}}>Home</Menu.Item>
            <Menu.Item style={{ color: 'white', fontSize: '1.2em'}}>Mission</Menu.Item>


            <Dropdown item text="Products & Services" style={{ color: 'white', fontSize: '1.2em'}}>
            </Dropdown>

            <Dropdown item text="About Us" style={{ color: 'white', fontSize: '1.2em'}}>
            </Dropdown>
            <Menu.Item style={{ color: 'white', fontSize: '1.2em'}}>Contact</Menu.Item>

          </Container>


       </Menu>
        </div>
  )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
    <Header as="h1" style={{ marginTop: '-40px'}}>FullWidthImage</Header>
  )
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div style={{backgroundColor: "black"}}>
        <Container className="footerBackground" style={{paddingTop: '20px'}}>
          <Grid style={{backgroundColor: "black"}}>
            <Grid.Row>
              <Grid.Column>
                <List style={{textAlign: "center", color: "grey", backgroundColor: "black"}}>
                  <List.Item>(c) 2017 Three Peaks</List.Item>
                  <List.Item>Photos taken by Aki Lily Photography.</List.Item>
                  <List.Item>Site created by ICS 314.</List.Item>
                </List>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
        </div>
  )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu />
        <ImageExampleFluid/>
        <Footer />
        </div>
  );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));