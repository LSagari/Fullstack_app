package com.example.pro.controller;

import com.example.pro.model.Email;
import com.example.pro.model.Vendor;
import com.example.pro.service.EmailService;
import com.example.pro.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/emails")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private VendorService vendorService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmailToVendors() {
        List<Vendor> vendors = vendorService.getAllVendors();
        for (Vendor vendor : vendors) {
            String subject = "Payment Notification";
            String body = String.format("Sending payments to vendor %s at UPI %s", vendor.getName(), vendor.getUpi());
            emailService.sendEmail(vendor.getEmail(), subject, body);
        }
        return ResponseEntity.ok("Emails sent successfully");
    }

    @GetMapping
    public List<Email> getAllEmails() {
        return emailService.getAllEmails();
    }
    }


