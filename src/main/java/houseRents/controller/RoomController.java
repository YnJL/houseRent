package houseRents.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import houseRents.service.C1Service;
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
}