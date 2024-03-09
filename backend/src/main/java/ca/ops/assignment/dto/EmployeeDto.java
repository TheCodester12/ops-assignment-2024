package ca.ops.assignment.dto;

import java.io.Serializable;

public class EmployeeDto implements Serializable {

	private static final long serialVersionUID = -6020365944439375890L;

	private Integer id;
	private String firstName;
	private String lastName;
	private int yearsOfService;
	
	public EmployeeDto() {}

	public EmployeeDto(Integer id, String firstName, String lastName, int yearsOfService) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.yearsOfService = yearsOfService;
	}

	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public int getYearsOfService() {
		return yearsOfService;
	}
	
	public void setYearsOfService(int yearsOfService) {
		this.yearsOfService = yearsOfService;
	}
}
