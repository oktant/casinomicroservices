package com.casinohotel.model;

import javax.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by oalizada on 3/6/2017.
 */
@Entity
@Table(name="hotelreservation")
public class HotelReservationDto {
    @Id
    @GeneratedValue
    private long id;

    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private Integer numberOfPersons;
    @NotNull
    @Temporal(TemporalType.DATE)
    private Date dateOfEntrance;

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

    public int getNumberOfPersons() {
        return numberOfPersons;
    }

    public void setNumberOfPersons(int numberOfPersons) {
        this.numberOfPersons = numberOfPersons;
    }

    public Date getDateOfEntrance() {
        return dateOfEntrance;
    }

    public void setDateOfEntrance(Date dateOfEntrance) {
        this.dateOfEntrance = dateOfEntrance;
    }

    @Override
    public String toString() {
        return "HotelReservationDto{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", numberOfPersons=" + numberOfPersons +
                ", dateOfEntrance=" + dateOfEntrance +
                '}';
    }
}
