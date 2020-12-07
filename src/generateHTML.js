const Employee = require("../lib/Employee");

const roleInfo = (employee) => {
  switch (employee.getRole()) {
    case "Manager":
      return `
        <li>
          <p>Office Number: ${employee.officeNumber}</p>
        </li>
      `;
    case "Engineer":
      return `
        <li>
          <a href="https://github.com/${employee.gitHub}">${employee.gitHub}</a>
        </li>
      `;
    case "Intern":
      return `
        <li>  
          <p>School: ${employee.school}</p>
        </li>
      `;
  }
}

function generateHTML(data) {
  let html = `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="../dist/style.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <div class="wrapper">
        <div class="container">
  `;

  for (i=0; i<data.length; i++) {
    html+= `
      <div class="employee">
        <div class="emp-head">
          <h2>${data[i].name}</h2>
          <h3>${data[i].getRole()}</h3>
        </div>
        <ul class="emp-info">
          <li>
            <p>ID: ${data[i].id}</p>
          </li>
          <li>
            <a href = "mailto: ${data[i].email}">${data[i].email}</a>
          </li>
          ${roleInfo(data[i])}
        </ul>
      </div>
    `;
  }

  html += `
    </div>  
    </div>
    </body>
    </html>
  `;

  return html;
}


module.exports = generateHTML;