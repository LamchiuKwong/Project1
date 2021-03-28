var base_url = "http://localhost:8080";

//隐藏登录
function cambiar_login() {                 //login.html页面的登陆模块的显隐
          document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";    //获取文档中 class="cont_forms" 的第一个满足条件的元素
        document.querySelector('.cont_form_login').style.display = "block";         //显隐关系，block显，none隐
        document.querySelector('.cont_form_sign_up').style.opacity = "0";           //显隐关系，1显，0隐

        setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);

        setTimeout(function(){
        document.querySelector('.cont_form_sign_up').style.display = "none";
        },200);
  }


//隐藏注册
function cambiar_sign_up(at) {                //login.html页面的注册模块的显隐
              document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
              document.querySelector('.cont_form_sign_up').style.display = "block";
            document.querySelector('.cont_form_login').style.opacity = "0";

            setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
            },100);

            setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
            },400);


}    


//隐藏登录注册
function ocultar_login_sign_up() {

        document.querySelector('.cont_forms').className = "cont_forms";
        document.querySelector('.cont_form_sign_up').style.opacity = "0";
        document.querySelector('.cont_form_login').style.opacity = "0";

        setTimeout(function(){
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
        },500);
  
  }


 //登录提交
function loginSubmit(){              //把login.html登陆模块传来的数据进行判断
	var username = $("#username").val();            //val() 方法返回被选元素的值
	var password = $("#password").val();
	//判断
	if(username.length === 0){
		alert("你输入的用户名为空，请重新输入")            //弹窗
		return;
	}
	if(password.length == 0){
		alert("你输入的密码为空，请重新输入")
		return;
	}
	var json= {"username": username ,"password": password};
	//ajax提交数据
	$.ajax({
		type:"post",
		url:base_url +'/login',
		data:JSON.stringify(json),
		contentType:'application/json;charset=utf-8',
		dataType:'json',
		success: function(data){
			if (data.stateCode === 200){
				//跳转到完善个人信息页面
				console.log("loginSubmit函数提交的json信息处理后返回200，将username存储到localStorage。");
				localStorage.setItem("username",data.data.username);//此处存的为json String格式的username
				console.log("loginSubmit函数提交的json信息处理后返回200，准备跳转到完善个人信息的页面。" + data.data.username);//控制台输出信息
				if(data.data.personId > 0){
					window.location.href = 'index.html'
				}else{
                    window.location.href = 'perInfo.html';
				}
			}
			else{
				//异常处理页面
				console.log("loginSubmit函数提交的json信息处理后异常，alert显示错误信息。");//控制台输出信息
				alert("错误信息：" + data.msg);
			}
		}
	})
}

//注册提交
function signupSubmit(){                  //把login.html注册模块传来的数据进行判断
	var username = $("#usernameSignup").val();
	var password = $("#passwordSignup").val();
	var passwordAgain = $("#repasswordSignup").val();
	var json = {"username":username,"password":password,"passwordAgain":passwordAgain}
	//判断
	var msg = ""
	if(username.length === 0){
		alert(msg + "你输入的用户名为空，请重新输入")
		return;
	}
	if(password.length === 0){
        alert(msg + "你输入的密码为空，请重新输入")
		return;
	}
	if(passwordAgain !== password){
		alert("两次输入的密码不一样，请重新输入")
		return;
	}
	//ajax传递数据
	$.ajax({
	    type:'POST',
	    url: base_url +'/regist',
	    data:JSON.stringify(json),
	    contentType:'application/json;charset=utf-8',
	    dataType:'json',
	    success: function(data){
	        if (data.stateCode == "200"){
	            //注册成功
				alert("注册成功，请登录")
	        	console.log("signupSubmit函数提交的json信息处理后返回200，准备跳转到登陆页面。");
	        	// window.location.href = 'login.html';
	        	var url2 = 'http://localhost:8080/static/fontpage/login.html';
                window.location.href = url2;
	        }
	        else{
	            //注册失败,错误信息在data.msg里面
	        	console.log("signupSubmit函数提交的json信息处理后返回错误，alert输出data.msg中的错误信息。");
	            alert("错误信息：" + data.msg)
	        }
	    }
	})
}


//保存用户名——密码
function saveStorage(){
	//以后做自动登陆的时候会用到
	var username = document.getElementById("username").value;
	localStorage.setItem("username",username);
	var password = document.getElementById("password").value;
	localStorage.setItem("password",password);
}