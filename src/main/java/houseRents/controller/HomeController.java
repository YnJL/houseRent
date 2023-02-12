package houseRents.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping(value = {"/",""})
	public String home(ModelAndView mnv) {
		mnv = new ModelAndView("index");
		System.out.println("index");
//		mnv.setViewName("index");
		return "index.html" ;
	}
	
	@RequestMapping(value = "/current")
	public String current(ModelAndView mnv) {
		mnv = new ModelAndView("rooms");
		System.out.println("rooms");
//		mnv.setViewName("rooms");
		return "rooms.html";
	}
//	
	@GetMapping(value = "/{roomNo}")
	public String income(@PathVariable String roomNo, ModelAndView mnv) {
		System.out.println("page:"+roomNo);
		mnv = new ModelAndView("rent");
//		mnv.setViewName("income");
		mnv.addObject("roomNo", roomNo);
		return "rentInfo.html";
	}
//	
}