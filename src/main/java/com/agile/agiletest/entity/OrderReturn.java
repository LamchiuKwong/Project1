package com.agile.agiletest.entity;

import lombok.Data;

@Data
public class OrderReturn {
    private String orginLocation;
    private String destinationLocation;
    //    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String startTime;
    //    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String reachTime;
    private String carNum;
    private int ticketPrice;
    private int ticketNum;
    private String trueName;
    private String idCardNum;
    private String phoneNum;
    private String status;

    @Override
    public String toString() {
        return "OrderReturn{" +
                "orginLocation='" + orginLocation + '\'' +
                ", destinationLocation='" + destinationLocation + '\'' +
                ", startTime='" + startTime + '\'' +
                ", reachTime='" + reachTime + '\'' +
                ", carNum='" + carNum + '\'' +
                ", ticketPrice=" + ticketPrice +
                ", ticketNum=" + ticketNum +
                ", trueName='" + trueName + '\'' +
                ", idCardNum='" + idCardNum + '\'' +
                ", phoneNum='" + phoneNum + '\'' +
                '}';
    }

    public OrderReturn() {
    }

    public OrderReturn(String orginLocation, String destinationLocation, String startTime, String reachTime, String carNum, int ticketPrice, int ticketNum, String trueName, String idCardNum, String phoneNum) {
        this.orginLocation = orginLocation;
        this.destinationLocation = destinationLocation;
        this.startTime = startTime;
        this.reachTime = reachTime;
        this.carNum = carNum;
        this.ticketPrice = ticketPrice;
        this.ticketNum = ticketNum;
        this.trueName = trueName;
        this.idCardNum = idCardNum;
        this.phoneNum = phoneNum;
    }

}
