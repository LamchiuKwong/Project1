/* Global variables */
//全局变量

"use strict";                           //使用严格模式
function fillerIn() {          //如果未登陆用户无法访问prices.html页面
	var username = localStorage.getItem("username");            //在本地存储获取信息
    if ( username === null){
        window.location.href = 'login.html'                         //在当前页面打开‘ ’里的url
		console.log("xx")
    }else {

    }
}
var base_url = "http://localhost:8080";
var $document = $(document), $window = $(window), plugins = {  //$("#ID")用来代替doucment.getElementById()函数，即通过ID获取元素
	mainSlider : $('#slider'),                                  //$(document)意思是说，获取当前显示的文档对象，$(window)获取全局对象
	categoryCarousel : $('.category-carousel .container'),      //(‘one.two’)的意思是class==two的第一个'one'元素，若无one，则第一个元素
	testimonialsCarousel : $('.testimonials-carousel'),
	brandsCarousel : $('.brands-carousel'),
	textIconCarousel : $('.text-icon-carousel'),
	bulbCarousel : $('.bulb-carousel'),                    //$.function();
	gallery : $('#gallery'),                               //就是 选取 JQuery 定义的 function() 执行
	backToTop : $('.back-to-top'),                         //$('input')
	submenu : $('[data-submenu]'),                         //就是 选取 HTML 当中全部的 input 标签
	isotopeGallery : $('.gallery-isotope'),                //$('#abc')
	postGallery : $('.blog-isotope'),                      //就是 选取 HTML 当中 ID 名称为 abc 的物件
	postCarousel : $('.post-carousel'),                    //$('.XXX'）
	contactForm : $('#contactform'),                       //获得className='xxx'的html标签
	googleMapFooter : $('#footer-map'),
	googleMap : $('#map'),

	queryForm : $('#queryform'),
	perForm : $('#perform'),
	ticketForm : $('#ticketform'),
	pwdForm : $('#pedform')
}, shiftMenu = $('#slidemenu, #page-content, body, .navbar, .navbar-header'), $navbarToggle = $('.navbar-toggle'), $dropdown = $('.dropdown-submenu, .dropdown');

/* Initialize All Scripts */
$document
		.ready(function() {
			var windowWidth = window.innerWidth || $window.width();
			var windowH = $window.height();

			// skew block hover effect   斜块悬停效果
			var $skewblock = $('.skew-wrapper'), $skew = $('.skew', $skewblock); //$(，)两个参数即为在第二个参数范围内通过第一个参数来获取元素，第二个参数不填默认为document

			if ($skewblock.length) {                          //首页index.html里的侏罗纪公园、水上世界、7D电影院模块，点击跳到查票页面prices.html
				$skew.on('mouseenter', function() {                 //当鼠标穿过被选元素时触发function
					$skew.not(this).addClass('min');                // not()为返回删除括号内后的元素，addclass添加class
					$(this).addClass('active');
				}).on('mouseleave', function() {                    //上面on的移出事件
					$skew.removeClass('min active');
				});
			}

			// menu hover effect    菜单悬停效果
			var $electricBtn = $('.electric-btn');   //prices.html页面的首页模块
			if ($electricBtn.length) {
				$electricBtn.each(function() {    //each是遍历
					var $this = $(this), btntext = $('.text', $this).text();
					var mask = '<div class="mask"><span>' + btntext
							+ '</span></div>';
					for (var i = 0; i < 6; i++) {
						$this.append(mask);  //添加子节点
					}
				})
			}

			// back to top     返回顶部
			var backPos;
			if (plugins.backToTop.length) {             //backToTop为plugins里面的一个
				var backPos = plugins.backToTop.offset();   //返回或设置第一个匹配元素的偏移坐标
				if (backPos.top < windowH) {
					plugins.backToTop.hide();           //hide  隐藏被选元素
				}
				plugins.backToTop.on('click', function() {          //点击事件，触发function
					$("html, body").animate({                       //将元素从一个状态改变为另一个状态，CSS属性值是逐渐改变的
						scrollTop : 0                               //返回或设置匹配元素的滚动条的垂直位置
					}, "slow");
					return false;
				});
			}

			// image popup
			if (plugins.gallery.length) {
				plugins.gallery.find('a.hover').magnificPopup({         //find返回被选元素的后代元素，magnificPopup弹窗
					type : 'image',
					gallery : {
						enabled : true                                  //开启画廊模式
					}
				});
			}

			// slider
			if (plugins.mainSlider.length) {                //首页index.html导航栏模块
				plugins.mainSlider.nivoSlider({                     //轮播图插件
					animSpeed : 500,                    //图片切换速度（毫秒）
					pauseTime : 6000,                    //图片停留时间（毫秒）
					pauseOnHover : false,               //当鼠标滑向图片时，停止切换
					effect : 'sliceUpDown',             //图片切换效果
					prevText : '',
					nextText : '',
					controlNav : false                  //是否使用导航控制条，即显示每张图片的按钮
				});
			}

			// testimonials carousel
			if (plugins.testimonialsCarousel.length) {           //首页index.html导航下面的图片
				plugins.testimonialsCarousel.slick({            //幻灯片插件
					mobileFirst : false,        //是否移动设备优先
					slidesToShow : 1,           //当屏幕分辨率大于下面breakpoint最大值时显示的图片数量
					slidesToScroll : 1,         //每次滑动图片的个数
					infinite : true,            //图片是否可循环
					autoplay : true,            //是否自动播放
					autoplaySpeed : 2000,        //自动播放间隔
					arrows : false,             //是否有箭头
					dots : true              //是否有轮播的点出现
				});
			}

			// post carousel
			if (plugins.postCarousel.length) {
				plugins.postCarousel.slick({        //幻灯片插件
					mobileFirst : false,
					slidesToShow : 1,
					slidesToScroll : 1,
					infinite : true,
					autoplay : false,
					autoplaySpeed : 2000,
					arrows : true,
					dots : false
				});
			}

			// brands carousel
			if (plugins.brandsCarousel.length) {
				plugins.brandsCarousel.slick({             //幻灯片插件
					mobileFirst : false,
					slidesToShow : 7,
					slidesToScroll : 1,
					infinite : true,
					autoplay : false,
					autoplaySpeed : 2000,
					arrows : false,
					dots : false,
					variableWidth : true,
					responsive : [ {
						breakpoint : 991,       //屏幕分辨率<991时执行下列属性,且不会继承上面设定的属性
						settings : {
							slidesToShow : 5
						},
					}, {
						breakpoint : 767,
						settings : {
							slidesToShow : 3
						},
					}, {
						breakpoint : 480,
						settings : {
							slidesToShow : 1,
							arrows : true
						},
					} ]
				});
			}

			// mobile carousel
			function slickMobile(carousel) {
				carousel.slick({            //3D幻灯片插件
					mobileFirst : true,
					slidesToShow : 1,
					slidesToScroll : 1,
					infinite : true,
					autoplay : false,
					autoplaySpeed : 2000,
					arrows : true,
					dots : true,
					slide : '.slide-item',      //滑动元素查询
					responsive : [ {
						breakpoint : 767,
						settings : "unslick",
					} ]
				});
			}

			function startCarousel() {                  //调用上方函数
				if (plugins.bulbCarousel.length) {
					slickMobile(plugins.bulbCarousel);
				}
				if (plugins.categoryCarousel.length) {
					slickMobile(plugins.categoryCarousel);
				}
				if (plugins.textIconCarousel.length) {
					slickMobile(plugins.textIconCarousel);
				}
			}
			if (windowWidth < 768) {
				startCarousel();                //调用上方函数
			}

			// submenu          子菜单
			function toggleNavbarMethod(windowWidth) {
				var $dropdownLink = $(".dropdown > a, .dropdown-submenu > a");              //>匹配指定元素的一级子元素,即.dropdown元素下第一级 a 子元素
				var $dropdown = $(".dropdown, .dropdown-submenu");
				var $dropdownCaret = $(".dropdown > a > .ecaret, .dropdown-submenu > a > .ecaret");
				$dropdownLink.on('click.toggleNavbarMethod', function(e) {          //为click绑定一个命名空间
					e.preventDefault();                      //阻止元素发生默认的行为
					e.stopPropagation();                    //阻止任何父事件处理程序被执行
					var url = $(this).attr('href');         //设置或返回被选元素的属性和值
					if (url)
						$(location).attr('href', url);      //$(selector).attr(属性名称,属性的值)
				});
				if (windowWidth > 767) {
					$dropdown.on(
							'mouseenter.toggleNavbarMethod',    //为mouseenter绑定一个命名空间
							function() {
								var $this = $(this);
								$this.find('.dropdown-menu').first().stop(true,  //find返回被选元素的后代元素，first返回被选元素的第一个元素
								true).fadeIn("fast");               //stop停止当前的动画（即第一个动画动画），并移除其余的动画；fadeIn逐渐改变被选元素的不透明度，从隐藏到可见
								$this.toggleClass('open');          //对添加和移除所有“this”元素的 "open" 类进行切换
							}).on(
							'mouseleave.toggleNavbarMethod',        //为mouseleave绑定一个命名空间
							function() {
								var $this = $(this);
								$this.find('.dropdown-menu').first().stop(true,
										true).fadeOut("fast");      //逐渐改变被选元素的不透明度，从可见到隐藏
								$this.toggleClass('open');
							});
				} else {
					$dropdown.unbind('.toggleNavbarMethod');        //移除被选元素的事件处理程序
					$dropdownCaret.unbind('.toggleNavbarMethod');
					$dropdownCaret.on('click.toggleNavbarMethod', function(e) {
						e.stopPropagation();
						e.preventDefault();
						var $li = $(this).parent().parent('li');        //返回被选元素的直接父元素
						if ($li.hasClass('opened')) {               //检查被选元素是否包含指定的类名称
							$li.find('.dropdown-menu').first().stop(true, true)
									.slideUp(0);                    //以滑动方式隐藏被选元素
							$li.removeClass('opened');              //从被选元素移除一个或多个类
						} else {
							$li.find('.dropdown-menu').first().stop(true, true)
									.slideDown(0);                   //以滑动方式显示被选元素
							$li.addClass('opened');                 //从被选元素添加一个或多个类
						}
					})
				}
			}
			toggleNavbarMethod(windowWidth);

			// slide menu
			var $slideNav = $('#slide-nav'), toggler = '.navbar-toggle', $pagewrapper = $('#page-content'), $navigationwrapper = $('.navbar-header'), $slidemenu = $('#slidemenu'), menuwidth = '100%', slidewidth = '270px', menuneg = '-100%', slideneg = '-270px';

			$slideNav.after($('<div id="navbar-height-col"></div>'));       //在被选元素后插入指定的内容
			$slideNav.on("click", toggler, function(e) {
				var $this = $(this);
				var $heightCol = $('#navbar-height-col');
				var selected = $this.hasClass('slide-active');          //检查被选元素是否包含指定的类名称
				$slidemenu.stop().animate({                             //stop():被选元素停止当前正在运行的动画,animate:执行 CSS 属性集的自定义动画
					left : selected ? menuneg : '0px'                   //检查被选元素是否包含指定的类名称,若有，则left=menuneg；否，则left=0px；下面同理
				});
				$heightCol.stop().animate({
					left : selected ? slideneg : '0px'
				});
				$pagewrapper.stop().animate({
					left : selected ? '0px' : slidewidth
				});
				$navigationwrapper.stop().animate({
					left : selected ? '0px' : slidewidth
				});
				$this.toggleClass('slide-active', !selected);               //对添加和移除所有“this”元素的 "slide-active" 类进行切换，然后通过!selected规定只删除或只添加类
				$slidemenu.toggleClass('slide-active');
				$pagewrapper.toggleClass('slide-active');
				$navigationwrapper.toggleClass('slide-active');
				$('.navbar, body').toggleClass('slide-active');
			});
			// END slide menu

			// Isotope
			if (plugins.isotopeGallery.length) {
				var $gallery = plugins.isotopeGallery;
				$gallery.imagesLoaded(function() {              //一款用于检测页面中的图片是否被加载的js插件
					setGallerySize();                           //调用下面的一个自定义函数
				});
				$gallery.isotope({                              //Isotope：一款分类过滤和排序插件
					itemSelector : '.gallery__item',
					masonry : {
						columnWidth : '.gallery__item:not(.doubleW)'
					}
				});
				isotopeFilters($gallery);
			}

			// Isotope Filters (for gallery)
			function isotopeFilters(gallery) {
				var gallery = $(gallery);
				if (gallery.length) {
					var container = gallery;
					var optionSets = $(".filters-by-category .option-set"), optionLinks = optionSets
							.find("a");
					optionLinks.on('click', function(e) {
						var thisLink = $(this);
						if (thisLink.hasClass("selected"))
							return false;
						var optionSet = thisLink.parents(".option-set");
						optionSet.find(".selected").removeClass("selected");
						thisLink.addClass("selected");
						var options = {}, key = optionSet
								.attr("data-option-key"), value = thisLink          //attr设置或返回被选元素的属性和值
								.attr("data-option-value");
						value = value === "false" ? false : value;
						options[key] = value;
						if (key === "layoutMode"
								&& typeof changeLayoutMode === "function")          //typeof用来检测给定变量的数据类型，可能的返回值；changeLayoutMode是isotope里的
							changeLayoutMode($this, options);
						else {
							container.isotope(options);
							setGallerySize();
						}
						return false
					})
				}
			}

			function setGallerySize() {
				var windowW = window.innerWidth || $window.width(), itemsInRow = 2;
				if (windowW > 1199) {
					itemsInRow = 4;
				} else if (windowW > 767) {
					itemsInRow = 4;
				} else if (windowW > 480) {
					itemsInRow = 2;
				}
				var containerW = $('#page-content').width(), galleryW = containerW
						/ itemsInRow;
				$gallery.find('.gallery__item').each(function() {
					$(this).css({
						width : galleryW + 'px'
					});
				});
				$gallery.isotope('layout');
			}

			// Post Isotope
			if (plugins.postGallery.length) {
				var $postgallery = plugins.postGallery;
				$postgallery.imagesLoaded(function() {      //插件
					setPostSize();                          //楼下的一个自定义函数
				});
				$postgallery.isotope({
					itemSelector : '.blog-post',
					masonry : {                             //Masonry是一 个用来布局的jquery插件
						gutter : 30,
						columnWidth : '.blog-post:not(.doubleW)'
					}
				});
			}

			// Post More
			var $postMoreLink = $('.view-more-post'), $postPreload = $('#postPreload');

			$postMoreLink.on('click', function() {
				var item;
				var target = $(this).attr('data-load');
				$(this).hide();             //隐藏被选元素
				$.ajax({                    //用于执行 AJAX（异步 HTTP）请求
					url : target,           //规定发送请求的 URL。默认是当前页面
					success : function(data) {          //当请求成功时运行的函数
						$postPreload.append(data);          //在被选元素的结尾插入指定内容
						if (plugins.postGallery.length) {
							$(' > div', $postPreload).each(
									function() {
										item = $(this);
										$postgallery.append(item).isotope(
												'appended', item);
										setPostSize();
									});
						}
					}
				});
			})

			function setPostSize() {
				var windowW = window.innerWidth || $window.width(), itemsInRow = 1;
				if (windowW > 1199) {
					itemsInRow = 3;
				} else if (windowW > 767) {
					itemsInRow = 2;
				} else if (windowW > 480) {
					itemsInRow = 1;
				}
				var containerW = $('#pageContent .container').width() - 60, galleryW = containerW
						/ itemsInRow;
				$postgallery.find('.blog-post').each(function() {
					if (windowW > 767) {
						$(this).css({               //设置或返回被选元素的一个或多个样式属性
							width : galleryW + 'px'
						});
					} else {
						$(this).css({
							width : galleryW + 60 + 'px'
						});
					}
				});
				setTimeout(function() {         // 是设定一个指定等候时间 (单位是千分之一秒, millisecond), 时间到了, 浏览器就会执行一个指定的代码
					$('.slick-initialized').slick('setPosition');
					$postgallery.isotope('layout');
				}, 100);
			}

			// Contact page form
			if (plugins.contactForm.length) {             //contact.html页面完善个人信息
				var $contactform = plugins.contactForm;   //对标签contactForm的class添加规则
				$contactform.validate({         //一个插件
					rules : {
						trueName : {
							required : true,        // 必输字段
						},
						phone : {
							required : true,
							minlength : 11       //输入长度最小是11的字符串
						},
						identity : {
							required : true,
							minlength : 18
						},
						age : {
							required : true,
						}
					},
					messages : {
						trueName : {
							required : "请输入你的姓名",
						},
						phone : {
							required : "请输入你的电话号码",
							minlength : "你的电话号码应当为11位"
						},
						identity : {
							required : "请输入你的身份证号",
							minlength : "你的身份证号码应当为18位"
						},
						age : {
							required : "请输入你的年龄",
						}
					},
					submitHandler : function(form) {          //更新用户数据
						var trueName = $('#trueName').val();
						var idCardNum = $('#identity').val();
						var phoneNum = $('#phone').val();
						var age = $('#age').val();
						var storage = window.localStorage;      //localStorage读取存储的值
						var username = storage["username"];
						var json = {
							"username" : username,
							"trueName" : "1111",
							"idCardNum" : idCardNum,
							"phoneNum" : phoneNum,
							"age" : age
						}
						$(form).ajaxSubmit({
							type : "POST",              //指定提交表单数据的方法：“GET”或“POST”
							url : base_url +'/updateUserInfo',      //指定提交表单数据的URL
							data : JSON.stringify(json),            //一个包含附加数据的对象，用来在提交时附加自己的数据
							contentType : 'application/json;charset=utf-8',     //设置发送信息至服务器时内容编码类型若无设置datatype，则选择此类型
							dataType : 'json',                  //期望返回的数据类型。null、“xml”、“script”或者“json”其中之一
							success : function(data) {          //成功后执行的函数
								if (data.stateCode == "200") {
									// 修改成功
									$('#success').fadeIn();     //逐渐改变被选元素的不透明度，从隐藏到可见
									$('#contactform').each(function() {
										this.reset();           //重置表单
									});
								} else {
									// 注册失败,错误信息在data.msg里面
									alert("错误信息：" + data.msg);

								}
							},
							error : function() {
								$('#contactform').fadeTo("slow", 0, function() {        ////逐渐改变被选元素的不透明度，从可见到隐藏
									$('#error').fadeIn();       //逐渐改变被选元素的不透明度，从隐藏到可见
								});
							}
						});
					}
				});
			}
			// ticketform
			if (plugins.ticketForm.length) {
				var $ticketform = plugins.ticketForm;            //获取订单
				$ticketform.validate({              //验证功能的插件，有订单则执行
					submitHandler : function(form) {            //prices.html页面付款按键
						var storage = window.localStorage;
						var username = storage["username"];
						var carNum = $('#carNum').val();
						var startTime  = $('#startTime').val()
						var json = {
							"username" : username,
							"carNum" :carNum ,
							"startTime": startTime
						}
                        $.ajax({
                            type:"post",
                            url:base_url + '/buyticket',
                            data:JSON.stringify(json),
                            contentType:'application/json;charset=utf-8',
                            dataType:'json',
                            success: function(data){
                                if (data.stateCode === 200){
                                    // 付款成功
                                    console.log("成功付款转向订单页面");
                                    window.location.href = 'orderForm.html';        //当前页面打开URL页面
                                }
                                else{
                                    // 付款失败,错误信息在data.msg里面
                                    alert("错误信息：" + data.msg);          //弹窗
                                }
                            }
                        })

					}
				});
			}
			// queryform
			if (plugins.queryForm.length) {                    //在prices.html页面中的查询按钮
				var $queryform = plugins.queryForm;
				$queryform
						.validate({                                 //验证插件，有数据则更新
							submitHandler : function(form) {
								var orginLocation = $("#source").val();
								var destinationLocation = $("#target").val();
								var startTime = $("#date").val();
								var json = {
									"orginLocation" : orginLocation,
									"destinationLocation" : destinationLocation,
									"startTime" : startTime
								}

                                $.ajax({                //一种与服务器交换数据的技术，可以在不重新载入整个页面的情况下更新网页的一部分
                                    type:"post",
                                    url:base_url +'/getalltrips',
                                    data:JSON.stringify(json),
                                    contentType:'application/json;charset=utf-8',
                                    dataType:'json',
                                    success : function(data) {

                                        if (data.stateCode === 200) {
											window.localStorage.setItem("ticketItem", JSON.stringify(data.data))        //setItem存储对象，stringify从一个对象中解析出字符串
                                            $("#ticketTable").find("tr:not(:first)").remove()       //移除被选元素，包括所有的文本和子节点
                                            // $("#ticketTable").html("");
                                            // 修改成功
                                            console.log(data.data[0])
                                            // 在表格中呈现数据
                                            for (var i = 0;i<data.data.length; i++) {
                                                var tr;
                                                tr = '<td>'
                                                    + data.data[i].orginLocation
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].startTime
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].destinationLocation
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].reachTime
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].carNum
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].ticketPrice
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].ticketNum
                                                    + '</td>'
                                                    + '<td>'
                                                    + '<button onclick="pay('+ i +')">购票</button>'
                                                    + '</td>';
                                                $("#ticketTable")
                                                    .append(
                                                        '<tr>'
                                                        + tr
                                                        + '</tr>');
                                            }

                                        } else {
                                            // 注册失败,错误信息在data.msg里面
                                            alert("错误信息："
                                                + data.msg);

                                        }
                                    },
                                })

							}
						});
			}


			if (plugins.perForm.length) {                 //初次登陆时完善个人信息的页面perlnfo.html
				var $perform = plugins.perForm;
				$perform                                    //创建规则
						.validate({                             //验证插件
							rules : {
								trueName : {
									required : true,
								},
								phone : {
									required : true,
									minlength : 11
								},
								identity : {
									required : true,
									minlength : 18
								},
								age : {
									required : true,
								}
							},
							messages : {
								trueName : {
									required : "请输入你的姓名",
								},
								phone : {
									required : "请输入你的电话号码",
									minlength : "你的电话号码应当为11位"
								},
								identity : {
									required : "请输入你的身份证号",
									minlength : "你的身份证号码应当为18位"
								},
								age : {
									required : "请输入你的年龄",
								}
							},
							submitHandler : function(form) {
								var trueName = $('#trueName').val();
								var idCardNum = $('#identity').val();
								var phoneNum = $('#phone').val();
								var age = $('#age').val();
								var storage = window.localStorage;
								var username = storage["username"];
								var json = {
									"username" : username,
									"trueName" : trueName,
									"idCardNum" : idCardNum,
									"phoneNum" : phoneNum,
									"age" : age
								}
								console.log(json)
                                ///

                                $.ajax({                                //在不刷新整个页面的情况下刷新数据
                                    type:"post",
                                    url:base_url +'/updateUserInfo',
                                    data:JSON.stringify(json),
                                    contentType:'application/json;charset=utf-8',
                                    dataType:'json',
                                    success: function(data){
                                        console.log(data.stateCode)
                                        if (data.stateCode === 200) {

                                            // 修改成功
                                            alert("用户信息修改成功，跳转到首页")
                                            $('#success')
                                                .fadeIn();                      //更改不透明度，从隐藏到可见
                                            $('#perform')
                                                .each(
                                                    function() {
                                                        this
                                                            .reset();
                                                    });
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交成功，准备转向系统首页");
                                            window.location.href = 'index.html';
                                        } else {
                                            // 注册失败,错误信息在data.msg里面
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交失败,alert输出data.msg");
                                            alert("错误信息："
                                                + data.msg);

                                        }
                                    }
                                })
							}
						});
			}
			if (plugins.perForm.length) {                 //重复了的吧与上面一样
				var $perform = plugins.perForm;
				$perform
						.validate({
							rules : {
								trueName : {
									required : true,
								},
								phone : {
									required : true,
									minlength : 11
								},
								identity : {
									required : true,
									minlength : 18
								},
								age : {
									required : true,
								}
							},
							messages : {
								trueName : {
									required : "请输入你的姓名",
								},
								phone : {
									required : "请输入你的电话号码",
									minlength : "你的电话号码应当为11位"
								},
								identity : {
									required : "请输入你的身份证号",
									minlength : "你的身份证号码应当为18位"
								},
								age : {
									required : "请输入你的年龄",
								}
							},
							submitHandler : function(form) {
								var trueName = $('#trueName').val();
								var idCardNum = $('#identity').val();
								var phoneNum = $('#phone').val();
								var age = $('#age').val();
								var storage = window.localStorage;
								var username = storage["username"];
								var json = {
									"username" : username,
									"trueName" : trueName,
									"idCardNum" : idCardNum,
									"phoneNum" : phoneNum,
									"age" : age
								}
                                $.ajax({
                                    type:"post",
                                    url:base_url +'/updateUserInfo',
                                    data:JSON.stringify(json),
                                    contentType:'application/json;charset=utf-8',
                                    dataType:'json',
                                    success: function(data){
                                        console.log(data.stateCode)
                                        if (data.stateCode === 200) {
                                            // 修改成功
                                            $('#success')
                                                .fadeIn();
                                            $('#perform')
                                                .each(
                                                    function() {
                                                        this
                                                            .reset();
                                                    });
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交成功，准备转向系统首页");
                                            window.location.href = 'index.html';
                                        } else {
                                            // 注册失败,错误信息在data.msg里面
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交失败,alert输出data.msg");
                                            alert("错误信息："
                                                + data.msg);

                                        }
                                    }
                                })

							}
						});
			}

			// Resize window events
			$window.resize(function() {                 //当调整浏览器窗口大小时，发生 resize 事件
				var windowWidth = window.innerWidth || $window.width();
				if (windowWidth < 768) {
					startCarousel();
				}
				if (windowWidth > 767 && $navbarToggle.is(':hidden')) {         //查看选择的元素是否匹配选择器
					shiftMenu.removeClass('slide-active');              //从被选元素移除一个或多个类
				}
				setTimeout(function() {
					if (plugins.isotopeGallery.length) {
						setGallerySize();                   //自定义函数
					}
					if (plugins.postGallery.length) {
						setPostSize();                  //自定义函数
					}
				}, 500);
				setTimeout(function() {
					$dropdown.removeClass('opened');
					toggleNavbarMethod(windowWidth);        //自定义函数
				}, 1000);
			});
		})

$window.on('load', function() {
	setTimeout(function() {
		$('#loader-wrapper').fadeOut(500);          //改变不透明度，从可见到隐藏
	}, 500);

	function createMap(id, mapZoom) {
		// Create google map  创建谷歌地图
		// Basic options for a simple Google Map        简单Google地图的基本选项
		// For more options see:
		// https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)     您希望地图从何处开始放大（始终是必需的）
			zoom : mapZoom,
			scrollwheel : false, // The latitude and longitude to center the
			// map (always required)            地图中心的纬度和经度（始终是必需的）
			center : new google.maps.LatLng(55.8610112, -4.2547319), // Glasgow
			// How you would like to style the map.     您希望如何设置地图的样式。
			// This is where you would paste any style found on Snazzy Maps.        在这里你可以粘贴在时髦的地图上找到的任何样式。
			styles : [ {
				"featureType" : "water",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#e9e9e9"
				}, {
					"lightness" : 17
				} ]
			}, {
				"featureType" : "landscape",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#f5f5f5"
				}, {
					"lightness" : 20
				} ]
			}, {
				"featureType" : "road.highway",
				"elementType" : "geometry.fill",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 17
				} ]
			}, {
				"featureType" : "road.highway",
				"elementType" : "geometry.stroke",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 29
				}, {
					"weight" : 0.2
				} ]
			}, {
				"featureType" : "road.arterial",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 18
				} ]
			}, {
				"featureType" : "road.local",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 16
				} ]
			}, {
				"featureType" : "poi",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#f5f5f5"
				}, {
					"lightness" : 21
				} ]
			}, {
				"featureType" : "poi.park",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#dedede"
				}, {
					"lightness" : 21
				} ]
			}, {
				"elementType" : "labels.text.stroke",
				"stylers" : [ {
					"visibility" : "on"
				}, {
					"color" : "#ffffff"
				}, {
					"lightness" : 16
				} ]
			}, {
				"elementType" : "labels.text.fill",
				"stylers" : [ {
					"saturation" : 36
				}, {
					"color" : "#333333"
				}, {
					"lightness" : 40
				} ]
			}, {
				"elementType" : "labels.icon",
				"stylers" : [ {
					"visibility" : "off"
				} ]
			}, {
				"featureType" : "transit",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#f2f2f2"
				}, {
					"lightness" : 19
				} ]
			}, {
				"featureType" : "administrative",
				"elementType" : "geometry.fill",
				"stylers" : [ {
					"color" : "#fefefe"
				}, {
					"lightness" : 20
				} ]
			}, {
				"featureType" : "administrative",
				"elementType" : "geometry.stroke",
				"stylers" : [ {
					"color" : "#fefefe"
				}, {
					"lightness" : 17
				}, {
					"weight" : 1.2
				} ]
			} ]
		};
		// Get the HTML DOM element that will contain your map          获取包含映射的HTML DOM元素
		// We are using a div with id="map" seen below in the <body>        我们使用的div id=“map”如下<body>
		var mapElement = document.getElementById(id);
		// Create the Google Map using our element and options defined above        使用上面定义的元素和选项创建Google地图
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = 'images/map-marker.png';
		// Let's also add a marker while we're at it            我们在做的时候再加一个标记
		var marker = new google.maps.Marker({
			position : new google.maps.LatLng(55.8610112, -4.2547319),
			map : map,
			icon : image
		});

	}

	if (plugins.googleMapFooter.length) {
		createMap('footer-map', 14)
	}
	if (plugins.googleMap.length) {
		createMap('map', 12)
	}

});

function change() {         //没用到
	//console.log("实现用户改签的操作");
	//需要添加数据项的是changeTable
	
}
function pay(i) {
	// 把信息呈现在页面下面的输入框当中
	// var ticket = JSON.stringify(json);
	// localStorage.setItem("ticket", ticket);// 此处存的为json String格式的ticket
	// 查询个人信息

	var storage = window.localStorage;
	var username = storage["username"];
	var ticketItem = storage.getItem("ticketItem");         //获取指定“ticketItem”本地存储的值
	ticketItem = JSON.parse(ticketItem)             //从一个字符串中解析出json对象
	// ajax
	var json = {
		"username" : username
	}
	// ajax提交数据
	$.ajax({                            //在不刷新整个页面的情况下刷新数据
		type : 'POST',
		url : base_url +'/getpersoninfo',
		data : JSON.stringify(json),
		contentType : 'application/json;charset=utf-8',
		dataType : 'json',
		success : function(data) {
			if (data.stateCode == "200") {
				// 个人信息查询成功
				// var storage = window.localStorage;
				// var ticket = storage["ticket"];
				// ticket = JSON.parse(ticket);
				console.log("用户点击预定呈现出详细信息");
				$("#trueName").val(data.data.trueName);         //当用于返回值时：该方法返回第一个匹配元素的 value 属性的值
				$("#phone").val(data.data.phoneNum);            //当用于设置值时：该方法设置所有匹配元素的 value 属性的值
				$("#identity").val(data.data.idCardNum);
				// console.log(ticketItem)
				$("#carNum").val(ticketItem[i].carNum);
				$("#orginLocation").val(ticketItem[i].orginLocation);
				$("#destinationLocation").val(ticketItem[i].destinationLocation);
				$("#startTime").val(ticketItem[i].startTime);
				$("#reachTime").val(ticketItem[i].reachTime);
				$("#ticketPrice").val(ticketItem[i].ticketPrice);
				storage.removeItem('ticketItem');// 清除留存的信息
				alert("请确认订单信息无误后再付款")
			} else
				// 查询失败,错误信息在data.msg里面（未填写个人信息，请完善个人信息）
				alert("错误信息：" + data.msg)

		}
	})
}