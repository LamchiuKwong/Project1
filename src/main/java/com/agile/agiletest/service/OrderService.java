package com.agile.agiletest.service;


import com.agile.agiletest.Result.Result;

/**
 * 订单处理
. * */
public interface OrderService {

    /**
     * @param username
     * @return
     * */
    public abstract Result getOrder(String username);

    /**
     *订单改签，写完了吗？
     */
    public abstract Result changeOrder(int orderId,int tripsId);
}
