import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


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

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered >
          <MDBModalHeader toggle={this.toggle(14)}>{this.props.projects[this.state.id].title}</MDBModalHeader>
          <MDBModalBody>
          {this.props.projects[this.state.id].description}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      
      </>
    )
  }
}

export default ProjectCard;
