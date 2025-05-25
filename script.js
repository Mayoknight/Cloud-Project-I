const generate =
document.getElementById('generate');

generate.addEventListener("click", function(){

    const fullname =
    document.getElementById('fullname').value;
    console.log('Nama Lengkap:', fullname);

    const gmail =
    document.getElementById('gmail').value;
    console.log('Email:', gmail);

    const phone_number =
    document.getElementById('phone_number').value;
    console.log('Number:', phone_number);

    const about =
    document.getElementById('about').value;
    console.log('About You:', about);

    const facebook =
    document.getElementById('facebook').value;
    console.log('Social Media:', facebook);

    const instagram =
    document.getElementById('instagram').value;
    console.log('Social Media:', instagram);

    const github =
    document.getElementById('github').value;
    console.log('Social Media:', github);

    const result = 
    document.getElementById("result");

     result.innerHTML = `
     
     <p><strong>Nama Lengkap:</strong> ${fullname}
     </p>

      <p><strong>Email:</strong> ${gmail}
      </p>

      <p><strong>Number:</strong> ${phone_number}
      </p>

      <p><strong>About You:</strong> ${about}
      </p>

      <p><strong>Social Media:</strong> ${facebook}
      </p>

      <p><strong>Social Media:</strong> ${instagram}
      </p>
      
      <p><strong>Social Media:</strong> ${github}
      </p>


     
     `;

    
     
});

function downloadPDF() {
    const fullname =
    document.getElementById("fullname").value;

    const gmail =
    document.getElementById("gmail").value;

    const phone_number =
    document.getElementById("phone_number").value;

    const about =
    document.getElementById("about").value;

    const facebook =
    document.getElementById("facebook").value;

    const instagram =
    document.getElementById("instagram").value;

    const github =
    document.getElementById("github").value;

    const content = `
     <h1>My Portofolio</h1>
      <p><strong>Fullname:</strong>${fullname}</p>
      <p><strong>Email:</strong>${gmail}</p>
      <p><strong>Phone Number:</strong>${phone_number}</p>
      <p><strong>About Me:</strong>${about}</p>
      <p><strong>Social Media:</strong></p>
      <ul>
        <li>Facebook: ${facebook}</li>
        <li>Instagram: ${instagram}</li>
        <li>Github: ${github}</li>
      </ul>
    `;

    const opt = {
      margin:       0.5,
      filename:     'portfolio.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  const element = document.createElement("div");
  element.innerHTML = content;
  document.body.appendChild(element);

  html2pdf().set(opt).from(element).save().then(() => {
      document.body.removeChild(element);
  });
}

