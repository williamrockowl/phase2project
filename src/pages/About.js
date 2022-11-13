import "../styles/about.css";
import React from "react";

function About() {
  return ( 
    <div className ="About">
      
      <h2>Project Goals</h2>
        <div id = "list">
        <ul>
          <li>1. To build a React single-page application (from scratch) </li>
          <li>2. Test knowledge of components, props, and state management</li>
          <li>3. Implement client-side routing</li>
          <li>4. Use data from an API</li>
        </ul>
      <h2>Project Requirements</h2>
        <ul>
          <li>1. Make a single page application (using one index.html file)</li>
          <li>2. The application must have more than or equal to 5 components</li>
          <li>3. The application must have at least 3 client-side routes</li>
          <li>4. Use a json-server to create an API for your backend</li>
          <li>5. Have some styling for the application</li>
        </ul>
        </div>
    </div>
     );

     
}






export default About;
