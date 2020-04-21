import React from 'react'

function ContactForm() {

    return (


        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                        <label for="disabled">Disabled</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ContactForm;