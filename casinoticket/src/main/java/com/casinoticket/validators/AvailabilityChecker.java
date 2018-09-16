package com.casinoticket.validators;

import com.casinoticket.repositories.CasinoTicketRepository;
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
    CasinoTicketRepository casinoTicketRepository;
    @Value("${ticket.simple.count.per.day}")
    private int simpleCountPerDay;
    @Value("${ticket.vip.count.per.day}")
    private int vipCountPerDay;


    public int checkTicketAvailability(Date dateOfEntrance, String type){
        int countOfAvailableTickets=0;
        int countOfTickets= casinoTicketRepository.getCountOfReservations(dateOfEntrance, type);
        if(type.equals("simple")){
            countOfAvailableTickets=simpleCountPerDay-countOfTickets;
        }
        else{
            countOfAvailableTickets=vipCountPerDay-countOfTickets;
        }
        return countOfAvailableTickets;
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
