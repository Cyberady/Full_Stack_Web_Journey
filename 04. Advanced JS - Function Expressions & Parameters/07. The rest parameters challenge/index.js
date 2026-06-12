/*
  challenge:
  1. Add parameters
  2. update the html template where you 
     see ** NAME **.
  3. Return HTML template for each label.

  <div class="label-card">
    <p> Dear ** NAME **</p>
    <p> ${text} </p>
    <p> Best wishes,</p>
    <p>${sender}</p>
  </div>
  */
function getLabelsHtml(text, sender, ...staffObjs) {
  return staffObjs.map(
    (staffObjs) =>
      `
      <div class="label-card">
        <p> Dear ${staffObjs.name}</p>
        <p> ${text} </p>
        <p> Best wishes,</p>
        <p>${sender}</p>
      </div>
    `
  ).join('')
}

const text = "Thank you for all your hardwork throughout the year! 🙏🎁"
const sender = "Aditya"

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Sally" },
  { name: "John" },
  { name: "Emily" },
  { name: "Michael" },
)
