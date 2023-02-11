let infoList = {};

async function getRentInfoByRoom(){
	let params = {};
	params.roomNo = roomNo
	let response = await fetch("/roomInfo", {
		method: "Post",
		headers: {
			"Content-Type": "application/json",
		},
	});
	result = await response.json();
	console.log(result);
	renderRoomInfo(result.roomInfo);
}
function renderRoomInfo(list){
	let roomInfoTable = document.querySelector("#roomInfoTable");
	let js = 0, ws = 0, income=0;
	let jb = 0, wb = 0;
	for (let i = 0; i < list.length; i++){
		infoList[list[i].roomNo] = list[i];
		if(list[i].roomNo==401) continue;
		let row = `<li onclick="openModifyModal(${list[i].roomNo})">`;
		row += `<p class="clickable">${list[i].roomNo}</p>`;
		row += `<p class="clickable" >`+list[i].name+'</p>';
		row += `<p class="clickable" >`+list[i].phone+'</p>';
		row += `<p class="clickable" >`+list[i].esName+'</p>';
		row += `<p class="clickable" >`+list[i].esPhone+'</p>';
		row += `<p class="clickable" >`+list[i].signDate+'</p>';
		row += `<p class="clickable" >`+list[i].inDate+'</p>';
		row += `<p class="clickable" >`+list[i].endDate+'</p>';
		row += `<p class="clickable" >`+list[i].outDate+'</p>';
		row += `<p class="clickable" >`+list[i].signType+'</p>';
		row += `<p class="clickable" >`+list[i].deposit+'</p>';
		row += `<p class="clickable" >`+list[i].monthly+'</p>';
		row += '</li>';
		roomInfoTable.insertAdjacentHTML("beforeend",row);
		if(list[i].signType=="월세") {
			ws++;
			if(list[i].monthly) income+=list[i].monthly*1;
			wb+=list[i].deposit*1;
		}
		if(list[i].signType=="전세") {
			js++;
			jb+=list[i].deposit*1;
		}
	}
	
	let row = '<li></li>';
	roomInfoTable.insertAdjacentHTML("beforeend",row);
	if(wb>=10000) {
		wb=Math.round(wb/1000)/10+"억원";
	} else {
		wb+="만원";
	}
	if(jb>=10000) {
		jb=Math.round(jb/1000)/10+"억원";
	} else {
		jb+="만원";
	}
	row = `
			<li>
				<p>통계</p>
				<p>전세 : ${js}</p>
				<p>전세보증금 : ${jb}</p>
				<p>월세 : ${ws}</p>
				<p>월세보증금 : ${wb}</p>
				<p>월세 총액 : ${income}만원</p>
			</li>
			`;
	roomInfoTable.insertAdjacentHTML("beforeend",row);
}
function openModifyModal(roomNo){
	// let opts = document.querySelector("#form_roonNo").options;
	// for(let i=0;i<opts.length;i++){
	// 	if(opts[i].value==roomNo) opts[i].selected=true;
	// }
	console.log(roomNo);
	document.getElementById(roomNo).selected = true;
	form_name.value = infoList[roomNo].name;
	form_phone.value = infoList[roomNo].phone;
	form_esName.value = infoList[roomNo].esName;
	form_esPhone.value = infoList[roomNo].phone;
	form_signDate.value = infoList[roomNo].signDate;
	form_inDate.value = infoList[roomNo].inDate;
	form_endDate.value = infoList[roomNo].endDate;
	form_outDate.value = infoList[roomNo].outDate;
	console.log(infoList[roomNo].signType)
	if(infoList[roomNo].signType!=null) document.getElementById(infoList[roomNo].signType).selected = true;
	form_deposit.value = infoList[roomNo].deposit;
	form_monthly.value = infoList[roomNo].monthly;
	openModal(1);
}
function roomChange(){
	openModifyModal(form_roomNo.selectedOptions[0].value);
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
	console.log("js:"+param);
	console.log("js:"+typeof param);
	// getRoomInfo();
}