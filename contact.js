// alert("Hello world");


function submit() {
  contactForm = document.getElementById("contact-form");
  fullname = document.getElementById("fullname");
  email = document.getElementById("email");
  phone = document.getElementById("phonenum")
  dryramen = document.getElementById("dry");
  normalramen = document.getElementById("norm");
  news = document.getElementById("newsletter");
  error = document.getElementById("error");

  if (fullname.value.length < 5) {
    error.innerHTML = "Fullname must be at least 5 characters";
  }
  else if (!email.value.endsWith("@yahoo.com")) {
    error.innerHTML = "Must use yahoo email."
  }
  else if (isNaN(phone.value)) {
    error.innerHTML = "Phone number must be all digits.";
  }
  else if (!(dryramen.checked || normalramen.checked)) {
    error.innerHTML = "Must pick one type of ramen."
  }
  else if (!news.checked) {
    error.innerHTML = "You Must Subscribe to our free newsletter.";
  }
  else {
    error.innerHTML = "";
    alert("We'll send you a feedback via email, Thankyou!");
    contactForm.submit();
  }


}