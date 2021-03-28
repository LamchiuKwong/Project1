package com.agile.agiletest.entity;


import lombok.Data;

/**
 *查询订单信息
 * */
@Data
public class Order {
    private int id;
    private int carInfoId;
    private int personId;
    private int changeTimes;

    //0是预定未付款， 1是已经支付， 2是退票
    private int status;
    private String stautsMsg;


    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", carInfoId=" + carInfoId +
                ", personId=" + personId +
                ", changeTimes=" + changeTimes +
                ", status=" + status +
                '}';
    }

    public Order() {
    }

    public Order(int id, int carInfoId, int personId, int changeTimes, int status) {
        this.id = id;
        this.carInfoId = carInfoId;
        this.personId = personId;
        this.changeTimes = changeTimes;
        this.status = status;
    }
    public Order(int carInfoId, int personId, int changeTimes) {
        this.carInfoId = carInfoId;
        this.personId = personId;
        this.changeTimes = changeTimes;
    }
}
