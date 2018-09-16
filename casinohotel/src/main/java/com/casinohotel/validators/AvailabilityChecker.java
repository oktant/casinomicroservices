package com.casinohotel.validators;

import com.casinohotel.repositories.HotelReservationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by oalizada on 3/7/2017.
 */
@Component
public class AvailabilityChecker {
    @Autowired
    HotelReservationRepository hotelReservationRepository;
    @Value("${hotel.oneperson.count.per.day}")
    private int onePersonRoom;
    @Value("${hotel.twopersons.count.per.day}")
    private int twoPersonsRoom;


    public int checkTicketAvailability(Date dateOfEntrance, int numberOfPersons){
        int countOfAvailableRooms=0;
        int countOfRooms= hotelReservationRepository.getCountOfReservations(dateOfEntrance, numberOfPersons);
        if(numberOfPersons==1){
            countOfAvailableRooms=onePersonRoom-countOfRooms;
        }
        else{
            countOfAvailableRooms=twoPersonsRoom-countOfRooms;
        }
        return countOfAvailableRooms;
    }

    public Date parseDate(String dateInString){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date=null;
        try{
            date=formatter.parse(dateInString);

        }catch(Exception e){
            e.printStackTrace();
        }
        return date;
    }
}
