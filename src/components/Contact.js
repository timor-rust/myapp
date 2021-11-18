import React from "react";

const Contact = props => {
	console.log(props);
	console.log(props.history);
	setTimeout(() => {
		props.history.push('/about');
	}, 3000)

  return (
    <div>
      <div className="container">
			  <h4 className="center">Contact</h4>
			  <p>3...2...1... about</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Contact;
