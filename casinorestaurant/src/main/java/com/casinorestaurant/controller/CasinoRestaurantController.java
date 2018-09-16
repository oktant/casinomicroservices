package com.casinorestaurant.controller;

import com.casinorestaurant.exceptions.ApiError;
import com.casinorestaurant.exceptions.TablesAreNotAvailable;
import com.casinorestaurant.model.RestaurantTableBookingDTO;
import com.casinorestaurant.repositories.RestaurantTableBookingRepository;
import com.casinorestaurant.validators.AvailabilityChecker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * Created by oalizada on 3/6/2017.
 */
@CrossOrigin
@RestController
public class CasinoRestaurantController {
    @Autowired
    RestaurantTableBookingRepository restaurantTableBookingRepository;

    @Autowired
    AvailabilityChecker availabilityChecker;

    @RequestMapping(value="/tables", method= RequestMethod.POST)
    public RestaurantTableBookingDTO addNewReservation(@Validated @RequestBody RestaurantTableBookingDTO restaurantTableBookingDTO){
        System.out.println(restaurantTableBookingDTO);
        if(availabilityChecker.checkTicketAvailability(restaurantTableBookingDTO.getStartDate())>0) {
           System.out.println(availabilityChecker.checkTicketAvailability(restaurantTableBookingDTO.getStartDate()));

           return restaurantTableBookingRepository.save(restaurantTableBookingDTO);
        }  else{
          throw new TablesAreNotAvailable();
        }

    }

    @ExceptionHandler({TablesAreNotAvailable.class, NullPointerException.class})
    public ApiError getException() {
         return new ApiError("Tables are not available on that day. Please choose another day.");
    }
    @ExceptionHandler({HttpMessageNotReadableException.class})
    public ApiError getTimeException() {
        return new ApiError("Date and Time are not correct. Please specify date with time");
    }

}
