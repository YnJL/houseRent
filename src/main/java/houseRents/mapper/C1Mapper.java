package houseRents.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import houseRents.vo.C1Vo;

@Mapper
public interface C1Mapper {

	public List<C1Vo> selectAll();
	public int insertInfo(C1Vo c1vo);
//	public List<BodyinfoVo> selectBodyinfoByUser(Map<String, Object> params);
//	public int selectBodyinfoCountByUser(String user_sid);
//	public BodyinfoVo selectBodyinfoBySubject(String subject_sid);
//	public BodyinfoVo selectBodyinfo(String sid);
//	public int insertMultipleBodyinfo(List<BodyinfoVo> list);
//	public int insertBodyinfo(BodyinfoVo vo);
//	public int updateBodyinfo(BodyinfoVo vo);
//	public int deleteBodyinfo(String id);
//	public int moveBodyinfoFrom(String subject_sid);
//	public int moveBodyinfoTo(BodyinfoVo vo);

}
