package com.agile.agiletest.entity;

import lombok.Data;

/**
 * 用于查询园区票信息
* */

@Data
public class Trips {
    private int id;
    private String orginLocation;
    private String destinationLocation;
//    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String startTime;
//    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String reachTime;
    private String carNum;
    private int ticketPrice;
    private int ticketNum;

    @Override
    public String toString() {
        return "Trips{" +
                "id=" + id +
                ", orginLocation='" + orginLocation + '\'' +
                ", destinationLocation='" + destinationLocation + '\'' +
                ", startTime='" + startTime + '\'' +
                ", reachTime='" + reachTime + '\'' +
                ", carNum='" + carNum + '\'' +
                ", ticketPrice=" + ticketPrice +
                ", ticketNum=" + ticketNum +
                '}';
    }



}
