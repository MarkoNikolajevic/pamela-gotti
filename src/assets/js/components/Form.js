import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <section id='contact'>
        <form
          action='#'
          method='POST'
          className='form'
        >
          <label htmlFor='name'>Nome</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholer='Scrivi il tuo nome'
            onChange={this.handleChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='_replyto'
            placeholer='Scrivi la tua email'
            onChange={this.handleChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <textarea
            id='email'
            rows='7'
            name='message'
            placeholer='Scrivi il tuo messaggio'
            onChange={this.handleChange}
            required
          >
          </textarea>
          <button type='submit' className='submit-btn'>Invia</button>
        </form>
      </section>
    )
  }
}

export default Form
