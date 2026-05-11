let item = document.getElementById("select-items-for-cart").value;
let specialInstr = document.getElementById("specilty-instructions").value;

function emailSelf(event) {
  //just to be safe add variables 
 let item = Array.from(document.querySelectorAll('.in-cart')).map(item => item.value);

console.log(item); let specialInstr = document.getElementById("instructions").value;
  
  
  let catDougnnutVal = document.getElementById("cat-w-doughnut").value;
  let tinyWhale = document.getElementById("tiny-whale").value;
  let duck = document.getElementById("duck").value;
  let breakfast = document.getElementById("breakfast").value;
  
  //get the values
  console.log(item);
  console.log(specialInstr);
  
  //email it to me (fake emails)
  const to = "notreal@email.com";
  /*const bcc = can't think of anything else rn*/
  const subject = encodeURIComponent("I would like to purchase " + item);
  const body = encodeURIComponent("Hello A.W., this is a request to buy " + item + ", my special instructions are " + specialInstr + " what method of payment do you prefer?");
  let cleanBodyVal = decodeURIComponent(body);
  let cleanSubVal = decodeURIComponent(subject);
  
  // Build the mailto string
 const mailtoLink = `mailto:${to}?bcc=&subject=${subject}&body=${body}`;

  // Trigger the default email client
  window.location.href = mailtoLink;
}
/*
*^something like this here^
*href="mailto:galaxykiitty2010@gmail?subject=.com&body=Click target="_blank"*/
