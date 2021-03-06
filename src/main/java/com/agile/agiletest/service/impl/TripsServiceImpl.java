package com.agile.agiletest.service.impl;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.dao.OrderDao;
import com.agile.agiletest.dao.PersonDao;
import com.agile.agiletest.dao.TripsDao;
import com.agile.agiletest.dao.UserDao;
import com.agile.agiletest.entity.Order;
import com.agile.agiletest.entity.Person;
import com.agile.agiletest.entity.Trips;
import com.agile.agiletest.entity.User;
import com.agile.agiletest.service.TripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TripsServiceImpl implements TripsService {
    @Autowired
    private OrderDao  orderDao;

    @Autowired
    private UserDao userDao;
    @Autowired
    private PersonDao personDao;

    @Autowired
    private TripsDao tripsDao;
    @Override
    public Result getAlltrips(Trips trips) {
        Result result = new Result();
        List<Trips> tripsdata = tripsDao.getAlltrips(trips);
        if(tripsdata != null){
            result.setMsg("Query all succeed");
            result.setData(tripsdata);
            result.setStateCode(200);
        }
        else{
            result.setMsg("Query failes,no tickets");
            result.setStateCode(404);
        }
        return result;
    }

    @Override
    public Result getAimtrips(Trips trips) {
        Result result = new Result();
        Trips tripsdata = tripsDao.getAimtrips(trips);
        if(tripsdata != null){
            result.setMsg("Query all succeed");
            result.setData(trips);
            result.setStateCode(200);
        }
        else{
            result.setMsg("Query failes,no tickets");
            result.setStateCode(404);
        }
        return result;
    }

    @Override
    @Transactional
    public Result buyTicket(String username, int carInfoId, String carNum) {
        Result result = new Result();

        //???????????????????????????id
        User customer = userDao.getUserByUsername(username);
        Person person = personDao.getPersonInfo(customer.getPersonId());
        if (person == null){
            result.setStateCode(400);
            result.setMsg("????????????????????????????????????");
            result.setData(false);
            return result;
        }
        Trips trips = new Trips();
        trips.setCarNum(carNum);
        trips.setId(carInfoId);
        //?????????????????????
        Trips tripsInfoData = tripsDao.getTripsInfoByCarInfoIdAndId(trips);
        //????????????????????????
        Order order = new Order(carInfoId, customer.getPersonId(),0);
        order.setStatus(0);
        if (tripsInfoData.getTicketNum() >= 1){

             orderDao.buyTicket(order);
             trips.setTicketNum(tripsInfoData.getTicketNum() - 1);
             trips.setCarNum(null);
              int i = tripsDao.updateTrips(trips);
            Map<String, Object> detailData = new HashMap<>();

            if (order.getId() > 0 && i == 1){
                //????????????????????????
                  result.setMsg("????????????");
                  result.setStateCode(200);
                  detailData.put("personInfo",person);
                  detailData.put("customer", customer);
                  detailData.put("changeTimes",3 - order.getChangeTimes());
                  detailData.put("order", order);
                  result.setData(detailData);
            }
            return result;
        }
        else {
            //???????????????????????????
            result.setMsg(" ??????????????????????????????");
            result.setStateCode(400);
            result.setData(false);
            return result;
        }
    }

    @Override
    @Transactional
    public Result ticketRetund(int personId , String carNum, String startTime, String reachTime){
        Result result = new Result();
        //??????+1
        int i = tripsDao.refundTrips(personId, carNum, startTime, reachTime);
        //???????????????????????????
        int j = orderDao.updateOrder1(personId, carNum, startTime, reachTime);
        if (i > 0 && j > 0){
            result.setData(true);
            result.setMsg("????????????");
            result.setStateCode(200);
        }else {
            result.setData(false);
            result.setMsg("????????????");
            result.setStateCode(400);
        }
        return result;
    }

    @Override
    @Transactional
    public Result payMoney(int orderId) {
        Result result = new Result();
        if(orderDao.updateOrder(orderId) == 1){
            result.setStateCode(200);
            result.setMsg("????????????");
            result.setData(true);
        }else {
            result.setData(false);
            result.setMsg("??????????????????????????????");
            result.setStateCode(400);
        }
        return result;
    }


}
