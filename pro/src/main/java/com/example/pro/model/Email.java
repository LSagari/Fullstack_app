package com.example.pro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Email {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subject;
    private String body;
    private String toEmail;
    private LocalDateTime sentAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToEmail() {
        return toEmail;
    }

    public void setToEmail(String toEmail) {
        this.toEmail = toEmail;
    }



    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getSubject() {
        return subject;
    }

    public void setSentAt(LocalDateTime sentAt) {
        this.sentAt = sentAt;
    }

    public String getBody() {
        return body;
    }


    public LocalDateTime getSentAt() {
        return sentAt;
    }



//    public void setSentAt(LocalDateTime now) {
//        this.now=now;
//
//    }
//
//    public void setToEmail(String toEmail) {
//    }
//
//    public void setSubject(String subject) {
//    }
//
//    public void setBody(String body) {
//    }

    // Getters and setters
}
