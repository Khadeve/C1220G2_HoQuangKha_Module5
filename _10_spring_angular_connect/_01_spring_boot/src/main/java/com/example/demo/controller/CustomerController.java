package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping("/customers")
    public List<Customer> getAll() {
        return this.customerService.findAll();
    }

    @PostMapping("/customers")
    public void save(@RequestBody Customer customer) {
        this.customerService.save(customer);
    }

    @GetMapping("/customers/{id}")
    public Customer findById(@PathVariable(name = "id")Long id) {
        return this.customerService.findById(id);
    }

    @PutMapping("/customers/{id}")
    public void update(@RequestBody Customer newCustomer, @PathVariable Long id) {
        Customer oldCustomer;
        oldCustomer = newCustomer;
        this.customerService.save(oldCustomer);
    }

    @DeleteMapping("/customers/{id}")
    public void delete(@PathVariable Long id) {
        this.customerService.deleteById(id);
    }
}
