package ca.ops.assignment.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.ops.assignment.dto.EmployeeDto;
import ca.ops.assignment.entity.Employee;
import ca.ops.assignment.repository.EmployeeRepository;
import ca.ops.assignment.transformer.EntityToDtoTransformer;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository  empRepo;
	
	public List<EmployeeDto> findAllEmployees() {
		
		List<Employee> employees = empRepo.findAll();
		
		if (employees != null && employees.size() > 0) {
			return EntityToDtoTransformer.convertEmployeeListEntityToDto(employees);
		}
		return null;
	}
	
	public EmployeeDto update(EmployeeDto dto) {

		Optional<Employee> optionalEntity = empRepo.findById(dto.getId());
		if (optionalEntity.isPresent()) {
			Employee entity = optionalEntity.get();
//			entity.setFirstName(dto.getFirstName());
//			entity.setLastName(dto.getLastName());
			entity.setYearsOfService(dto.getYearsOfService());
			return EntityToDtoTransformer.convertEmployeeEntityToDto(entity);
		}
		
		return null;
	}
}
