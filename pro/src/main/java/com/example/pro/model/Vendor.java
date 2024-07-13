package com.example.pro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
public class Vendor {



        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        private String name;

        public void setEmail(String email) {
                this.email = email;
        }

        private String email;

        public String getUpi() {
                return upi;
        }

        public void setUpi(String upi) {
                this.upi = upi;
        }

        private String upi;

        public String getEmail() {
                return  email;
        }


        // Getters and Setters
        // ...
}


