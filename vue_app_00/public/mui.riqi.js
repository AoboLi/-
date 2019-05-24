var code;//在全局定义验证码
		function createCode(){
			code="";
			var codeLength=4;//验证码长度
			var checkCode=document.getElementById("code");
			var random=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I");//随机数
			for(var i=0;i<codeLength;i++) {
				var index=Math.floor(Math.random()*19);
				code+=random[index];
			}
			checkCode.value=code//把code值赋值给验证码
		}
		//检查验证码
		function validate(){
			var inputCode=document.getElementById("input").value.toUpperCase();//取得输入的验证码并转化为大写
			if(inputCode.length<=0){
				alert("请输入验证码");
			}else if(inputCode!=code){
				alert("验证码输入错误");
				createCode();//刷新验证码
				document.getElementById("input").value="";//清空文本框
			}else{
				alert("验证通过！");
			}
		}

		