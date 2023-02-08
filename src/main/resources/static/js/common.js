// 모달창
function openModal(n){
	const modal = document.querySelector('.popup' + n);
	modal.classList.add('show');
	setTimeout(() => modal.classList.add('modal_evt'), 50);
	document.body.style.cssText = `
							  position: fixed; 
							  top: -${window.scrollY}px;
							  overflow-y: scroll;
							  width: 100%;`;
	
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
	const scrollY = document.body.style.top;
	document.body.style.cssText = "";
	window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  }