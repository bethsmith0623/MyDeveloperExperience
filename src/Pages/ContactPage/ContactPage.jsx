import React, {Component} from 'react';
import styles from './ContactPage.module.css';

class ContactPage extends Component {
	render() {
		return(
			<div>
				<div id="wufoo-zus8zc60t0btw3"> Fill out my 
					<a href="https://bethsmith0623.wufoo.com/forms/zus8zc60t0btw3">online form</a>. 
				</div> 
				<script type="text/javascript"> 
					var zus8zc60t0btw3; 
					(function(d, t) { 
						var s = d.createElement(t), 
						options = { 
							'userName':'bethsmith0623', 
							'formHash':'zus8zc60t0btw3', 
							'autoResize':true, 
							'height':'577', 
							'async':true, 
							'host':'wufoo.com', 
							'header':'show', 
							'ssl':true 
						}; 
						s.src = ('https:' == d.location.protocol ?
							'https://':'http://') + 
							'secure.wufoo.com/scripts/embed/form.js'; 
						s.onload = s.onreadystatechange = function() { 
							var rs = this.readyState; if (rs) 
								if (rs != 'complete') if (rs != 'loaded') return; 
								try { zus8zc60t0btw3 = new WufooForm(); 
								zus8zc60t0btw3.initialize(options); 
								zus8zc60t0btw3.display(); 
							} catch (e) { 
							} 
						}; 
						var scr = d.getElementsByTagName(t)[0], 
							par = scr.parentNode; 
						par.insertBefore(s, scr); 
					})
					(document, 'script'); 
				</script>	
			</div>
		);
	};
};

export default ContactPage;