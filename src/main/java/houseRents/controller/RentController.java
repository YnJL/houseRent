package houseRents.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import houseRents.service.RService;
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
	@PostMapping(value = "/byRoom/{roomNo}")
	public Map<String,Object> byRoom(@PathVariable String roomNo) {
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("rentInfo", r.getRentInfoByRoom(roomNo));
		return resultMap;
	}
	@PostMapping(value = "/byName/{name}")
	public Map<String,Object> byNmae(@PathVariable String name) {
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("rentInfo", r.getRentInfoByName(name));
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