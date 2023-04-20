function toggleJobDescription(event) {
  var jobDescription =
    event.target.parentNode.querySelector(".job-description");
  if (jobDescription.style.display === "none") {
    jobDescription.style.display = "block";
    event.target.innerText = "\u25B4 view Less";
  } else {
    jobDescription.style.display = "none";
    event.target.innerText = "\u25BE View More";
  }
}

///////////////////////////////
function validateEmail(email) {
  // Hàm kiểm tra định dạng email
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function myFunction(event) {
  event.preventDefault();
  let emailInput = document.getElementById("email-input").value;
  let emailErrorMessage = document.getElementById("email-error-message");
  if (emailInput === "") {
    // thông báo lỗi nếu input rỗng
    emailErrorMessage.innerHTML = "Vui lòng nhập địa chỉ email";
  } else if (!validateEmail(emailInput)) {
    // thông báo lỗi nếu input không đúng
    emailErrorMessage.innerHTML = "Địa chỉ email không hợp lệ";
  } else {
    // Ẩn form  và hiển thị info
    let formContainer = document.getElementById("form-container");
    let infoContainer = document.getElementById("info-container");
    formContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
  }
}
