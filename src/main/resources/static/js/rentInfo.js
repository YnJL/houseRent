let infoList = {};

async function getRentInfo(param){
	let body = {};
	let by = '';
	if(parseInt(param)==param) {
		by = 'byRoom';
		body.roomNo = param;
	} else {
		by = 'byName'
		body.name = param;
	}
	let r1 = await fetch("/roomInfo", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let r2 = await fetch("/"+by, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body)
	});
	res1 = await r1.json();
	res2 = await r2.json();
	renderRoomNo(form_roomNo);
	renderNames(form_name, res1.roomInfo);
	document.getElementById(param).selected = true;
	renderRentInfo(res2.rentInfo)
}
function renderRentInfo(list){
	let rentInfoTable = document.querySelector("#rentInfoTable");
	rentInfoTable.innerText = '';
	let tot = 0, wtot = 0, btot = 0;
	for (let i = 0; i < list.length; i++){
		infoList[list[i].idx] = list[i];
		let row = `<li onclick="openModifyModal(${list[i].idx})">`;
		row += `<p class="clickable">${list[i].inName}</p>`;
		row += `<p class="clickable">${list[i].inDate}</p>`;
		row += `<p class="clickable">${list[i].inValue}</p>`;
		row += `<p class="clickable">${list[i].inType}</p>`;
		row += '</li>';
		rentInfoTable.insertAdjacentHTML("beforeend",row);
		if(list[i].inType=="월세") {
			wtot+=list[i].inValue*1;
		}
		if(list[i].inType=="보증금") {
			btot+=list[i].inValue*1;
		}
		tot+=list[i].inValue*1;
	}
	
	let row = '<li></li>';
	rentInfoTable.insertAdjacentHTML("beforeend",row);
	if(tot>=10000*10000){
		tot=Math.round(tot/1000/10000)/10+"억원";
	} else if(tot>=10000) {
		tot=Math.round(tot/1000)/10+"만원";
	} else {
		tot+="원";
	}
	if(wtot>=10000*10000){
		wtot=Math.round(wtot/1000/10000)/10+"억원";
	} else if(wtot>=10000) {
		wtot=Math.round(wtot/1000)/10+"만원";
	} else {
		wtot+="원";
	}
	if(btot>=10000*10000){
		btot=Math.round(btot/1000/10000)/10+"억원";
	} else if(tot>=10000) {
		btot=Math.round(btot/1000)/10+"만원";
	} else {
		btot+="원";
	}
	row = `
			<li>
				<p>통계</p>
				<p>총 입금액 : ${tot}</p>
				<p>보증금 : ${btot}</p>
				<p>월세 : ${wtot}</p>
			</li>
			`;
	rentInfoTable.insertAdjacentHTML("beforeend",row);
}
function openModifyModal(idx){
	console.log(idx);
	// let opts = document.querySelector("#form_roonNo").options;
	// for(let i=0;i<opts.length;i++){
	// 	if(opts[i].value==roomNo) opts[i].selected=true;
	// }
	// document.getElementById(roomNo).selected = true;
	// form_name.value = infoList[roomNo].name;
	// form_phone.value = infoList[roomNo].phone;
	// form_esName.value = infoList[roomNo].esName;
	// form_esPhone.value = infoList[roomNo].phone;
	// form_signDate.value = infoList[roomNo].signDate;
	// form_inDate.value = infoList[roomNo].inDate;
	// form_endDate.value = infoList[roomNo].endDate;
	// form_outDate.value = infoList[roomNo].outDate;
	// console.log(infoList[roomNo].signType)
	// if(infoList[roomNo].signType!=null) document.getElementById(infoList[roomNo].signType).selected = true;
	// form_deposit.value = infoList[roomNo].deposit;
	// form_monthly.value = infoList[roomNo].monthly;
	// openModal(1);
}
function selectChange(arg){
	location.href="/"+arg.selectedOptions[0].value;
}
async function insertRoomInfo(){
	let params = {};
	params.roomNo = form_roomNo.selectedOptions[0].value;
	params.name = form_name.value;
	params.phone = form_phone.value;
	params.esName = form_esName.value;
	params.esPhone = form_esPhone.value;
	params.signDate = form_signDate.value;
	params.inDate = form_inDate.value;
	params.endDate = form_endDate.value;
	params.outDate = form_outDate.value;
	params.form_outDate = form_outDate.value;
	params.signType = form_signType.selectedOptions[0].value;
	params.deposit = form_deposit.value;
	params.monthly = form_monthly.value;
	console.log(params);
	let response = await fetch("/roomInfo", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(params),
	});
	let result = await response.json();
	console.log(result);
	closeModal(1)
}

window.onload = function(){
	getRentInfo(param);
}