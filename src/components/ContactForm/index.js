import React from 'react'

function ContactForm() {

    return (


        <div className="row">
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

export default ContactForm;