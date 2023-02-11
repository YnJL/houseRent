package houseRents.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import houseRents.service.C1Service;
import houseRents.vo.C1Vo;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class RoomController {

	@Autowired
	private C1Service c1;

	@GetMapping(value = "/roomInfo")
	public Map<String,Object> home(HttpServletRequest request) {
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("roomInfo", c1.getRoomInfoAll());
		return resultMap;
	}
	
	@PostMapping(value = "/roomInfo")
	public Map<String,Object> home(@RequestBody C1Vo c1vo) {
		System.out.println(c1vo.toString());
		Map<String,Object> resultMap = new HashMap<>();
		resultMap.put("code", c1.putRoomInfo(c1vo));
		return resultMap;
	}
}