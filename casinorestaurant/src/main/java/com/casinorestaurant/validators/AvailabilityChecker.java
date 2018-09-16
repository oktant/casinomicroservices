package com.casinorestaurant.validators;


import com.casinorestaurant.repositories.RestaurantTableBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Created by oalizada on 3/7/2017.
 */
@Component
public class AvailabilityChecker {
    @Autowired
    RestaurantTableBookingRepository restaurantTableBookingRepository;
    @Value("${restaurant.table.count.per.day}")
    private int restaurantTable;


    public int checkTicketAvailability(LocalDateTime dateOfEntrance) {
        int countOfAvailableTables = 0;





            int countOfReservedTables = restaurantTableBookingRepository.getAvailableRestaurantTables(dateOfEntrance);
            System.out.println("::::"+countOfReservedTables);
            countOfAvailableTables=restaurantTable-countOfReservedTables;

        return countOfAvailableTables;

    }
}
