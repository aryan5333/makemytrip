package com.makemytrip.makemytrip.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.reprositries.UserRepository;


@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Users login(String email,String password){
        Users User=userRepository.findByEmail(email);
        if(User !=null && passwordEncoder.matches(password,User.getPassword())){
            return User;
        }
        return null;
    }
    public Users Signup(Users user){
        if(userRepository.findByEmail(user.getEmail())!=null){
            throw new RuntimeException("Email is already registered");

        }
        user.setPassword(passwordEncoder.encode((user.getPassword())));
        if(user.getRole()==null){
            user.setRole("USER");
        }
        return userRepository.save(user);
        
        
    }


    
    
}
