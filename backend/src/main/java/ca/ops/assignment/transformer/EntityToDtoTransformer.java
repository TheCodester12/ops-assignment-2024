package ca.ops.assignment.transformer;

import java.util.ArrayList;
import java.util.List;

import ca.ops.assignment.dto.EmployeeDto;
import ca.ops.assignment.entity.Employee;

public class EntityToDtoTransformer {

	public static EmployeeDto convertEmployeeEntityToDto(Employee entity) {
		EmployeeDto dto = new EmployeeDto(
				entity.getId(),
				entity.getFirstName(),
				entity.getLastName(),
				entity.getYearsOfService());
		return dto;
	}
	
	public static List<EmployeeDto> convertEmployeeListEntityToDto(List<Employee> entityList) {
		List<EmployeeDto> dtoList = new ArrayList<EmployeeDto>();
		if (entityList != null && entityList.size() > 0) {
			for(Employee entity: entityList) {
				dtoList.add(convertEmployeeEntityToDto(entity));
			}
		}
		return dtoList;
	}
}
