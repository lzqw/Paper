(function(g){var window=this;'use strict';var Bpb=function(a,b){g.U.call(this,{I:"button",Ma:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],W:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},V:[{I:"svg",W:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},V:[{I:"g",W:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},V:[{I:"g",W:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
V:[{I:"path",W:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Sa("click",this.onClick,this);this.updateValue("title",g.MU(a,"\u5c55\u5f00","i"));this.update({"data-title-no-tooltip":"\u5c55\u5f00"});g.ub(this,g.GU(b.Dc(),this.element))},Cpb=function(a){g.U.call(this,{I:"div",
S:"ytp-miniplayer-ui"});this.pg=!1;this.player=a;this.T(a,"minimized",this.Ch);this.T(a,"onStateChange",this.tR)},Dpb=function(a){g.xV.call(this,a);
this.B=new g.TK(this);this.j=new Cpb(this.player);this.j.hide();g.qU(this.player,this.j.element,4);a.rg()&&(this.load(),g.qu(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(Bpb,g.U);Bpb.prototype.onClick=function(){this.J.Ra("onExpandMiniplayer")};g.w(Cpb,g.U);g.k=Cpb.prototype;
g.k.gO=function(){this.tooltip=new g.WX(this.player,this);g.L(this,this.tooltip);g.qU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.hd=new g.dW(this.player);g.L(this,this.hd);this.rk=new g.U({I:"div",S:"ytp-miniplayer-scrim"});g.L(this,this.rk);this.rk.Ea(this.element);this.T(this.rk.element,"click",this.iJ);var a=new g.U({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"\u5173\u95ed"},V:[g.uG()]});g.L(this,a);a.Ea(this.rk.element);this.T(a.element,"click",
this.Gp);a=new Bpb(this.player,this);g.L(this,a);a.Ea(this.rk.element);this.hv=new g.U({I:"div",S:"ytp-miniplayer-controls"});g.L(this,this.hv);this.hv.Ea(this.rk.element);this.T(this.hv.element,"click",this.iJ);var b=new g.U({I:"div",S:"ytp-miniplayer-button-container"});g.L(this,b);b.Ea(this.hv.element);a=new g.U({I:"div",S:"ytp-miniplayer-play-button-container"});g.L(this,a);a.Ea(this.hv.element);var c=new g.U({I:"div",S:"ytp-miniplayer-button-container"});g.L(this,c);c.Ea(this.hv.element);this.YY=
new g.iX(this.player,this,!1);g.L(this,this.YY);this.YY.Ea(b.element);b=new g.hX(this.player,this);g.L(this,b);b.Ea(a.element);this.nextButton=new g.iX(this.player,this,!0);g.L(this,this.nextButton);this.nextButton.Ea(c.element);this.Gj=new g.PX(this.player,this);g.L(this,this.Gj);this.Gj.Ea(this.rk.element);this.Sc=new g.nX(this.player,this);g.L(this,this.Sc);g.qU(this.player,this.Sc.element,4);this.QI=new g.U({I:"div",S:"ytp-miniplayer-buttons"});g.L(this,this.QI);g.qU(this.player,this.QI.element,
4);a=new g.U({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"\u5173\u95ed"},V:[g.uG()]});g.L(this,a);a.Ea(this.QI.element);this.T(a.element,"click",this.Gp);a=new g.U({I:"button",Ma:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"\u5173\u95ed"},V:[g.Zua()]});g.L(this,a);a.Ea(this.QI.element);this.T(a.element,"click",this.Q8);this.T(this.player,"presentingplayerstatechange",this.Xd);this.T(this.player,"appresize",this.Lb);this.T(this.player,"fullscreentoggled",
this.Lb);this.Lb()};
g.k.show=function(){this.yf=new g.cu(this.ww,null,this);this.yf.start();this.pg||(this.gO(),this.pg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Sc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.yf&&(this.yf.dispose(),this.yf=void 0);g.U.prototype.hide.call(this);this.player.rg()||(this.pg&&this.Sc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.yf&&(this.yf.dispose(),this.yf=void 0);g.U.prototype.ya.call(this)};
g.k.Gp=function(){this.player.stopVideo();this.player.Ra("onCloseMiniplayer")};
g.k.Q8=function(){this.player.playVideo()};
g.k.iJ=function(a){if(a.target===this.rk.element||a.target===this.hv.element)g.QL(this.player.Tb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Ch=function(){g.qu(this.player.getRootNode(),"ytp-player-minimized",this.player.rg())};
g.k.Ye=function(){this.Sc.Hc();this.Gj.Hc()};
g.k.ww=function(){this.Ye();this.yf&&this.yf.start()};
g.k.Xd=function(a){g.VG(a.state,32)&&this.tooltip.hide()};
g.k.Lb=function(){g.zX(this.Sc,0,this.player.qb().getPlayerSize().width,!1);g.oX(this.Sc)};
g.k.tR=function(a){this.player.rg()&&(0===a?this.hide():this.show())};
g.k.Dc=function(){return this.tooltip};
g.k.Lg=function(){return!1};
g.k.wg=function(){return!1};
g.k.mm=function(){return!1};
g.k.fK=function(){};
g.k.mq=function(){};
g.k.Yy=function(){};
g.k.jn=function(){return null};
g.k.xH=function(){return null};
g.k.xN=function(){return new g.ve(0,0)};
g.k.Pk=function(){return new g.Ar(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Iw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Or(a);if(b){c=g.lu(b,"ytp-prev-button")||g.lu(b,"ytp-next-button");var m=g.lu(b,"ytp-play-button"),n=g.lu(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Mr(b,this.element),h=b.x,f=b.y-12):n&&(h=g.lu(b,"ytp-miniplayer-button-top-left"),f=g.Mr(b,this.element),b=g.Or(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.le(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Vp=function(){};
g.k.Zl=function(){return!1};
g.k.sF=function(){};
g.k.ZA=function(){};
g.k.Dr=function(){};
g.k.Cr=function(){};
g.k.Mu=function(){};
g.k.Ks=function(){};
g.k.aF=function(){};g.w(Dpb,g.xV);g.k=Dpb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.qu(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.xV.prototype.create.call(this);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.vl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.wV("miniplayer",Dpb);})(_yt_player);
