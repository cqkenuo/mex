webpackJsonp([20],{"BV/y":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("4c0y"),i=e("l8ax"),n=e("KR8W"),r=e("P+7r"),o=e("jkUv"),c=e("4Hxo"),u={components:{Theader:a.default,Tinput:r.a,idcard:o.a,toast:n.a,errbox:i.a,confirm:confirm},data:function(){return{name:"",idcard:"",isAuth:!1,toastText:"",isShowToast:!1,errboxText:"",isShowErrbox:!1}},computed:{disabled:function(){return!(this.name&&this.idcard)}},created:function(){var t=this;Object(c.G)().then(function(s){s.isIdentityAuth=1<=s.identityAuthStatus,s.success&&(t.isAuth=s.isIdentityAuth,t.name=s.name,t.idcard=s.identityNumber)})},methods:{doAuth:function(){var t=this;Object(c._3)(this.name,this.idcard).then(function(s){s.success?(t.isAuth=!0,t.isShowToast=!0,t.toastText="认证成功",setTimeout(function(){return history.backAndReload()},1e3)):(t.isShowErrbox=!0,t.errboxText=s.msg)})}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app app-user-realname",attrs:{id:"app"}},[e("article",{staticClass:"page page-user-realname"},[e("Theader",[t._v("一级认证")]),t._v(" "),e("main",[t._m(0),t._v(" "),e("section",{staticClass:"inputs"},[e("Tinput",{attrs:{value:t.name,readonly:t.isAuth,len:10,tip:"请输入您的姓名"},on:{"update:value":function(s){t.name=s}}}),t._v(" "),e("idcard",{attrs:{value:t.idcard,icon:!1,readonly:t.isAuth},on:{"update:value":function(s){t.idcard=s}}})],1),t._v(" "),e("section",{staticClass:"action"},[e("button",{staticClass:"button",attrs:{disabled:t.disabled||t.isAuth},on:{click:t.doAuth}},[t._v(t._s(t.isAuth?"您已认证":"认证"))])])])],1),t._v(" "),e("toast",{attrs:{show:t.isShowToast,text:t.toastText},on:{"update:show":function(s){t.isShowToast=s}}}),t._v(" "),e("errbox",{attrs:{show:t.isShowErrbox,text:t.errboxText},on:{"update:show":function(s){t.isShowErrbox=s}}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"ctt1"},[s("img",{attrs:{src:e("ZEUC"),alt:"realname"}}),this._v(" "),s("p",{staticClass:"text-stress"},[this._v("为保障您的账户安全，需要进行身份验证")]),this._v(" "),s("p",{staticClass:"text-stress"},[this._v("身份一旦认证无法修改，请仔细填写您的真实信息")])])}]};var h=e("VU/8")(u,d,!1,function(t){e("VxIq"),e("qjzi")},null,null);s.default=h.exports},VxIq:function(t,s){},ZEUC:function(t,s,e){t.exports=e.p+"static/img/user-realname.520be2d.png"},qjzi:function(t,s){}});