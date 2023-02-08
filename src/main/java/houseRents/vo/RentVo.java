package houseRents.vo;

public class RentVo {
	
	String idx;
	String roomNo;
	String inDate;
	String inName;
	String inValue;
	String type;
	String inMsg;
	@Override
	public String toString() {
		return "RentVo [idx=" + idx + ", roomNo=" + roomNo + ", inDate=" + inDate + ", inName=" + inName + ", inValue="
				+ inValue + ", type=" + type + ", inMsg=" + inMsg + "]";
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
	public String getInDate() {
		return inDate;
	}
	public void setInDate(String inDate) {
		this.inDate = inDate;
	}
	public String getInName() {
		return inName;
	}
	public void setInName(String inName) {
		this.inName = inName;
	}
	public String getInValue() {
		return inValue;
	}
	public void setInValue(String inValue) {
		this.inValue = inValue;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getInMsg() {
		return inMsg;
	}
	public void setInMsg(String inMsg) {
		this.inMsg = inMsg;
	}
	
}
