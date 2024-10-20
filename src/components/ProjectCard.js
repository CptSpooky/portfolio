import React, { Component } from 'react';
import {  MDBAnimation, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCol, MDBCardBody, MDBCard, MDBCardTitle, MDBCardText, MDBIcon, MDBBtn, MDBView, MDBMask, MDBModal } from 'mdbreact';

class ProjectCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal14: false,
      id: 0
    }
  }

  toggle = (nr, item) => () => {
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
          <MDBAnimation type="fadeInRight" duration="1.2s" key={item.id + item.title}>
            <div key={item.id} className="projectCard z-depth-1" onClick={this.toggle(14, item)}>
              <MDBView hover zoom className="overlay rounded z-depth-1" waves>
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="purple-strong projectText">
                  <p className="white-text">{item.title}</p>
                </MDBMask>
              </MDBView>
            </div>
          </MDBAnimation>
        ))
        }

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered size="lg" >
          <MDBCard toggle={this.toggle(14)}>
            
            <MDBCarousel
              activeItem={1}
              length={this.props.projects[this.state.id].imagesShown}
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
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={this.props.projects[this.state.id].cimage2}
                      alt="Second slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={this.props.projects[this.state.id].cimage3}
                      alt="Third slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>

            <MDBBtn tag="a" size="sm" floating gradient="none" className="closeButton z-depth-1 closeBtnFloat" onClick={this.toggle(14)}>
              <MDBIcon icon="times" style={{ color: "#ccccccff"}} className="z-depth-2" />
            </MDBBtn>
            
            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle className='card-title'>
                <strong>{this.props.projects[this.state.id].title}</strong>
              </MDBCardTitle>

              <p className='font-weight-bold blue-text'>{this.props.projects[this.state.id].role}</p>

              <MDBCardText>
                {this.props.projects[this.state.id].description}
                <div className={this.props.projects[this.state.id].ux=="" ? "invisible d-none" : "visible uxProj"}><strong>For a more in depth UX process visit <a href={this.props.projects[this.state.id].ux} target="blank">this link</a>.</strong></div>
              </MDBCardText>

              <MDBCol md='12' className='d-flex justify-content-center'>

                <a href={this.props.projects[this.state.id].deployed} target="blank" className={this.props.projects[this.state.id].deployed=="" ? "invisible d-none":"visible"}>
                  <MDBBtn rounded floating color='fb'>
                    <MDBIcon size='lg' icon='laptop'></MDBIcon>
                  </MDBBtn>
                </a>
              
                <a href={this.props.projects[this.state.id].github} target="blank" className={this.props.projects[this.state.id].github=="" ? "invisible d-none":"visible"}>
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
