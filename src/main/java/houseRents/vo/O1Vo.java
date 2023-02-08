package houseRents.vo;

public class O1Vo {
	String idx;
	String roomNo;
	String name;
	String phone;
	String esName;
	String esPhone;
	String signDate;
	String inDate;
	String endDate;
	String outDate;
	String signType;
	String deposit;
	String monthly;
	String searchKey;
	@Override
	public String toString() {
		return "O1Vo [idx=" + idx + ", roomNo=" + roomNo + ", name=" + name + ", phone=" + phone + ", esName="
				+ esName + ", esPhone=" + esPhone + ", signDate=" + signDate + ", inDate=" + inDate + ", endDate="
				+ endDate + ", outDate=" + outDate + ", signType=" + signType + ", deposit=" + deposit + ", monthly="
				+ monthly + ", searchKey=" + searchKey + "]";
	}
	
	public String getIdx() {
		return idx;
	}
	public void setIdx(String idx) {
		this.idx = idx;
	}
	public String getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEsName() {
		return esName;
	}
	public void setEsName(String esName) {
		this.esName = esName;
	}
	public String getEsPhone() {
		return esPhone;
	}
	public void setEsPhone(String esPhone) {
		this.esPhone = esPhone;
	}
	public String getSignDate() {
		return signDate;
	}
	public void setSignDate(String signDate) {
		this.signDate = signDate;
	}
	public String getInDate() {
		return inDate;
	}
	public void setInDate(String inDate) {
		this.inDate = inDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getOutDate() {
		return outDate;
	}
	public void setOutDate(String outDate) {
		this.outDate = outDate;
	}
	public String getSignType() {
		return signType;
	}
	public void setSignType(String signType) {
		this.signType = signType;
	}
	public String getDeposit() {
		return deposit;
	}
	public void setDeposit(String deposit) {
		this.deposit = deposit;
	}
	public String getMonthly() {
		return monthly;
	}
	public void setMonthly(String monthly) {
		this.monthly = monthly;
	}
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	
}
