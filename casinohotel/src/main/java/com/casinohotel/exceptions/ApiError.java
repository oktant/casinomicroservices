package com.casinohotel.exceptions;

/**
 * Created by oalizada on 3/8/2017.
 */
public class ApiError {
    private String message;
    public ApiError(String message){
        this.message=message;

    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
