AUI.add("aui-form-base",function(C){var I=C.Lang,D=C.ClassNameManager.getClassName,J="form",B=D(J),F=D("field","labels"),E=D("field","labels","inline");CSS_LABEL_ALIGN={left:[F,"left"].join("-"),right:[F,"right"].join("-"),top:[F,"top"].join("-")};var H=function(){H.superclass.constructor.apply(this,arguments);};H.NAME=J;var G=H.prototype;H.ATTRS={action:{value:location.href,getter:G._attributeGetter,setter:G._attributeSetter},id:{},method:{value:"POST",getter:G._attributeGetter,setter:G._attributeSetter},monitorChanges:{value:false},nativeSubmit:{value:false},values:{getter:function(L){var A=this;var K=C.io._serialize(A.get("contentBox").getDOM());return C.QueryString.parse(K);},setter:function(M){var A=this;var K=A._setFieldsObject;var L=A.get("monitorChanges");if(I.isArray(M)){K=A._setFieldsArray;}C.each(M,C.rbind(K,A,L));return C.Attribute.INVALID_VALUE;}},fieldValues:{getter:function(K){var A=this;var L={};A.fields.each(function(N,M,O){L[N.get("name")]=N.get("value");});return L;}},labelAlign:{value:""}};C.extend(H,C.Component,{CONTENT_TEMPLATE:"<form></form>",initializer:function(){var A=this;A.fields=new C.DataSet({getKey:A._getNodeId});},renderUI:function(){var A=this;A._renderForm();},bindUI:function(){var A=this;var K=A.get("nativeSubmit");if(!K){A.get("contentBox").on("submit",A._onSubmit);}A.after("disabledChange",A._afterDisabledChange);A.after("labelAlignChange",A._afterLabelAlignChange);A.after("nativeSubmitChange",A._afterNativeSubmitChange);},syncUI:function(){var A=this;var K=A.get("contentBox");A.set("id",K.guid());A._uiSetLabelAlign(A.get("labelAlign"));},add:function(N,A){var S=this;var O=C.Array(N);var K=O.length;var Q;var N=S.fields;var P=S.get("contentBox");for(var M=0;M<O.length;M++){Q=O[M];Q=C.Field.getField(Q);if(Q&&N.indexOf(Q)==-1){N.add(Q);if(A&&!Q.get("rendered")){var L=Q.get("node");var R=null;if(!L.inDoc()){R=P;}Q.render(R);}}}},clearInvalid:function(){var A=this;A.fields.each(function(L,K,M){L.clearInvalid();});},getField:function(M){var K=this;var L;if(M){var A=K.fields;L=A.item(M);if(!I.isObject(L)){A.each(function(O,N,P){if(O.get("id")==M||O.get("name")==M){L=O;return false;}});}}return L;},invoke:function(L,K){var A=this;return A.fields.invoke(L,K);},isDirty:function(){var A=this;var K=false;A.fields.each(function(M,L,N){if(M.isDirty()){K=true;return false;}});return K;},isValid:function(){var A=this;var K=true;A.fields.each(function(M,L,N){if(!M.isValid()){K=false;return false;}});return K;},markInvalid:function(L){var A=this;var K=A._markInvalidObject;if(I.isArray(L)){K=A._markInvalidArray;}C.each(L,K,A);return A;},remove:function(L,K){var A=this;A.fields.remove(L);if(K){L=A.getField(L);if(L){L.destroy();}}return A;},resetValues:function(){var A=this;A.fields.each(function(L,K,M){L.resetValue();});},submit:function(K){var A=this;var L=A.isValid();if(L){if(A.get("nativeSubmit")){A.get("contentBox").submit();}else{K=K||{};C.mix(K,{id:A.get("id")});C.io(A.get("action"),{form:K,method:A.get("method"),on:{complete:C.bind(A._onSubmitComplete,A),end:C.bind(A._onSubmitEnd,A),failure:C.bind(A._onSubmitFailure,A),start:C.bind(A._onSubmitStart,A),success:C.bind(A._onSubmitSuccess,A)}});}}return L;},_afterDisabledChange:function(K){var A=this;var L="disable";if(K.newVal){L="enable";}A.fields.each(function(N,M,O){N[L];});},_afterLabelAlignChange:function(K){var A=this;A._uiSetLabelAlign(K.newVal,K.prevVal);},_afterNativeSubmitChange:function(L){var A=this;var K=A.get("contentBox");var M="on";if(L.newVal){M="detach";}K[M]("submit",A._onSubmit);},_attributeGetter:function(L,K){var A=this;return A.get("contentBox").attr(K);},_attributeSetter:function(L,K){var A=this;A.get("contentBox").attr(K,L);return L;},_getNodeId:function(L){var K;if(L instanceof C.Field){K=L.get("node");}else{K=C.get(L);}var A=K&&K.guid();return A;},_onSubmit:function(A){A.halt();},_onSubmitComplete:function(K){var A=this;A.fire("complete",{ioEvent:K});},_onSubmitEnd:function(K){var A=this;A.fire("end",{ioEvent:K});},_onSubmitFailure:function(K){var A=this;A.fire("failure",{ioEvent:K});},_onSubmitStart:function(K){var A=this;A.fire("start",{ioEvent:K});},_onSubmitSuccess:function(K){var A=this;A.fire("success",{ioEvent:K});},_renderForm:function(){var A=this;A.get("contentBox").removeClass(B);},_markInvalidArray:function(L,K,N){var A=this;var M=A.getField(L.id);if(M){M.markInvalid(L.message);}},_markInvalidObject:function(L,K,N){var A=this;var M=(!I.isFunction(L))&&A.getField(K);if(M){M.markInvalid(L);}},_setFieldsArray:function(M,L,O,K){var A=this;var N=A.getField(M.id);if(N){N.set("value",M.value);if(K){N.set("prevVal",N.get("value"));}}},_setFieldsObject:function(M,L,O,K){var A=this;var N=(!I.isFunction(M))&&A.getField(L);if(N){N.set("value",M);if(K){N.set("prevVal",N.get("value"));}}},_uiSetLabelAlign:function(L,N){var A=this;var K=A.get("contentBox");K.replaceClass(CSS_LABEL_ALIGN[N],CSS_LABEL_ALIGN[L]);var M="removeClass";if(/right|left/.test(L)){M="addClass";}K[M](E);}});C.Form=H;},"@VERSION@",{requires:["aui-base","aui-data-set","io-form","aui-field","querystring-parse"]});AUI.add("aui-form-combobox",function(B){var F=B.Lang,D=B.ClassNameManager.getClassName,G="combobox",E=D(G);var C=function(){C.superclass.constructor.apply(this,arguments);};C.NAME=G;C.ATTRS={field:{},fieldWidget:{value:B.Textfield},node:{getter:function(){var A=this;if(A._field){return A._field.get("node");}}},tools:{value:["circle-triangle-b"],validator:F.isArray}};B.extend(C,B.Component,{renderUI:function(){var A=this;C.superclass.renderUI.call(A);A._renderField();A._renderTools();},_renderField:function(){var A=this;var H=A.get("contentBox");var I=A.get("field");var J=A.get("fieldWidget");A._field=new J(I).render();H.appendChild(A._field.get("boundingBox"));},_renderTools:function(){var A=this;var I=A.get("tools");if(I.length){var H=new B.ToolSet({tools:I}).render(A.get("contentBox"));A.toolset=H;}}});B.Combobox=C;},"@VERSION@",{skinnable:true,requires:["aui-form-textarea","aui-tool-set"]});AUI.add("aui-form-field",function(R){var H=R.Lang,K=R.ClassNameManager.getClassName,I="field",T=R.cached(function(Z,b){var a=["field"];
if(b){a.push(b);}a=a.join("-");var A=[K(a,Z)];if(Z=="password"){A.push(K(a,"text"));}return A.join(" ");}),D=K(I),Y=K(I,"content"),G=K(I,"input"),P=K(I,"hint"),F=K(I,"invalid"),E=K(I,"label"),C=K(I,"labels"),X=K(I,"labels","inline"),V={left:[C,"left"].join("-"),right:[C,"right"].join("-"),top:[C,"top"].join("-")},M=/left|right/,S='<span class="'+D+'"></span>',W='<span class="'+Y+'"></span>',L='<span class="'+P+'"></span>',Q='<input autocomplete="off" class="{cssClass}" id="{id}" name="{name}" type="{type}" />',N='<label class="'+E+'"></label>',U={};var J=function(){J.superclass.constructor.apply(this,arguments);};var B=J.prototype;J.NAME=I;J.ATTRS={readOnly:{value:false},name:{value:"",getter:function(Z){var A=this;return Z||A.get("id");}},id:{getter:function(a){var A=this;var Z=this.get("node");if(Z){a=Z.get("id");}if(!a){a=R.guid();}return a;}},type:{value:"text",writeOnce:true},labelAlign:{value:""},labelNode:{valueFn:function(){var A=this;return R.Node.create(N);}},labelText:{valueFn:function(){var A=this;return A.get("labelNode").get("innerHTML");},setter:function(Z){var A=this;A.get("labelNode").set("innerHTML",Z);return Z;}},node:{value:null,setter:function(Z){var A=this;return R.get(Z)||A._createFieldNode();}},fieldHint:{value:""},fieldHintNode:{value:null,setter:function(Z){var A=this;return R.get(Z)||A._createFieldHint();}},prevVal:{value:""},valid:{value:true,getter:function(b){var A=this;var Z=A.get("validator");var a=A.get("disabled")||Z(A.get("value"));return a;}},dirty:{value:false,getter:function(a){var A=this;if(A.get("disabled")){a=false;}else{var Z=String(A.get("value"));var b=String(A.get("prevVal"));a=(Z!==b);}return a;}},size:{},validator:{valueFn:function(){var A=this;return A.fieldValidator;},validator:H.isFunction},value:{getter:"_getNodeValue",setter:"_setNodeValue",validator:J.prototype.fieldValidator}};J.HTML_PARSER={labelNode:"label",node:"input, textarea, select"};J.getTypeClassName=T;var O=R.Component.prototype._BIND_UI_ATTRS;O=O.concat(["id","readOnly","name","size","tabIndex","type","value"]);R.extend(J,R.Component,{_BIND_UI_ATTRS:O,BOUNDING_TEMPLATE:S,CONTENT_TEMPLATE:W,FIELD_TEMPLATE:Q,FIELD_TYPE:"text",initializer:function(){var A=this;var Z=A.get("node").guid();U[Z]=A;},renderUI:function(){var A=this;A._renderField();A._renderLabel();A._renderFieldHint();},bindUI:function(){var A=this;A.after("labelAlignChange",A._afterLabelAlignChange);A.after("fieldHintChange",A._afterFieldHintChange);},syncUI:function(){var A=this;A.set("prevVal",A.get("value"));},fieldValidator:function(Z){var A=this;return true;},isValid:function(){var A=this;return A.get("valid");},isDirty:function(){var A=this;return A.get("dirty");},resetValue:function(){var A=this;A.set("value",A.get("prevVal"));A.clearInvalid();},markInvalid:function(Z){var A=this;A.set("fieldHint",Z);A.get("fieldHintNode").show();A.get("boundingBox").addClass(F);},clearInvalid:function(){var A=this;A.reset("fieldHint");if(!A.get("fieldHint")){A.get("fieldHintNode").hide();}A.get("boundingBox").removeClass(F);},validate:function(){var A=this;var Z=A.get("valid");if(Z){A.clearInvalid();}return Z;},_afterFieldHintChange:function(Z){var A=this;A._uiSetFieldHint(Z.newVal,Z.prevVal);},_afterLabelAlignChange:function(Z){var A=this;A._uiSetLabelAlign(Z.newVal,Z.prevVal);},_createFieldHint:function(){var A=this;var Z=R.Node.create(L);A.get("contentBox").append(Z);return Z;},_createFieldNode:function(){var A=this;var Z=A.FIELD_TEMPLATE;A.FIELD_TEMPLATE=R.substitute(Z,{cssClass:G,id:A.get("id"),name:A.get("name"),type:A.get("type")});return R.Node.create(A.FIELD_TEMPLATE);},_getNodeValue:function(){var A=this;return A.get("node").val();},_renderField:function(){var A=this;var c=A.get("node");c.val(A.get("value"));var a=A.get("boundingBox");var Z=A.get("contentBox");var b=A.get("type");a.addClass(T(b));c.addClass(T(b,"input"));if(!Z.contains(c)){if(c.inDoc()){c.placeBefore(a);Z.appendChild(c);}else{Z.appendChild(c);}}a.removeAttribute("tabIndex");},_renderFieldHint:function(){var A=this;var Z=A.get("fieldHint");if(Z){A._uiSetFieldHint(Z);}},_renderLabel:function(){var A=this;var c=A.get("labelText");if(c!==false){var b=A.get("node");var d=b.guid();c=A.get("labelText");var a=A.get("labelNode");a.addClass(K(A.name,"label"));a.setAttribute("for",d);a.set("innerHTML",c);A._uiSetLabelAlign(A.get("labelAlign"));var Z=A.get("contentBox");Z.prepend(a);}},_setNodeValue:function(Z){var A=this;A._uiSetValue(Z);return Z;},_uiSetFieldHint:function(Z,a){var A=this;A.get("fieldHintNode").set("innerHTML",Z);},_uiSetId:function(Z,a){var A=this;A.get("node").set("id",Z);},_uiSetLabelAlign:function(a,c){var A=this;var Z=A.get("boundingBox");Z.replaceClass(V[c],V[a]);var b="removeClass";if(M.test(a)){b="addClass";}Z[b](X);},_uiSetName:function(Z,a){var A=this;A.get("node").setAttribute("name",Z);},_uiSetReadOnly:function(Z,a){var A=this;A.get("node").setAttribute("readOnly",Z);},_uiSetSize:function(Z,a){var A=this;A.get("node").setAttribute("size",Z);},_uiSetTabIndex:function(Z,a){var A=this;A.get("node").setAttribute("tabIndex",Z);},_uiSetValue:function(Z,a){var A=this;A.get("node").val(Z);},_requireAddAttr:false});J.getField=function(b){var c=null;if(b instanceof R.Field){c=b;}else{if(b&&(H.isString(b)||b instanceof R.Node||b.nodeName)){var Z=R.get(b).get("id");c=U[Z];if(!c){var a=b.ancestor(".aui-field");var A=b.ancestor(".aui-field-content");c=new J({boundingBox:a,contentBox:A,node:b});}}else{if(H.isObject(b)){c=new J(b);}}}return c;};R.Field=J;},"@VERSION@",{requires:["aui-base","aui-component","substitute"]});AUI.add("aui-form-manager",function(E){function N(P,A){if(arguments.length===0){return;}if(!A){A={};}this.form_name=P;this.status_node=E.one(A.status_node);this.enabled=true;this.default_value_map=A.default_value_map;this.validation={fn:{},regex:{}};this.validation_msgs={};this.has_messages=false;this.has_errors=false;this.button_list=[];this.user_button_list=[];this.has_file_inputs=false;}var C="(?:^|\\s)(?:";var I=")(?:\\s|$)";
var G="aui-required";var M=/(?:^|\s+)aui-length:\[([0-9]+)?,([1-9][0-9]*)?\](?:\s+|$)/;var L=/(?:^|\s+)aui-integer(?::\[([-+]?[0-9]+)?,([-+]?[0-9]+)?\])?(?:\s+|$)/;var J=/(?:^|\s+)aui-decimal(?::\[([-+]?(?:[0-9]+\.?|[0-9]+\.[0-9]+|\.[0-9]+))?,([-+]?(?:[0-9]+\.?|[0-9]+\.[0-9]+|\.[0-9]+))?\])?(?:\s+|$)/;N.integer_value_re=/^[-+]?[0-9]+$/;N.decimal_value_re=/^[-+]?(?:[0-9]+\.?|[0-9]*\.[0-9]+)$/;N.row_marker_class="aui-field";N.status_marker_class="aui-message-holder";N.status_none_class="aui-helper-hidden";N.status_success_class="aui-status-success";N.status_failure_class="aui-status-failure";N.row_status_prefix="aui-has-";var F=N.status_success_class+"|"+N.status_failure_class;var B=N.row_status_prefix+"([^\\s]+)";var O=new RegExp(C+B+I);N.Strings={validation_error:"Correct errors in the highlighted fields before continuing.",required_string:"This field requires a value.",required_menu:"This field is required. Choose a value from the pull-down list.",length_too_short:"Enter text that is at least {min} characters or longer.",length_too_long:"Enter text that is up to {max} characters long.",length_out_of_range:"Enter text that is {min} to {max} characters long.",integer:"Enter a whole number (no decimal point).",integer_too_small:"Enter a number that is {min} or higher (no decimal point).",integer_too_large:"Enter a number that is {max} or lower (no decimal point).",integer_out_of_range:"Enter a number between or including {min} and {max} (no decimal point).",decimal:"Enter a number.",decimal_too_small:"Enter a number that is {min} or higher.",decimal_too_large:"Enter a number that is {max} or lower.",decimal_out_of_range:"Enter a number between or including {min} and {max}."};N.status_order=["error","warn","success","info"];N.getStatusPrecedence=function(A){for(var P=0;P<N.status_order.length;P++){if(A==N.status_order[P]){return P;}}return N.status_order.length;};N.statusTakesPrecendence=function(P,A){return(!P||N.getStatusPrecedence(A)<N.getStatusPrecedence(P));};N.getElementStatus=function(P){var A=E.one(P).get("className").match(O);if(A&&A.length){return A[1];}else{return false;}};function D(A){if(E.Lang.isString(A)){return A.replace(/^#/,"");}else{if(A instanceof E.Node){return A.get("id");}else{return A.id;}}}function H(A){return(!E.Lang.isUndefined(A)&&A.length>0);}function K(){var S=(this.button_list.length===0);for(var R=0;R<this.form.elements.length;R++){var V=this.form.elements[R];var T=(V.type?V.type.toLowerCase():null);if(S&&(T=="submit"||T=="reset"||T=="button")){this.button_list.push(V);}if(!V.name){continue;}var Q=V.tagName.toLowerCase();var A=this.default_value_map[V.name];if(Q=="input"&&T=="file"){V.value="";}else{if(E.Lang.isUndefined(A)){if(Q=="input"&&(T=="password"||T=="text")){this.default_value_map[V.name]=V.value;}else{if(Q=="input"&&T=="checkbox"){this.default_value_map[V.name]=(V.checked?V.value:"");}else{if(Q=="input"&&T=="radio"){var U=this.form[V.name];if(U&&!U.length){this.default_value_map[V.name]=U.value;}else{if(U){this.default_value_map[V.name]=U[0].value;for(var P=0;P<U.length;P++){if(U[P].checked){this.default_value_map[V.name]=U[P].value;break;}}}}}else{if((Q=="select"&&T=="select-one")||Q=="textarea"){this.default_value_map[V.name]=V.value;}}}}}else{if(Q=="input"&&(T=="password"||T=="text")){V.value=A;}else{if(Q=="input"&&(T=="checkbox"||T=="radio")){V.checked=(V.value==A);}else{if(Q=="select"&&T=="select-one"){V.value=A;if(V.selectedIndex>=0&&V.options[V.selectedIndex].value!==A.toString()){V.selectedIndex=-1;}}else{if(Q=="textarea"){V.value=A;}}}}}}}}N.prototype={getForm:function(){if(!this.form){this.form=document.forms[this.form_name];}return this.form;},hasFileInputs:function(){return this.has_file_inputs;},setDefaultValues:function(A){this.default_value_map=A;},setDefaultValue:function(P,A){this.default_value_map[P]=A;},saveCurrentValuesAsDefault:function(){this.default_value_map={};this.button_list=[];K.call(this);},setFunction:function(P,A){this.validation.fn[D(P)]=A;},setRegex:function(Q,P,A){Q=D(Q);if(E.Lang.isString(P)){this.validation.regex[Q]=new RegExp(P,A);}else{this.validation.regex[Q]=P;}if(!this.validation_msgs[Q]||!this.validation_msgs[Q].regex){}},setErrorMessages:function(P,A){this.validation_msgs[D(P)]=A;},addErrorMessage:function(Q,A,P){Q=D(Q);if(!this.validation_msgs[Q]){this.validation_msgs[Q]={};}this.validation_msgs[Q][A]=P;},clearForm:function(){this.clearMessages();this.form.reset();this.postPopulateForm();},populateForm:function(){if(!this.default_value_map){this.default_value_map={};}this.clearMessages();K.call(this);this.postPopulateForm();},postPopulateForm:function(){},isChanged:function(){for(var Q=0;Q<this.form.elements.length;Q++){var T=this.form.elements[Q];if(!T.name){continue;}var R=(T.type?T.type.toLowerCase():null);var P=T.tagName.toLowerCase();var A=this.default_value_map[T.name];if(A===null||typeof A==="undefined"){A="";}if(P=="input"&&R=="file"){if(T.value){return true;}}else{if(P=="input"&&(R=="password"||R=="text"||R=="file")){if(T.value!=A){return true;}}else{if(P=="input"&&(R=="checkbox"||R=="radio")){var S=(T.value==A);if((S&&!T.checked)||(!S&&T.checked)){return true;}}else{if((P=="select"&&R=="select-one")||P=="textarea"){if(T.value!=A){return true;}}}}}}return false;},prepareForm:function(){this.getForm();if(!this.prePrepareForm.apply(this,arguments)){return false;}this.clearMessages();this.populateForm();return this.postPrepareForm.apply(this,arguments);},prePrepareForm:function(){return true;},postPrepareForm:function(){return true;},initFocus:function(){for(var Q=0;Q<this.form.elements.length;Q++){var S=this.form.elements[Q];if(S.disabled||S.offsetHeight===0){continue;}var A=S.tagName.toLowerCase();var R=(S.type?S.type.toLowerCase():null);if((A=="input"&&(R=="file"||R=="password"||R=="text"))||A=="textarea"){try{S.focus();}catch(P){}S.select();break;}}},validateForm:function(){this.clearMessages();var Q=true;this.has_file_inputs=false;var U=this.form.elements;for(var S=0;S<U.length;S++){if(U[S].type&&U[S].type.toLowerCase()=="file"){this.has_file_inputs=true;
}else{if(U[S].type&&U[S].type.toLowerCase()=="select-multiple"){}else{if(U[S].value){U[S].value=E.Lang.trim(U[S].value);}}}}for(S=0;S<U.length;S++){var R=U[S].id;var W=this.validation_msgs[R];var V=E.one(U[S]).hasClass(G);if(V&&U[S].value===""){var A=null;if(W&&W.required){A=W.required;}else{if(U[S].tagName.toLowerCase()=="select"){A=N.Strings.required_menu;}else{A=N.Strings.required_string;}}this.displayMessage(U[S],A,"error");Q=false;continue;}else{if(!V&&U[S].value===""){continue;}}if(U[S].className){var P=U[S].className.match(M);if(P&&P.length){var A=null;var Y=(H(P[1])&&P[1]!=="0");if(Y&&H(P[2])){A=N.Strings.length_out_of_range;}else{if(Y){A=N.Strings.length_too_short;}else{if(H(P[2])){A=N.Strings.length_too_long;}}}if(H(P[1])&&H(P[2])&&parseInt(P[1],10)>parseInt(P[2],10)){}if(U[S].value&&H(P[1])&&U[S].value.length<parseInt(P[1],10)){if(W&&W.min_length){A=W.min_length;}A=E.substitute(A,{min:parseInt(P[1],10),max:parseInt(P[2],10)});this.displayMessage(U[S],A,"error");Q=false;continue;}if(U[S].value&&H(P[2])&&U[S].value.length>parseInt(P[2],10)){if(W&&W.max_length){A=W.max_length;}A=E.substitute(A,{min:parseInt(P[1],10),max:parseInt(P[2],10)});this.displayMessage(U[S],A,"error");Q=false;continue;}}var P=U[S].className.match(L);if(P&&P.length){var A=null;if(W&&W.integer){A=W.integer;}else{if(H(P[1])&&H(P[2])){if(parseInt(P[1],10)>parseInt(P[2],10)){}A=N.Strings.integer_out_of_range;}else{if(H(P[1])){A=N.Strings.integer_too_small;}else{if(H(P[2])){A=N.Strings.integer_too_large;}else{A=N.Strings.integer;}}}}A=E.substitute(A,{min:parseInt(P[1],10),max:parseInt(P[2],10)});var X=parseInt(U[S].value,10);if(U[S].value&&(!N.integer_value_re.test(U[S].value)||(H(P[1])&&X<parseInt(P[1],10))||(H(P[2])&&X>parseInt(P[2],10)))){this.displayMessage(U[S],A,"error");Q=false;continue;}}var P=U[S].className.match(J);if(P&&P.length){var A=null;if(W&&W.decimal){A=W.decimal;}else{if(H(P[1])&&H(P[2])){if(parseFloat(P[1])>parseFloat(P[2])){}A=N.Strings.decimal_out_of_range;}else{if(H(P[1])){A=N.Strings.decimal_too_small;}else{if(H(P[2])){A=N.Strings.decimal_too_large;}else{A=N.Strings.decimal;}}}}A=E.substitute(A,{min:parseFloat(P[1],10),max:parseFloat(P[2],10)});var X=parseFloat(U[S].value);if(U[S].value&&(!N.decimal_value_re.test(U[S].value)||(H(P[1])&&X<parseFloat(P[1]))||(H(P[2])&&X>parseFloat(P[2])))){this.displayMessage(U[S],A,"error");Q=false;continue;}}}if(this.validation.regex[R]&&!this.validation.regex[R].test(U[S].value)){this.displayMessage(U[S],W?W.regex:null,"error");Q=false;continue;}var T=this.validation.fn[R];var Z=this;if(E.Lang.isFunction(T)){}else{if(E.Lang.isString(T)){T=Z[T];}else{if(T&&T.scope){Z=T.scope;T=(E.Lang.isString(T.fn)?Z[T.fn]:T.fn);}else{T=null;}}}if(T&&!T.call(Z,this.form,E.one(U[S]))){Q=false;continue;}}if(!this.postValidateForm(this.form)){Q=false;}if(!Q){this.notifyErrors();}return Q;},postValidateForm:function(A){return true;},registerButton:function(A){var P={e:E.one(A)};this.user_button_list.push(P);},enableForm:function(){this.setFormEnabled(true);},disableForm:function(){this.setFormEnabled(false);},setFormEnabled:function(A){this.enabled=A;var Q=!A;for(var P=0;P<this.button_list.length;P++){this.button_list[P].disabled=Q;}for(P=0;P<this.user_button_list.length;P++){var R=this.user_button_list[P];R.e.set("disabled",Q);}},hasMessages:function(){return this.has_messages;},hasErrors:function(){return this.has_errors;},getRowStatus:function(P){var A=E.one(P).ancestor("."+N.row_marker_class);return N.getElementStatus(A);},clearMessages:function(){this.has_messages=false;this.has_errors=false;if(this.status_node){this.status_node.set("innerHTML","");this.status_node.replaceClass(F,N.status_none_class);}for(var A=0;A<this.form.elements.length;A++){var Q=this.form.elements[A];var P=E.one(Q).ancestor("."+N.row_marker_class);if(P&&P.hasClass(B)){P.all("."+N.status_marker_class).set("innerHTML","");P.removeClass(B);}}E.one(this.form).all("fieldset").removeClass(B);},displayMessage:function(T,U,R,P){if(E.Lang.isUndefined(P)){P=true;}T=E.one(T);var S=T.ancestor("."+N.row_marker_class);if(S&&N.statusTakesPrecendence(N.getElementStatus(S),R)){if(U){S.all("."+N.status_marker_class).set("innerHTML",U);}S.removeClass(B);S.addClass(N.row_status_prefix+R);var A=T.ancestor("fieldset");if(A&&N.statusTakesPrecendence(N.getElementStatus(A),R)){A.removeClass(B);A.addClass(N.row_status_prefix+R);}if(!this.has_messages&&P&&T.get("offsetHeight")>0){S.scrollIntoView();try{T.focus();}catch(Q){}}this.has_messages=true;if(R=="error"){this.has_errors=true;}}},notifyErrors:function(){this.displayFormMessage(N.Strings.validation_error,true,false);},displayFormMessage:function(Q,P,A){if(E.Lang.isUndefined(A)){A=true;}if(this.status_node){if(!this.status_node.innerHTML){this.status_node.replaceClass(N.status_none_class,(P?N.status_failure_class:N.status_success_class));this.status_node.set("innerHTML",Q);}if(A){this.status_node.scrollIntoView();}}else{}}};E.FormManager=N;},"@VERSION@",{requires:["aui-base","substitute"]});AUI.add("aui-form-textarea",function(C){var F=C.Lang,D=C.ClassNameManager.getClassName,M="textarea",J=D(M),E=[D(M,"height","monitor"),D("field","text","input"),D("helper","hidden","accessible")].join(" "),N="&nbsp;&nbsp;",K="&nbsp;\n&nbsp;",B='<pre class="'+E+'">',L="</pre>",I='<textarea autocomplete="off" class="{cssClass}" name="{name}"></textarea>';var G=function(){G.superclass.constructor.apply(this,arguments);};G.NAME=M;var H=G.prototype;G.ATTRS={autoSize:{value:true},height:{value:"auto"},maxHeight:{value:1000,setter:H._setAutoDimension},minHeight:{value:45,setter:H._setAutoDimension},width:{value:"auto",setter:H._setAutoDimension}};G.HTML_PARSER={node:"textarea"};C.extend(G,C.Textfield,{FIELD_TEMPLATE:I,renderUI:function(){var A=this;G.superclass.renderUI.call(A);if(A.get("autoSize")){A._renderHeightMonitor();}},bindUI:function(){var A=this;G.superclass.bindUI.call(A);if(A.get("autoSize")){A.get("node").on("keyup",A._onKeyup,A);}A.after("adjustSize",A._uiAutoSize);A.after("heightChange",A._afterHeightChange);
A.after("widthChange",A._afterWidthChange);},syncUI:function(){var O=this;G.superclass.syncUI.call(O);O._setAutoDimension(O.get("minHeight"),"minHeight");O._setAutoDimension(O.get("maxHeight"),"maxHeight");var P=O.get("width");var A=O.get("minHeight");O._setAutoDimension(P,"width");O._uiSetDim("height",A);O._uiSetDim("width",P);},_afterHeightChange:function(O){var A=this;A._uiSetDim("height",O.newVal,O.prevVal);},_afterWidthChange:function(O){var A=this;A._uiSetDim("width",O.newVal,O.prevVal);},_onKeyup:function(O){var A=this;A.fire("adjustSize");},_renderHeightMonitor:function(){var O=this;var Q=C.Node.create(B+L);var S=O.get("node");C.getBody().append(Q);O._heightMonitor=Q;var A=S.getComputedStyle("fontFamily");var T=S.getComputedStyle("fontSize");var P=S.getComputedStyle("fontWeight");var R=S.getComputedStyle("fontSize");S.setStyle("height",O.get("minHeight")+"px");Q.setStyles({fontFamily:A,fontSize:T,fontWeight:P});if("outerHTML" in Q.getDOM()){O._updateContent=O._updateOuterContent;}else{O._updateContent=O._updateInnerContent;}},_setAutoDimension:function(P,O){var A=this;A["_"+O]=P;},_uiAutoSize:function(){var O=this;var S=O.get("node");var P=O._heightMonitor;var T=O._minHeight;var R=O._maxHeight;var Q=S.val();var U=document.createTextNode(Q);P.set("innerHTML","");P.appendChild(U);P.setStyle("width",S.getComputedStyle("width"));Q=P.get("innerHTML");if(!Q.length){Q=N;}else{Q+=K;}O._updateContent(Q);var A=Math.max(P.get("offsetHeight"),T);A=Math.min(A,R);if(A!=O._lastHeight){O._lastHeight=A;O._uiSetDim("height",A);}},_uiSetDim:function(P,O){var A=this;var Q=A.get("node");if(F.isNumber(O)){O+="px";}Q.setStyle(P,O);},_updateInnerContent:function(O){var A=this;return A._heightMonitor.set("innerHTML",O);},_updateOuterContent:function(O){var A=this;O=O.replace(/\n/g,"<br />");return A._updateInnerContent(O);}});C.Textarea=G;},"@VERSION@",{skinnable:true,requires:["aui-form-textfield"]});AUI.add("aui-form-textfield",function(B){var F=B.Lang,C=B.ClassNameManager.getClassName,G="textfield",D=C(G);var E=function(){E.superclass.constructor.apply(this,arguments);};E.NAME=G;E.ATTRS={selectOnFocus:{value:false},allowOnly:{value:null,validator:function(H){var A=this;return H instanceof RegExp;}},defaultValue:{value:""},validator:{value:null}};B.extend(E,B.Field,{bindUI:function(){var A=this;E.superclass.bindUI.call(A);var I=A.get("node");if(A.get("allowOnly")){I.on("keypress",A._filterInputText,A);}if(A.get("selectOnFocus")){I.on("focus",A._selectInputText,A);}var H=A.get("defaultValue");if(H){I.on("blur",A._checkDefaultValue,A);I.on("focus",A._checkDefaultValue,A);}},syncUI:function(){var A=this;var I=A.get("value");if(!I){var H=A.get("defaultValue");A.set("value",A.get("defaultValue"));}E.superclass.syncUI.apply(A,arguments);},_filterInputText:function(J){var A=this;var H=A.get("allowOnly");var I=String.fromCharCode(J.charCode);if(!H.test(I)){J.halt();}},_checkDefaultValue:function(M){var A=this;var I=A.get("defaultValue");var L=A.get("node");var K=F.trim(A.get("value"));var J=M.type;var H=(J=="focus"||J=="focusin");if(I){var N=K;if(H&&(K==I)){N="";}else{if(!H&&!K){N=I;}}A.set("value",N);}},_selectInputText:function(H){var A=this;H.currentTarget.select();}});B.Textfield=E;},"@VERSION@",{requires:["aui-form-field"]});AUI.add("aui-form",function(B){},"@VERSION@",{use:["aui-form-base","aui-form-combobox","aui-form-field","aui-form-manager","aui-form-textarea","aui-form-textfield"],skinnable:false});