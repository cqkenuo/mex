webpackJsonp([26],{FUc6:function(t,i){},Fo3Q:function(t,i){},s3Le:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("4c0y"),o=e("l8ax"),a=e("KR8W"),l=e("P+7r"),n=e("l2xq"),r=e("z8lK"),u=e("Xbt8"),c=e("zhgr"),b=e("4Hxo"),h={components:{Theader:s.default,Tinput:l.a,toast:a.a,errbox:o.a,smscode:n.a,emailcode:r.a,mobile:u.a,Tpasswd:c.a},data:function(){return{passwd:"",mobile:"",smscode:"",isMobileAuth:!1,email:"",emailcode:"",isEmailAuth:!1,type:"mobile",toastText:"",isShowToast:!1,errboxText:"",isShowErrbox:!1,isShowTip:!1}},computed:{isMobile:function(){return"mobile"===this.type}},created:function(){this.loadUser()},methods:{loadUser:function(){var t=this;Object(b.y)().then(function(i){i&&i.success&&(i=i.userinfo,t.mobile=i.mobile,t.email=i.email,t.mobile?t.isMobileAuth=!0:t.mobile="",t.email?t.isEmailAuth=!0:t.email="")})},submit:function(){var t=this,i=this.isMobile?this.mobile:this.email,e=this.isMobile?this.smscode:this.emailcode;this.validate()&&Object(b._11)(this.passwd,i,e,this.isMobile?"mobile":"email").then(function(i){i.success?(t.isShowToast=!0,t.toastText=i.msg,setTimeout(function(){return t.goPage("/user/bing")},1e3)):(t.isShowErrbox=!0,t.errboxText=i.msg)})},validate:function(){if(!this.passwd)return this.errboxText="请输入您的登录密码",!(this.isShowErrbox=!0);if(this.isMobile){if(!this.mobile)return this.errboxText="请输入正确的手机号码",!(this.isShowErrbox=!0);if(!this.smscode)return this.errboxText="请输入短信验证码",!(this.isShowErrbox=!0)}else{if(!this.email)return this.errboxText="请输入正确的邮箱地址",!(this.isShowErrbox=!0);if(!this.emailcode)return this.errboxText="请输入邮箱验证码",!(this.isShowErrbox=!0)}return!0},goBack:function(){this.$router.go(-1)},goPage:function(t){this.$router.push(t)}}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app app-user-bing",attrs:{id:"app"}},[e("article",{staticClass:"page page-user-bing"},[e("Theader",[t._v("手机认证")]),t._v(" "),e("main",[t._m(0),t._v(" "),e("section",{staticClass:"selects",staticStyle:{display:"none"}},[e("div",{staticClass:"type-selects"},[e("span",{class:{cur:t.isMobile},on:{click:function(i){t.type="mobile"}}},[t._v("手机认证")]),t._v(" "),e("span",{class:{cur:!t.isMobile},on:{click:function(i){t.type="email"}}},[t._v("邮箱认证")])])]),t._v(" "),e("section",{staticClass:"content inputs"},[!t.isEmailAuth&&"email"==t.type||!t.isMobileAuth&&"mobile"==t.type?e("Tpasswd",{attrs:{value:t.passwd,tip:"请输入您的登录密码"},on:{"update:value":function(i){t.passwd=i}}}):t._e(),t._v(" "),t.isMobile?[e("mobile",{attrs:{value:t.mobile,readonly:t.isMobileAuth},on:{"update:value":function(i){t.mobile=i}}}),t._v(" "),t.isMobileAuth?t._e():e("smscode",{attrs:{value:t.smscode,len:6,mobile:t.mobile,type:"userbing"},on:{"update:value":function(i){t.smscode=i}}})]:t._e(),t._v(" "),t.isMobile?t._e():[e("Tinput",{attrs:{tip:"请输入您的邮箱地址",readonly:t.isEmailAuth,value:t.email,icon:"icon-email"},on:{"update:value":function(i){t.email=i}}}),t._v(" "),t.isEmailAuth?t._e():e("emailcode",{attrs:{value:t.emailcode,len:6,email:t.email,type:"userbing"},on:{"update:value":function(i){t.emailcode=i}}})]],2),t._v(" "),e("section",{staticClass:"content action"},[t.isEmailAuth&&!t.isMobile?e("button",{staticClass:"button",attrs:{disabled:t.isEmailAuth&&!t.isMobile}},[t._v("您已认证")]):t._e(),t._v(" "),t.isMobileAuth&&t.isMobile?e("button",{staticClass:"button",attrs:{disabled:t.isMobileAuth&&t.isMobile}},[t._v("您已认证")]):t._e(),t._v(" "),!t.isEmailAuth&&!t.isMobile||!t.isMobileAuth&&t.isMobile?e("button",{staticClass:"button",on:{click:t.submit}},[t._v("确定")]):t._e()])])],1),t._v(" "),e("toast",{attrs:{show:t.isShowToast,text:t.toastText},on:{"update:show":function(i){t.isShowToast=i}}}),t._v(" "),e("errbox",{attrs:{show:t.isShowErrbox,text:t.errboxText},on:{"update:show":function(i){t.isShowErrbox=i}}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("section",{staticClass:"ctt1"},[i("p",{staticClass:"text-stress"},[this._v("为保障您的账户安全，需要进行手机邮箱验证")]),this._v(" "),i("p",{staticClass:"text-stress"},[this._v("一旦认证无法修改，请仔细填写您的真实信息")])])}]};var d=e("VU/8")(h,m,!1,function(t){e("Fo3Q"),e("FUc6")},null,null);i.default=d.exports}});