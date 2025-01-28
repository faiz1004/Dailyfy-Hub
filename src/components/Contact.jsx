import React from 'react'

function Contact() {
  return (
    <>
    <div className=" overflow-hidden mt-2 bg-contact">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h5>Our Address</h5>
          <p>123 Main Street, Anytown, USA</p>
        </div>
        <div className="col-md-4 text-center">
          <h5>Call Us</h5>
          <p>(123) 456-7890</p>
        </div>
        <div className="col-md-4 text-center">
          <h5>Email Us</h5>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact