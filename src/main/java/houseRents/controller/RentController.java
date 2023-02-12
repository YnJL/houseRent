package houseRents.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import houseRents.service.RService;
import houseRents.vo.C1Vo;
import houseRents.vo.RentVo;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class RentController {

	@Autowired
	private RService r;

	@GetMapping(value = "/rentInfo")
	public Map<String,Object> home(HttpServletRequest request) {
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("rentInfo", r.getRentInfoAll());
		return resultMap;
	}
	@PostMapping(value = "/byRoom")
	public Map<String,Object> byRoom(@RequestBody RentVo vo) {
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("rentInfo", r.getRentInfoByRoom(vo));
		System.out.println(vo);
		return resultMap;
	}
	@PostMapping(value = "/byName")
	public Map<String,Object> byNmae(@RequestBody C1Vo vo) {
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("rentInfo", r.getRentInfoByName(vo));
		System.out.println(vo);
		return resultMap;
	}
	@PostMapping(value = "/rentInfo")
	public Map<String,Object> home(@RequestBody RentVo rvo) {
		System.out.println(rvo.toString());
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("code", r.putRentInfo(rvo));
		return resultMap;
	}
}