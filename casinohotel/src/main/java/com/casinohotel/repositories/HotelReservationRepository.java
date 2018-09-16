package com.casinohotel.repositories;

import com.casinohotel.model.HotelReservationDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

/**
 * Created by oalizada on 3/6/2017.
 */
@Repository
public interface HotelReservationRepository extends JpaRepository<HotelReservationDto, Long> {
    @Query("select count(hot) from HotelReservationDto hot where hot.dateOfEntrance=:dateOfEntrance and hot.numberOfPersons=:numberOfPersons")
    public Integer getCountOfReservations(@Param("dateOfEntrance") Date dateOfEntrance, @Param("numberOfPersons") int numberOfPersons);
}
