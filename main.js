  //Notification
let notification = document.querySelector('.noti-span');
//Mark all as read
let mark = document.querySelector(".mark");
mark.addEventListener("click", removeActive);
function removeActive() {
    let noti = document.querySelectorAll('.notify');
    noti.forEach(element => {
        element.classList.remove("active");
        notification.innerHTML = `0`;
    });
  }
// Individual Read

