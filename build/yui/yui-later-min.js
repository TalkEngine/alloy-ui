/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("yui-later",function(A){A.later=function(C,H,D,G,F){C=C||0;var B=D,E,I;if(H&&A.Lang.isString(D)){B=H[D];}E=!A.Lang.isUndefined(G)?function(){B.apply(H,A.Array(G));}:function(){B.call(H);};I=(F)?setInterval(E,C):setTimeout(E,C);return{id:I,interval:F,cancel:function(){if(this.interval){clearInterval(I);}else{clearTimeout(I);}}};};A.Lang.later=A.later;},"3.2.0",{requires:["yui-base"]});