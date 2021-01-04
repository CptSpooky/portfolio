import React, { Component } from 'react';
import {  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCol, MDBCardBody, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon, MDBBtn, MDBView, MDBMask, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';



// <MDBModalHeader toggle={this.toggle(14)}>{this.props.projects[this.state.id].title}</MDBModalHeader>
// <MDBModalBody>
// {this.props.projects[this.state.id].description}
// </MDBModalBody>
// <MDBModalFooter>
//   <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
//   <MDBBtn color="primary">Save changes</MDBBtn>
// </MDBModalFooter>


// <MDBCardImage
//   hover
//   overlay='white-light'
//   className='card-img-top'
//   src={this.props.projects[this.state.id].image}
//   alt='man'
// />


class ProjectCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal14: false,
      id: 0
    }
  }

  toggle = (nr, item) => () => {
    console.log(item);
    let modalNumber = 'modal' + nr

    if (item != null) {
      this.setState({
        [modalNumber]: !this.state[modalNumber],
        id: item.id
      });
    }  else {
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
    }
  }
  render() {
    return (
      <>

        {this.props.projects.map(item => (
          <div key={item.id} className="projectCard" onClick={this.toggle(14, item)}>
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src={item.image}
                alt=""
                className="img-fluid"
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
          </div>
        ))
        }

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered size="lg" >
          <MDBCard toggle={this.toggle(14)}>
            
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={false}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={this.props.projects[this.state.id].cimage1}
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={this.props.projects[this.state.id].cimage2}
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={this.props.projects[this.state.id].cimage3}
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>

            <MDBBtn tag="a" size="sm" floating gradient="none" className="closeButton z-depth-1" onClick={this.toggle(14)}>
              <MDBIcon icon="times" />
            </MDBBtn>
            
            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>{this.props.projects[this.state.id].title}</strong>
              </MDBCardTitle>

              <p className='font-weight-bold blue-text'>Web development</p>

              <MDBCardText>
              {this.props.projects[this.state.id].description}
              </MDBCardText>

              <MDBCol md='12' className='d-flex justify-content-center'>
                <a href={this.props.projects[this.state.id].deployed} target="blank">
                  <MDBBtn rounded floating color='fb'>
                    <MDBIcon size='lg' icon='laptop'></MDBIcon>
                  </MDBBtn>
                </a>
                
                <a href={this.props.projects[this.state.id].github} target="blank">
                  <MDBBtn rounded floating color='tw'>
                    <MDBIcon size='lg' fab icon='github'></MDBIcon>
                  </MDBBtn>
                </a>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBModal>
      
      </>
    )
  }
}

export default ProjectCard;
