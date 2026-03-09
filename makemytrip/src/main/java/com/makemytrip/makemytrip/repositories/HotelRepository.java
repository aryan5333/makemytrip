package com.makemytrip.makemytrip.repositories;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.makemytrip.makemytrip.models.Hotel;
public interface HotelRepository extends MongoRepository<Hotel,String>{
}