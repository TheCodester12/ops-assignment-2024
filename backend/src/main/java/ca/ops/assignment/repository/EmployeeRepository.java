package ca.ops.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.ops.assignment.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
