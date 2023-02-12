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

// 호실 선택 렌더링
function renderRoomNo(target){
	target.innerText = '';
	let rooms = [101,201,202,203,204,301,302,303,304,401,402,403];
	for(let i=0;i<rooms.length;i++){
		let opt = document.createElement("option");
		opt.value = rooms[i];
		opt.id=rooms[i];
		opt.innerText=rooms[i];
		target.appendChild(opt);
	}
}

// 이름 선택 렌더링
function renderNames(target, list){
	target.innerText = '';
	for(let i=0;i<list.length;i++){
		let opt = document.createElement("option");
		opt.value = list[i].name;
		opt.id=list[i].name;
		opt.innerText=list[i].name;
		target.appendChild(opt);
	}
}