function openModal(img,title,desc){
  document.getElementById("modal").style.display="flex";
  modalImg.src = img;
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}
