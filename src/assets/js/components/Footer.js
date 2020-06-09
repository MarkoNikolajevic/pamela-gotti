import React from 'react';
import markoNikolajevicLogo from '../../img/marko-nikolajevic-logo.svg';
import ReactModal from 'react-modal';
import Privacy from './Privacy';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
    const fab = document.querySelector('.fab-btn');
    fab.style.visibility = 'hidden';
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    const fab = document.querySelector('.fab-btn');
    fab.style.visibility = 'visible';
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer-content'>
          <p>&copy; 2019 - 2020 Dott.ssa Pamela Gotti</p>
          <p>Via di Donota, 28 34121 Trieste</p>
          <p>Martedì - Piazza Giovanni XXIII, 15 Udine, fr. Cussignacco</p>
          <p>345-1660590</p>
          <p>pamelagotti@libero.it</p>
          <p>www.pamelagotti.com</p>
          <p>P.IVA 01275270328</p>
          <ReactModal
            closeTimeoutMS={500}
            onRequestClose={() => this.toggleModal()}
            isOpen={this.state.showModal}
            contentLabel='Informativa Privacy'
            className='modal'
            overlayClassName='overlay'
            ariaHideApp={false}
          >
            <button
              className='modal-btn close-modal-fixed-btn'
              onClick={this.handleCloseModal}
            >
              <i className='material-icons'>close</i>
            </button>
            <Privacy />
          </ReactModal>
          <p className='privacy' onClick={this.handleOpenModal}>
            Informativa Privacy
          </p>
          <br />
          <p>
            creato da
            <a
              href='https://www.markonikolajevic.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='dev-logo'
                src={markoNikolajevicLogo}
                alt='Marko Nikolajevic logo'
              />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
