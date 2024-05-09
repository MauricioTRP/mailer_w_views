console.log("Contact form")
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const form = document.getElementById("contact")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = e.target[0].value
  const message = e.target[1].value

  const body = JSON.stringify({
    "subject": "Contacto 🦖",
    "from": `Formulario Contacto 👁️👁️ ${email}<contacto@gmail.com>`,
    "to": "devmaumus@gmail.com",
    "text": message
  })

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow"
  };

  fetch("http://localhost/mail", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})


