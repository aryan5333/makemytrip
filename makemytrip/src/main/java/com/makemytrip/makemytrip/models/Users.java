package com.makemytrip.makemytrip.models;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="users")

public class Users {
    @Id
    private String _id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String role;
    private String phoneNumber;
    private List<Booking> bookings=new ArrayList<>();

    public String getFirstname(){
        return firstname;
    }
    public void setFirstname(String firstname){
        this.firstname=firstname;
    }
    public String getLastname(){
        return lastname;
    }
    public void setLastname(String lastname){
        this.lastname=lastname;
    }
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber=phoneNumber;
    }
    public String getPhoneNumber(){
        return phoneNumber;
    }

    public List<Booking> getBookings(){return bookings;};
    public void setBookings(List<Booking> bookings){this.bookings=bookings;}
  
    public String getPassword() {return password;}
    public String getEmail(){return email;}
    public String getRole(){return role;}
    public void setPassword(String password){this.password=password;}
    public void setRole(String role){this.role=role;}

    public static class Booking{
    private String type;
    private String bookingId;
    private String date;
    private int quantity;
    private double totalprice;

    public String getType(){return type;}
    public void setType(String type){this.type=type;}
    public String getBookingId(){return bookingId;}
    public void setBookingId(String bookingId){this.bookingId=bookingId;}
    public String getDate(){return date;}
    public void setDate(String date){this.date=date;}
    public int getQuantity(){return quantity;}
    public void setQuantity(int quantity){this.quantity=quantity;}
    public double getTotalPrice(){return totalprice;}
    public void setTotalPrice(double totalprice){this.totalprice=totalprice;}

  }
}





 