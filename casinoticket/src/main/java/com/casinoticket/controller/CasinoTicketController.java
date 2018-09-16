package com.casinoticket.controller;

import com.casinoticket.exceptions.ApiError;
import com.casinoticket.exceptions.TicketsNotAvailable;
import com.casinoticket.model.CasinoTicketDTO;
import com.casinoticket.repositories.CasinoTicketRepository;
import com.casinoticket.validators.AvailabilityChecker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by oalizada on 3/5/2017.
 */
@CrossOrigin

@RestController
public class CasinoTicketController {

    @Autowired
    CasinoTicketRepository casinoTicketRepository;
    @Autowired
    AvailabilityChecker availabilityChecker;
    @RequestMapping(value="/tickets/simple", method= RequestMethod.POST)
    public CasinoTicketDTO addCasinoSimpleTicket(@Validated @RequestBody CasinoTicketDTO casinoTicketDTO){
        casinoTicketDTO.setType("simple");
        if(availabilityChecker.checkTicketAvailability(casinoTicketDTO.getDateOfEntrance(), casinoTicketDTO.getType())>0) {

            return casinoTicketRepository.save(casinoTicketDTO);
        }
        else{
            throw new TicketsNotAvailable();
        }
    }
    @RequestMapping(value="/tickets/vip", method= RequestMethod.POST)
    public CasinoTicketDTO addCasinoVipTicket(@RequestBody CasinoTicketDTO casinoTicketDTO){
        casinoTicketDTO.setType("vip");
        if(availabilityChecker.checkTicketAvailability(casinoTicketDTO.getDateOfEntrance(), casinoTicketDTO.getType())>0) {
            return casinoTicketRepository.save(casinoTicketDTO);
        }
        else{
            throw new TicketsNotAvailable();
        }
    }

    @RequestMapping(value="tickets/simple", method=RequestMethod.GET)
    public int getAvailableSimpleTicketCount(String dateOfEntrance, String type){
         return availabilityChecker.checkTicketAvailability(availabilityChecker.parseDate(dateOfEntrance),type);

    }
    @RequestMapping(value="tickets/vip", method=RequestMethod.GET)
    public int getAvailableVipTicketCount(String dateOfEntrance, String type){

        return availabilityChecker.checkTicketAvailability(availabilityChecker.parseDate(dateOfEntrance),type);
    }



    @ExceptionHandler({TicketsNotAvailable.class, NullPointerException.class})
    public ApiError getException() {
        return new ApiError(" Tickets not available on that day. Please choose another day.");
    }
    @ExceptionHandler({HttpMessageNotReadableException.class})
    public ApiError getTimeException() {
        return new ApiError("DDate and Time are not correct Please specify date without time");
    }

}
