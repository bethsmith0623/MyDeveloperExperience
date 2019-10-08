import React, {Component} from 'react';
import './ContactPage.css';
const WufooForm = require('react-wufoo-embed');

class ContactPage extends Component {
	render() {
		return(
			<div className="ContactPage">
        <WufooForm userName="bethsmith0623" formHash="zus8zc60t0btw3" />

    	</div>
		);
	};
};

export default ContactPage;