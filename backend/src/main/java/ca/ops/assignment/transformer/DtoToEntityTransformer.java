package ca.ops.assignment.transformer;

import ca.ops.assignment.dto.EmployeeDto;
import ca.ops.assignment.entity.Employee;

public class DtoToEntityTransformer {
	public static Employee convertEmployeeDtoToEntity(EmployeeDto dto) {
		Employee entity = new Employee(
				dto.getId(),
				dto.getFirstName(),
				dto.getLastName(),
				dto.getYearsOfService());
		return entity;
	}
}
