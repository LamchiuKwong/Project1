package com.agile.agiletest.controller;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.entity.User;
import com.agile.agiletest.service.LoginService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * login function
 */
@RestController
@CrossOrigin
public class LoginController {
    @Autowired
    private LoginService loginService;

    /**
     * login
     * @param jsonObject
     */
    //http://localhost:8080/static/fontpage/login.html
    @PostMapping("/login")
    @GetMapping("/login")
    @ResponseBody
    public Result login(@RequestBody JSONObject jsonObject){
        User user = new User();
        String password = jsonObject.getString("password");
        String username = jsonObject.getString("username");
        user.setPassword(password);
        user.setUsername(username);
        Result result = loginService.loginIn(user);
        return result;
    }

    /**
     * update user's password

     */
    @PostMapping("/updatePassword")
    public Result updateUser(@RequestBody JSONObject jsonObject){
        User userData = new User();
        userData.setUsername(jsonObject.getString("username"));
        userData.setPassword(jsonObject.getString("passwordOld"));
        String newPassword = jsonObject.getString("passwordNew");
        Result result  = loginService.updateUser(userData, newPassword);
        return result;
    }

    /**
     * user regist
     * @param userData

     */
    @PostMapping("/regist")
    public Result registUser(@RequestBody User userData){

        return loginService.registUser(userData);
    }
}
