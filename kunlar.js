const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elButton = document.querySelector("#button");
const elResult = document.querySelector(".result");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (+elInput.value) {
    case 0:
      elResult.textContent = "Bu qiymat kiritilmaydi!";
      elInput.style.cssText = "border: 1px solid black";
      break;
    case 1:
      elResult.textContent = "Dushanba";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    case 2:
      elResult.textContent = "Seshanba";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    case 3:
      elResult.textContent = "Chorshanba";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    case 4:
      elResult.textContent = "Payshanba";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    case 5:
      elResult.textContent = "Juma";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    case 6:
      elResult.textContent = "Shanba";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    case 7:
      elResult.textContent = "Yakshanba";
      elInput.style.cssText = "border: 1px solid springgreen";
      break;
    default:
      elResult.textContent = "Qiymat Notog`ri kiritildi!";
      elInput.style.cssText = "border: 1px solid black";
      break;
  }
  elForm.reset();
});
