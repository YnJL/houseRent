package houseRents.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import houseRents.mapper.C1Mapper;
import houseRents.vo.C1Vo;

@Service("c1Service")
public class C1Service {
	
	@Autowired
	private C1Mapper c1;
	
	public List<C1Vo> getRoomInfoAll(){
		return c1.selectAll();
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
