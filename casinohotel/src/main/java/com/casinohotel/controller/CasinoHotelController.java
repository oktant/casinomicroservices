package com.casinohotel.controller;

import com.casinohotel.exceptions.ApiError;
import com.casinohotel.exceptions.RoomsAreNotAvailable;
import com.casinohotel.model.HotelReservationDto;
import com.casinohotel.repositories.HotelReservationRepository;
import com.casinohotel.validators.AvailabilityChecker;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by oalizada on 3/6/2017.
 */
@CrossOrigin
@RestController

public class CasinoHotelController {
    @Autowired
    HotelReservationRepository hotelReservationRepository;
    @Autowired
    AvailabilityChecker availabilityChecker;
    @RequestMapping(value="/rooms", method= RequestMethod.POST)
    public HotelReservationDto addRoomReservation(@Validated @RequestBody HotelReservationDto hotelReservationDto){
        if(availabilityChecker.checkTicketAvailability(hotelReservationDto.getDateOfEntrance(), hotelReservationDto.getNumberOfPersons())>0) {
            System.out.println(availabilityChecker.checkTicketAvailability(hotelReservationDto.getDateOfEntrance(), hotelReservationDto.getNumberOfPersons()));

            return hotelReservationRepository.save(hotelReservationDto);
        }  else{
            throw new RoomsAreNotAvailable();
        }

    }

    @RequestMapping(value="/rooms", method=RequestMethod.GET)
    public int getAvailableOnePersonRooms(String dateOfEntrance, int numberOfPersons){
        return availabilityChecker.checkTicketAvailability(availabilityChecker.parseDate(dateOfEntrance),numberOfPersons);
    }

    @ExceptionHandler({RoomsAreNotAvailable.class, NullPointerException.class})
    public ApiError getException() {
        return new ApiError("Rooms are not available on that day. Please choose another day.");
    }
    @ExceptionHandler({HttpMessageNotReadableException.class})
    public ApiError getTimeException() {
        return new ApiError("Date and Time are not correct Please specify date without time");
    }

}
