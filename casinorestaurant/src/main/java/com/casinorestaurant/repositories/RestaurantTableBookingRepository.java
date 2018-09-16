package com.casinorestaurant.repositories;

import com.casinorestaurant.model.RestaurantTableBookingDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

/**
 * Created by oalizada on 3/6/2017.
 */
public interface RestaurantTableBookingRepository extends JpaRepository<RestaurantTableBookingDTO, Long> {

    @Query("SELECT COUNT(res) FROM RestaurantTableBookingDTO res WHERE :date  BETWEEN res.startDate AND res.endDate")
    Integer getAvailableRestaurantTables(@Param("date") LocalDateTime date);
}
