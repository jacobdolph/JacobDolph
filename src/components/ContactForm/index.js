import React, { Component } from 'react'
import axios from 'axios'
class ContactForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    };

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {

        return (


            <div className="row" >
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" className="validate" />
                            <label for="name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="text" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" />
                            <label for="message">Message</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;