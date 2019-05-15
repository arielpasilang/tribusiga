import React from "react"

const Contact = () => (
	<section
		id="contact"
		className="prefooter wow fadeInUp"
		data-wow-delay="300ms"
	>
		{/* change the image in style.css to the class .prefooter .container-fluid [approximately row 154] */}
		<div className="container-fluid">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h3>Contact Us</h3>
						<p>
							Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
							vestibulum. Cras mattis consectetur purus sit amet fermentum.
							Praesent commodo cursus magna, vel scelerisque nisl consectetur
							et. Praesent commodo cursus magna, vel scelerisque nisl
							consectetur et.
						</p>
						<div className="row">
							<div className="col-md-6">
								<input
									type="text"
									className="form-control"
									placeholder="Your Email Here..."
								/>
								<br />
								<button type="button" className="btn btn-danger">
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Contact
