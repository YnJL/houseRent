// 모달창
function openModal(n){
	const modal = document.querySelector('.popup' + n);
	modal.classList.add('show');
	setTimeout(() => modal.classList.add('modal_evt'), 50);
	modal.onclick = (e) => {
	  if (e.target.classList.contains("popup_wrap")) {
		  closeModal(n);
	  }
	}
  }
  // 모달창 닫기
  function closeModal(n){
	const modal = document.querySelector('.popup' + n);
	modal.classList.remove('show');
	modal.classList.remove('modal_evt');
  }