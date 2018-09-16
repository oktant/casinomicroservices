package com.casinoticket.repositories;

import com.casinoticket.model.CasinoTicketDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

/**
 * Created by oalizada on 3/5/2017.
 */
@Repository
public interface CasinoTicketRepository extends JpaRepository<CasinoTicketDTO, Long> {

    @Query("select count(tic) from CasinoTicketDTO tic where tic.dateOfEntrance=:dateOfEntrance and tic.type=:type")
    public Integer getCountOfReservations(@Param("dateOfEntrance") Date dateOfEntrance,@Param("type") String type);



}
