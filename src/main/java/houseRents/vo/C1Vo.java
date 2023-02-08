package houseRents.vo;

public class C1Vo {
	
	String roomNo;
	String curName;
	String phone;
	String reName;
	String rePhone;
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
		return "C1Vo [roomNo=" + roomNo + ", curName=" + curName + ", phone=" + phone + ", reName=" + reName
				+ ", rePhone=" + rePhone + ", signDate=" + signDate + ", inDate=" + inDate + ", endDate=" + endDate
				+ ", outDate=" + outDate + ", signType=" + signType + ", deposit=" + deposit + ", monthly=" + monthly
				+ ", searchKey=" + searchKey + "]";
	}
	public String getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}
	public String getCurName() {
		return curName;
	}
	public void setCurName(String curName) {
		this.curName = curName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getReName() {
		return reName;
	}
	public void setReName(String reName) {
		this.reName = reName;
	}
	public String getRePhone() {
		return rePhone;
	}
	public void setRePhone(String rePhone) {
		this.rePhone = rePhone;
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
