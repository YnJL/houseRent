package houseRents.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class HomeController {

	@RequestMapping(value = {"/",""}, method = RequestMethod.GET)
	public String home(Model model,HttpServletRequest request) {
		return "index.html";
	}
	
	@RequestMapping(value = "/current", method = RequestMethod.GET)
	public String current(Model model,HttpServletRequest request) {
		return "rooms.html";
	}
	
	
}