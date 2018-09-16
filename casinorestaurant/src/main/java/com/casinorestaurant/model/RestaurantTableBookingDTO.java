package com.casinorestaurant.model;


import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


/**
 * Created by oalizada on 3/6/2017.
 */

@Entity
@Table(name="restaurantreservation")
public class RestaurantTableBookingDTO {

    @Id
    @GeneratedValue
    private long id;

    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "startDate", columnDefinition = "DATETIME")
    private LocalDateTime startDate;
    @NotNull

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "endDate", columnDefinition = "DATETIME")
    private LocalDateTime endDate;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }
}
