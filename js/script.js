const refs = {
    popUpClose: document.querySelector(".js-close"),
    page: document.querySelector("body"),
    form: document.querySelector(".serch-form"),
    searchUser: document.querySelector(".js-search"),
    deleteUser: document.querySelector(".js-delete"),
    list: document.querySelector(".pict-list")
};

const popUpClose = () => refs.page.classList.remove('pop-up_active');





function popUpOpen(event) {
  event.preventDefault();
  const target = event.target;
  //console.log("event target: ", target); // посмотрите что тут
  if (target.nodeName !== "LI") return;
  refs.page.classList.add('pop-up_active');
}




refs.list.addEventListener('click', popUpOpen);
refs.popUpClose.addEventListener('click', popUpClose);