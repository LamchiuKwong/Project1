package com.agile.agiletest.entity;

import lombok.Data;

/**
 * person 类
 * 用户对person信息持久化
 */
@Data
public class Person {
    private int id;
    private String trueName;
    private String idCardNum;
    private String phoneNum;
    private int age;

    public Person(int id, String trueName, String idCardNum, String phoneNum, int age) {
        this.id = id;
        this.trueName = trueName;
        this.idCardNum = idCardNum;
        this.phoneNum = phoneNum;
        this.age = age;
    }

    public Person(String trueName, String idCardNum, String phoneNum, int age) {
        this.trueName = trueName;
        this.idCardNum = idCardNum;
        this.phoneNum = phoneNum;
        this.age = age;

    }

    public Person() {

    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", trueName='" + trueName + '\'' +
                ", idCardNum='" + idCardNum + '\'' +
                ", phoneNum='" + phoneNum + '\'' +
                ", age=" + age +
                '}';
    }

}
