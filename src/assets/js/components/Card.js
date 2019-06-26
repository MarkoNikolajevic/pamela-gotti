import React from 'react'
import ReactModal from 'react-modal'
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModel = this.handleCloseModel.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModel() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className='card'>
        <img className='card-img' src={this.props.card.image} alt={this.props.card.imgAlt} />
        <div className='card-text'>
          <h4 className='card-title'>{this.props.card.title}</h4>
          <p className='card-info'>
            {this.props.card.info}
            <ReactModal
              closeTimeoutMS={500}
              onRequestClose={() => this.toggleModal()}
              isOpen={this.state.showModal}
              contentLabel={this.props.card.title}
              className='modal'
              overlayClassName='overlay'
              ariaHideApp={false}
            >
              <button className='modal-btn' onClick={this.handleCloseModel}><i className="material-icons">close</i></button>
              <h3 className='modal-title'>{this.props.card.title}</h3>
              <img className='card-img modal-img' src={this.props.card.image} alt={this.props.card.imgAlt} />
              <p className='read-more-text'>
                {this.props.card.article}
              </p>
            </ReactModal>
          </p>
          <button className='modal-btn' id={this.props.card.id} onClick={this.handleOpenModal}><i className="material-icons">expand_more</i></button>
        </div>
      </div>
    )
  }
}

export default Card
