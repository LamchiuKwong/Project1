package com.agile.agiletest.service.impl;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.dao.PersonDao;
import com.agile.agiletest.dao.UserDao;
import com.agile.agiletest.entity.Person;
import com.agile.agiletest.entity.User;
import com.agile.agiletest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Autowired
    private PersonDao personDao;

    @Override
    @Transactional
    public Result updateUserInfo(String username, Person person) {
        User user = userDao.getUserByUsername(username);
        Result result = new Result();
        result.setMsg("update fail, please update again");
        result.setStateCode(404);
        result.setData(false);
        if (user != null ) {
            if( user.getPersonId() > 0) {
                person.setId(user.getPersonId());
                int i = personDao.updateUserInfo(person);
                if (i == 1) {
                    result.setMsg("update success");
                    result.setStateCode(200);
                    result.setData(true);
                }
            } else {
               int i =  personDao.insertUserInfo(person);
                if (i == 1){
                    user.setPersonId(person.getId());
                    int j = userDao.updateUserRegisterInfo(user);
                    if (j == 1){
                        result.setMsg("update success");
                        result.setStateCode(200);
                        result.setData(true);
                    }
                }
            }
        }
        return result;
    }

    @Override
    public Result getPersonInfo(String username) {
        Result result = new Result();
        Person person = personDao.getPersonInfo1(username);
        if (person == null) {
            result.setStateCode(400);
            result.setMsg("?????????????????????????????????????????????");
            result.setData(null);
        } else {
            result.setStateCode(200);
            result.setMsg("????????????????????????????????????");
            result.setData(person);
        }
        return result;
    }
}
