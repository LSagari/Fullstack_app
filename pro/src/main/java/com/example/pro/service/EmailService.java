package com.example.pro.service;

import com.example.pro.model.Email;
import com.example.pro.repo.EmailRepository;
import lombok.Value;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.swing.text.AbstractDocument;
import java.io.IOException;
import java.net.ContentHandler;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {




    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private EmailRepository emailRepository;

    private final String fromEmail = "pasalalikhitha@gmail.com";
    public void sendEmail(String toEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);
        message.setFrom("pasalalikhitha@gmail.com");

        mailSender.send(message);

        Email email = new Email();
        email.setToEmail(toEmail);
        email.setSubject(subject);
        email.setBody(body);
        email.setSentAt(LocalDateTime.now());
        emailRepository.save(email);
    }

    public List<Email> getAllEmails() {
        return emailRepository.findAll();
    }

    }



