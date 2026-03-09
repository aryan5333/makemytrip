package com.makemytrip.makemytrip.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.repositories.UserRepository;


@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Users login(String email,String password){
        Users User=userRepository.findByEmail(email);
        System.out.println(User);

        if(User !=null && passwordEncoder.matches(password,User.getPassword())){
            System.out.println("Login API hit");
            return User;
        }

        return null;
    }


    public Users Signup(Users user){
        System.out.println(user);
        System.out.println(user.getEmail());
        if(userRepository.findByEmail(user.getEmail())!=null){
            throw new RuntimeException("Email is already registered");

        }
        user.setPassword(passwordEncoder.encode((user.getPassword())));
        if(user.getRole()==null){
            user.setRole("USER");
        }
        return userRepository.save(user);
        
        
    }
    public Users getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }
    public Users editprofile(String id,Users updateUser){
        Users user=userRepository.findById(id).orElse(null);
        if(user!=null){
            user.setFirstname(updateUser.getFirstname());
            user.setLastname(updateUser.getLastname());
            user.setPhoneNumber(updateUser.getPhoneNumber());
            return userRepository.save(user);
        }
        return null;
    }


    
    
}
