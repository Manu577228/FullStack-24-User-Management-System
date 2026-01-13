package com.codewithbharadwaj.backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("Sorry! couldn't find the user Id \uD83D\uDE14" + id);
    }
}
