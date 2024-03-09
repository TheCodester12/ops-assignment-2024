package ca.ops.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.ops.assignment.dto.EmployeeDto;
import ca.ops.assignment.service.EmployeeService;
import ca.ops.assignment.util.Constant;
import jakarta.validation.Valid;

@RequestMapping(Constant.API_PREFIX + "/employees")
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService empService;
	
	@GetMapping("")
	public List<EmployeeDto> listAllEmployees() {
		return empService.findAllEmployees();
	}
	
	@PutMapping("/{id}")
	public EmployeeDto updateEmployee(@RequestBody@Valid EmployeeDto dto, @PathVariable("id") Integer id) {
		return empService.update(dto);
	}
}
