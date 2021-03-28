package com.agile.agiletest.Result;

import lombok.Data;

/**
 * 数据传输类
 */

@Data
public class Result {
    private int stateCode;
    private Object data;
    private String msg;

    public Result(){

    }

}
