# Arduino

### 在Arduino Uno板上实现按键控制led亮灭

   * 本实验用具
   	1. Arduino Uno开发板一件
   	2. 面包板一件
   	3. 四角按键一个
   	4. 电阻两个(200Ω)
   	5. 导线若干

* 按一次四角按键开关，Led亮灯，再按一次按键，Led即灭
    1. 本实验默认以Led接入模拟信号11针脚，按键接入2号针脚
    	> Arduino Uno开发板内置上拉电阻，可随时调用

    ```
    	boolean buttonstate = true;//按压按键的状态，默认按下
		boolean ledstate = false;//led状态，默认关闭
		void setup()
		{
  			pinMode(2,INPUT_PULLUP);//INPUT_PULLUP输入上拉电阻(提高电平，使电路稳定)
  			pinMode(11,OUTPUT);
		}

		void loop()
		{
  		while(digitalRead(2) == HIGH){}//循环条件: 读取检测2号针脚是否有高电平
    		if(ledstate == true){//如果灯的状态是亮的
      			digitalWrite(11,LOW);//关灯
      			ledstate=!ledstate;//保持灯的状态
    		} else{
      			digitalWrite(11,HIGH);//开灯
      			ledstate=!ledstate;//保持灯的状态
    		}
  			delay(500);//使灯逐渐亮灭
		}
    ```
    2.附上[Tinkercad](https://www.tinkercad.com/dashboard)仿真的电路图
    ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220313223815.png)

* 长按四角按键开关，Led亮，松开按键，即灭
	1. 本实验默认以Led接入模拟信号11针脚，按键接入2号针脚
		> 本实验外接下拉电阻
		

	```
		boolean buttonstate =0;//按压按键的状态
		void setup()
		{
  			pinMode(11,OUTPUT);
  			pinMode(2,INPUT);
		}
		void loop()
		{
  			buttonstate = digitalRead(2);//读取2号针脚电平，即监视按钮通断
  		if (buttonstate ==HIGH) {//判断是否有高电平
    		digitalWrite(11,HIGH);//Led亮
  		} else {
    		digitalWrite(11,LOW);//Led灭
  		}
		}

	```

	2. 附上[Tinkercad](https://www.tinkercad.com/dashboard)仿真的电路图
		![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220313223100.png)