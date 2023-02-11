package houseRents.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import houseRents.mapper.RMapper;
import houseRents.vo.RentVo;

@Service("rService")
public class RService {
	
	@Autowired
	private RMapper r;
	
	public List<RentVo> getRentInfoAll(){
		return r.selectAll();
	}
	public List<RentVo> getRentInfoByRoom(String roomNo){
		return r.selectByRoom(roomNo);
	}
	public List<RentVo> getRentInfoByName(String name){
		return r.selectByName(name);
	}
	public int putRentInfo(RentVo rvo){
		return r.insertInfo(rvo);
	}
//	public Map<String,Object> getBodyinfoByUser(Map<String, Object> params);
//	public BodyinfoVo getBodyinfoBySubject(String subject_sid);
//	public BodyinfoVo getBodyinfo(String sid);
//	public Map<String,Object> insMultipleBodyinfo(Map<String,List<List<String>>> lists);
//	public int moveBodyinfo(BodyinfoVo vo);
//	public int insBodyinfo(BodyinfoVo vo);
//	public int setBodyinfo(BodyinfoVo vo);
//	public int delBodyinfo(String id);
	
}
