import React from "react";
import {Link} from "gatsby";



export default () => {
    return (
<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
			<h1>404</h1>
			</div>
			<h2>Oops! Page Not Be Found</h2>
			<p>Sorry but the page you are looking for does not exist or is temporarily unavailable</p>
			<Link to="/">Back to homepage</Link>
		</div>
	</div>
  );
};
