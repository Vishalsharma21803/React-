import React from 'react';
import './CenteredTable.css'; // Import the CSS file for styling

const CenteredTable = () => {
  return (
    <div className="table-container">
        <p id="details"><strong>Details</strong></p>
      <table className="centered-table">
        
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          </thead>
        <tbody>
          <tr>
            <td>Infosis</td>
            <td>Vishal Sharma</td>
            <td>India</td>
          </tr>
          <tr>
            <td>L and T</td>
            <td>Harshit sharma</td>
            <td>japan</td>
          </tr>
        </tbody>
      </table>

      <p>React js</p>
      <ul>
        <li>React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js</li>
      </ul>
      <p>ReactDOM</p>
      <ul>
        <li>It is used to render a React element into a DOM node. The ReactDOM. render function is usually called once in a React application, in the root JavaScript file. In the above code, the render method in the App component returns a React element (the h1 element)</li>
      </ul>
    </div>
  );
};

export default CenteredTable;