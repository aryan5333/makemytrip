package com.makemytrip.makemytrip.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.services.UserServices;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins ="*")
public class UserController {
    @Autowired
    private UserServices userServices;

    @PostMapping("/login")
    public Users login(@RequestParam String email,@RequestParam String password){
        return userServices.login(email,password);
    }
    @PostMapping("/Signup")
    public ResponseEntity<Users> signup(@RequestBody Users user){
        return ResponseEntity.ok(userServices.Signup(user));
    }
    
}
