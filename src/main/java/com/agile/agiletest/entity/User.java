package com.agile.agiletest.entity;


import lombok.Data;

/**
 * 用户注册信息
 * 用于存储用户账号信息
 *
 */
@Data
public class User {

    private int id;
    private int personId;
    private String username;
    private String password;


    //  构造方法
    public User(int id, int personId, String username, String password) {
        this.id = id;
        this.personId = personId;
        this.username = username;
        this.password = password;
    }
    //    构造方法
    public User(){}

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", personId=" + personId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
