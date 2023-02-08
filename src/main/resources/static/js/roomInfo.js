async function getRoomInfo(){
	let response = await fetch("/roomInfo", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	result = await response.json();
	console.log(result);
}
/*
function getSid() {
	let domain = location.href;
    let sid = domain.split("/")[domain.split("/").length - 1];

	if (sid.match("ssid")) {
		sid = sid.split("=")[sid.split("=").length - 1];

		selectedTestee.dataset.subject_sid = sid;
	}
}*/
/*
function renderTestees (testees) {
	let testeeDIV = document.querySelector("#testeeDIV");
	testeeDIV.innerText = '';
	for(let i=0;i<testees.length;i++){
		let alink = document.createElement("a");
		let sex = '';
		if(testees[i].sex == 0) sex='남성';
		if(testees[i].sex == 1) sex='여성';
		alink.innerText = testees[i].subject_name+'('+testees[i].subject_code+':'+sex+','+testees[i].age+'세)';
		alink.dataset.subject_sid = testees[i].sid;
		alink.onclick = function(){
			selectedTestee.innerText = alink.innerText;
			selectedTestee.dataset.subject_sid = testees[i].sid;
			height.value = '';
			weight.value = '';
			forehead.value = '';
			neck.value = '';
			armpit.value = '';
			chest.value = '';
			rib.value = '';
			waist.value = '';
			ilium.value = '';
			ventral.value = '';
			BMI.value = '';
			getAdditionalInfo(testees[i].sid);
		}
		testeeDIV.appendChild(alink);
	}
	if(!ssid) testeeDIV.firstChild.click();
	// let selectTestee = document.querySelector("#selectTestee");
	// selectTestee.innerHTML = '<option></option>';
	// for(let i=0;i<testees.length;i++){
	// 	let option = document.createElement("option");
	// 	let sex = '';
	// 	if(testees[i].sex == 0) sex='남성';
	// 	if(testees[i].sex == 1) sex='여성';
	// 	option.innerText = testees[i].subject_name+'('+testees[i].subject_code+':'+sex+','+testees[i].age+'세)';
	// 	option.value = testees[i].sid;
	// 	selectTestee.appendChild(option);
	// }
	// selectTestee.onchange = function(){
	// 	let selected = selectTestee.options[selectTestee.selectedIndex].value;
	// 	if(selected=='') return;
	// 	height.value = '';
	// 	weight.value = '';
	// 	forehead.value = '';
	// 	neck.value = '';
	// 	armpit.value = '';
	// 	chest.value = '';
	// 	rib.value = '';
	// 	waist.value = '';
	// 	ilium.value = '';
	// 	ventral.value = '';
	// 	BMI.value = '';
	// 	getAdditionalInfo(selected);
	// }
}*/
/*
async function getAdditionalInfo(subject_sid){
	let response = await fetch("/user/subject/moreInfo/"+subject_sid, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	result = await response.json();
	if(result.bodyinfo=="O"){
		bodyInfoLink.innerText = '등록된 정보가 있습니다';
		bodyInfoLink.dataset.flag = 1;
		loadBodyinfo(subject_sid);
	} else {
		bodyInfoLink.innerText = '정보 미등록';
		bodyInfoLink.dataset.flag = 0;
	}
	if(result.question=="O"){
		questionInfoLink.innerText = '등록된 정보가 있습니다';
	} else {
		questionInfoLink.innerText = '정보 미등록';
	}
}*/
/*
async function loadBodyinfo(subject_sid){
	let response = await fetch("/user/bodyinfo/"+subject_sid, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	result = await response.json();
	if(!result.bodyinfo) return;
	height.value = result.bodyinfo.height;
	weight.value = result.bodyinfo.weight;
	forehead.value = result.bodyinfo.forehead_cm;
	neck.value = result.bodyinfo.neck_cm;
	armpit.value = result.bodyinfo.armpit_cm;
	chest.value = result.bodyinfo.chest_cm;
	rib.value = result.bodyinfo.rib_cm;
	waist.value = result.bodyinfo.waist_cm;
	ilium.value = result.bodyinfo.ilium_cm;
	ventral.value = result.bodyinfo.ventral_cm;
	calcBMI();
}*/
/*
async function addBodyInfo(){
	// if(!selectTestee.options[selectTestee.selectedIndex].value) {
	if(!selectedTestee.dataset.subject_sid) {
		alert('피험자를 선택하여 주십시오');
		return;
	}
	if(bodyInfoLink.dataset.flag==1) {
		if(!confirm("해당 피험자의 체형 정보가 이미 존재합니다. 수정하시겠습니까?")){
			return;
		}
	}
	let height = document.querySelector("#height");
	let weight = document.querySelector("#weight");
	let forehead = document.querySelector("#forehead");
	let neck = document.querySelector("#neck");
	let armpit = document.querySelector("#armpit");
	let chest = document.querySelector("#chest");
	let rib = document.querySelector("#rib");
	let waist = document.querySelector("#waist");
	let ilium = document.querySelector("#ilium");
	let ventral = document.querySelector("#ventral");
	if(height.value=='') {
		alert("신장을 입력하여 주십시오");
		height.focus();
		return;
	}
	if(weight.value=='') {
		alert("체중을 입력하여 주십시오");
		weight.focus();
		return;
	}
	if(forehead.value=='') {
		alert("이마둘레를 입력하여 주십시오");
		forehead.focus();
		return;
	}
	if(neck.value=='') {
		alert("목둘레를 입력하여 주십시오");
		neck.focus();
		return;
	}
	if(armpit.value=='') {
		alert("겨드랑이둘레를 입력하여 주십시오");
		armpit.focus();
		return;
	}
	if(chest.value=='') {
		alert("가슴둘레를 입력하여 주십시오");
		height.focus();
		return;
	}
	if(rib.value=='') {
		alert("늑골둘레를 입력하여 주십시오");
		rib.focus();
		return;
	}
	if(waist.value=='') {
		alert("허리둘레를 입력하여 주십시오");
		waist.focus();
		return;
	}
	if(ilium.value=='') {
		alert("장골둘레를 입력하여 주십시오");
		ilium.focus();
		return;
	}
	if(ventral.value=='') {
		alert("곡골둘레를 입력하여 주십시오");
		ventral.focus();
		return;
	}
	let params = {};
	// params.subject_sid = selectTestee.options[selectTestee.selectedIndex].value;
	params.subject_sid = selectedTestee.dataset.subject_sid;
	params.height = height.value;
	params.weight = weight.value;
	params.forehead_cm = forehead.value;
	params.neck_cm = neck.value;
	params.armpit_cm = armpit.value;
	params.chest_cm = chest.value;
	params.rib_cm = rib.value;
	params.waist_cm = waist.value;
	params.ilium_cm = ilium.value;
	params.ventral_cm = ventral.value;
	
	if(bodyInfoLink.dataset.flag==1){
		let response = await fetch("/user/moveBodyinfo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
		let result = await response.json();
		if (result.insert > 0) {
			location.href = "/user/subjectList";
		} else {
			alert("등록에 실패했습니다.")
			return;
		}
	} else {
		let response = await fetch("/user/bodyinfo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
		let result = await response.json();
		if (result.insert > 0) {
			location.href = "/user/subjectList";
		} else {
			alert("등록에 실패했습니다.");
			return;
		}
	}

}*/

window.onload = function(){
	getRoomInfo();
}