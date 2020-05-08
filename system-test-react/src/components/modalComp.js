import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FormComp from './formComponent';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class ModalWithUserInputs extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        "modalIsOpen": this.props.isOpen,
      }
    }
    componentWillReceiveProps(nextProps) {
            this.setState({
                      modalIsOpen: nextProps.isModalOpen
                    });
              }
    openModal=()=> {
      this.setState({modalIsOpen:true})
    }
    closeModal=()=> {
      this.setState({modalIsOpen:false})
    }
    closeWindow = () =>{
      window.close()
    }
    render(){
      if (this.props.isOpen){
      return(


            <div className = "style-modal">
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div>  
                    <FormComp existingData = {this.props.existingData}/></div>
                <br/>
        
        
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onClick={this.closeModal}>Close</button>
                </div>
        
              </Modal>
            </div>
        

      )
      }
      else{
          return (
              <div></div>
          );

      }
    }
}
    export default ModalWithUserInputs
  