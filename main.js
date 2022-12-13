  //Notification
let notification = document.querySelector('.noti-span');
//Mark all as read
let mark = document.querySelector(".mark");
let noti = document.querySelectorAll('.notify');
mark.addEventListener("click", removeActive);
function removeActive() {
    noti.forEach(element => {
        element.classList.remove("active");
        notification.innerHTML = `0`;
    });
  }
// Individual Read
let notspan = notification.innerHTML;
let chan = parseInt(notspan);
for (const i of noti) {
    i.addEventListener("click",()=>{
        if(i.classList[1]=='active'){
            i.classList.remove('active');       
            notification.innerHTML =--chan;
        }
    }); 
}
