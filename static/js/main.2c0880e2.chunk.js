(this["webpackJsonpredux-shop"]=this["webpackJsonpredux-shop"]||[]).push([[0],{37:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(2),i=t.n(s),r=t(17),n=t.n(r),d=t(11),l=t(4),o=t(9),j=t(13);const m={products:[{id:1,name:"food card",description:"This card is used for spending on Food merchants",final_price:21,original_price:30,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",quantity:1},{id:2,name:"travel card",description:"This card is used for spending on Travel and hotel bookings",final_price:20,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",quantity:1},{id:3,name:"epic card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",quantity:1},{id:4,name:"happay premium card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",quantity:1}],product:{}};var p=(e=m,c)=>{switch(c.type){case"PRODUCT":return{...e};default:return e}};const b={products:[],totalPrice:0,totalQuantities:0,deliveryPrice:5,taxAndCharges:2};var h=(e=b,c)=>{let t,a;switch(c.type){case"ADD_TO_CART":const{product:s,quantity:i}=c.payload;if(e.products.find((e=>e.id===s.id)))return e;{const c=e.totalPrice+s.final_price*i,t=e.totalQuantities+i;return s.quantity=i,{...e,products:[...e.products,s],totalPrice:c,totalQuantities:t}}case"INC":return t=e.products.find((e=>e.id===c.payload)),a=e.products.findIndex((e=>e.id===c.payload)),t.quantity+=1,e.products[a]=t,{...e,totalPrice:e.totalPrice+t.final_price,totalQuantities:e.totalQuantities+1};case"DEC":return t=e.products.find((e=>e.id===c.payload)),a=e.products.findIndex((e=>e.id===c.payload)),t.quantity>1?(t.quantity-=1,e.products[a]=t,{...e,totalPrice:e.totalPrice-t.final_price,totalQuantities:e.totalQuantities-1}):e;case"REMOVE":t=e.products.find((e=>e.id===c.payload));const r=e.products.filter((e=>e.id!==c.payload));return{...e,products:r,totalPrice:e.totalPrice-t.final_price*t.quantity,totalQuantities:e.totalQuantities-t.quantity};default:return e}},u=t(25);const O=Object(j.combineReducers)({ProductsReducer:p,CartReducer:h});var x=Object(j.createStore)(O,Object(u.devToolsEnhancer)()),v=(t(37),t(26));function _(){return(_=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var N=s.createElement("desc",null,"Created with Sketch."),g=s.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"Happay-cards-HOME",transform:"translate(-62.000000, -35.000000)",fill:"#1D7CBF",fillRule:"nonzero"},s.createElement("g",{id:"Group-12",transform:"translate(62.000000, 32.000000)"},s.createElement("g",{id:"Group",transform:"translate(0.000000, 3.000000)"},s.createElement("path",{d:"M29.9367692,-2.27373675e-13 C33.2826974,-2.27373675e-13 35.9961796,2.70538719 36,6.04514742 L36,29.9548526 C35.9961796,33.2946128 33.2826974,36 29.9367692,36 L6.05630769,36 C2.71308288,35.9961919 0.00381516384,33.2919167 3.12638804e-13,29.9548526 L3.12638804e-13,6.04514742 C0.00381516384,2.70808334 2.71308288,0.00380813344 6.05630769,-2.27373675e-13 L29.9367692,-2.27373675e-13 Z M29.9367692,1.09874079 L6.05630769,1.10288698 C3.32534217,1.11048608 1.11377762,3.31921056 1.10769231,6.04514742 L1.10769231,29.9548526 C1.11150562,32.6850994 3.32794353,34.8974529 6.06323077,34.9012592 L29.9367692,34.9012592 C32.6723723,34.8982126 34.8892554,32.6854146 34.8923077,29.9548526 L34.8923077,6.04514742 C34.8892554,3.31458543 32.6723723,1.10178744 29.9367692,1.09874079 Z M31.8464377,8.71268071 C31.9387646,9.01663866 32.0068278,9.32762247 32.0499699,9.64262857 C32.1044019,9.97951541 32.1354404,10.3198555 32.1428571,10.6611429 C32.1319292,12.7908895 31.3751717,14.4127629 29.9750337,15.7523306 C28.9713446,16.7257604 27.6959054,17.362155 26.3223811,17.5748624 C25.7309081,17.6703481 25.1326053,17.662045 24.5370344,17.7007928 C23.2943762,17.7758097 22.065432,18.0044575 20.8775518,18.3816475 C19.3148612,18.8867531 18.4187729,20.0035209 18.0759098,21.6074041 C17.813645,22.8323008 17.6410608,24.0751523 17.5595662,25.3258117 C17.4366273,27.27289 16.7399733,28.9736429 15.3111495,30.3256653 C14.3015737,31.2947466 13.0107122,31.9085846 11.6298111,32.0762368 C9.76113913,32.3197946 8.04818982,31.9004877 6.55379864,30.736669 C5.05940746,29.5728504 4.19610286,28.0035634 3.92290521,26.1104552 C3.44207733,22.769839 5.6372205,19.2991407 9.22157376,18.4577593 C9.81228518,18.3326861 10.4131442,18.263198 11.0164824,18.2501817 C12.4199994,18.1950273 13.814446,17.9965935 15.1786487,17.6578934 C16.7386073,17.2662636 17.6811392,16.2615878 18.1045956,14.7158263 C18.4336429,13.5391502 18.5688692,12.3155499 18.5048301,11.0942882 C18.347465,7.61950335 20.7609319,4.56651098 24.1423795,3.9628895 C27.523827,3.35926802 30.8219782,5.39268066 31.8464377,8.71268071 Z M26.3893444,20.5714286 C29.5934914,20.5728214 32.1294369,23.0978446 32.1428571,26.3544669 C32.1442789,27.8891407 31.5359088,29.3614461 30.4517293,30.4471283 C29.3675498,31.5328106 27.8964824,32.1428571 26.362509,32.1428571 C23.2080075,32.1535633 20.5821634,29.5332308 20.5714286,26.3705755 C20.5707019,24.8286106 21.1841138,23.3499059 22.2759622,22.2615892 C23.3678106,21.1732726 24.8480973,20.565051 26.3893444,20.5714286 Z M13.7338306,5.55188202 C15.3890267,7.20707651 15.8837649,9.69655188 14.9872276,11.8588562 C14.0906902,14.0211606 11.9795509,15.4301858 9.6387506,15.4285714 C6.48709788,15.4352642 3.86384991,12.81336 3.85714286,9.64695797 C3.85551701,7.30616003 5.26454369,5.19502272 7.42685017,4.29848628 C9.58915664,3.40194983 12.0786345,3.89668752 13.7338306,5.55188202 Z",id:"Combined-Shape"})))));function f({title:e,titleId:c,...t},a){return s.createElement("svg",_({width:"36px",height:"36px",viewBox:"0 0 36 36",ref:a,"aria-labelledby":c},t),void 0===e?s.createElement("title",{id:c},"Group"):e?s.createElement("title",{id:c},e):null,N,g)}const C=s.forwardRef(f);t.p;var y=()=>{const{totalQuantities:e}=Object(o.c)((e=>e.CartReducer));return Object(a.jsx)("div",{className:"nav",children:Object(a.jsxs)("div",{className:"nav__container",children:[Object(a.jsx)("div",{className:"nav__left",children:Object(a.jsx)(d.b,{to:"/",children:Object(a.jsxs)("div",{className:"nav__logo",children:[Object(a.jsx)(C,{}),Object(a.jsx)("h1",{className:"brand",children:"Happay"})]})})}),Object(a.jsx)("div",{className:"nav__right",children:Object(a.jsx)(d.b,{to:"/cart",children:Object(a.jsxs)("div",{className:"basket",children:[Object(a.jsx)(v.a,{className:"cart-icon"}),Object(a.jsx)("span",{children:e})]})})})]})})},D=t(10),E=t.n(D);var w=()=>{const{products:e}=Object(o.c)((e=>e.ProductsReducer)),c=e[0].quantity,t=Object(o.b)();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"showcase",children:[Object(a.jsx)("h2",{children:"Most Popular"}),Object(a.jsxs)("div",{className:"block",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"text",children:"\u272a"}),Object(a.jsx)("hr",{})]})]}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:e.map((e=>Object(a.jsx)("div",{className:"col-3",children:e.original_price?Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__img badge",children:[Object(a.jsx)("div",{className:"ribbon",children:Object(a.jsx)("span",{children:"30% off"})}),Object(a.jsx)("img",{src:e.img_url,alt:"card name"})]}),Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("span",{className:"product__name",children:e.name}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"original_price",children:e.original_price&&"$"+e.original_price+".00"})}),Object(a.jsx)("h2",{className:"final_price",children:E.a.format(e.final_price,{code:"USD"})})]}),Object(a.jsx)("div",{className:"product__des",children:Object(a.jsx)("p",{children:e.description})}),Object(a.jsx)("button",{className:"btn-default",onClick:()=>t({type:"ADD_TO_CART",payload:{product:e,quantity:c}}),children:"Add to cart"})]}):Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("div",{className:"product__img",children:Object(a.jsx)("img",{src:e.img_url,alt:"card name"})}),Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("span",{className:"product__name",children:e.name}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"original_price",children:e.original_price&&"$"+e.original_price+".00"})}),Object(a.jsx)("h2",{className:"final_price",children:E.a.format(e.final_price,{code:"USD"})})]}),Object(a.jsx)("div",{className:"product__des",children:Object(a.jsx)("p",{children:e.description})}),Object(a.jsx)("button",{className:"btn-default",onClick:()=>t({type:"ADD_TO_CART",payload:{product:e,quantity:c}}),children:"Add to cart"})]})},e.id)))})})]})},P=t(15),k=t(27);var T=()=>{const{products:e,totalPrice:c,deliveryPrice:t,taxAndCharges:s}=Object(o.c)((e=>e.CartReducer)),i=Object(o.b)();return Object(a.jsxs)("div",{className:"cart",children:[Object(a.jsx)(d.b,{to:"/",children:Object(a.jsxs)("div",{className:"back",children:[Object(a.jsx)(k.a,{}),Object(a.jsx)("span",{className:"backToHome",children:"Back to Home"})]})}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h3",{children:["Order Summary ( ",e.length," Items ) "]}),e.length>0?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsxs)("div",{className:"col-6 summary-container",children:[Object(a.jsx)("div",{className:"cart__heading",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-2 small",children:"SI NO"}),Object(a.jsx)("div",{className:"col-2 small",children:"ITEMS"}),Object(a.jsx)("div",{className:"col-2 small",children:"QTY"}),Object(a.jsx)("div",{className:"col-2 small",children:"DELETE"})]})}),Object(a.jsx)("div",{className:"divider"}),e.map((c=>Object(a.jsxs)("div",{className:"row verticalAlign",children:[Object(a.jsx)("div",{className:"col-2",children:Object(a.jsxs)("div",{className:"cart__number",children:[e.indexOf(c)+1,"."]})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("div",{className:"cart__name",children:c.name.toUpperCase()})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("div",{className:"details__info cart__incDec",children:Object(a.jsxs)("div",{className:"details__incDec",children:[Object(a.jsx)("span",{className:"dec",onClick:()=>i({type:"DEC",payload:c.id}),children:Object(a.jsx)(P.a,{fill:"white",stroke:"black"})}),Object(a.jsx)("span",{className:"quantity",children:c.quantity}),Object(a.jsx)("span",{className:"inc",onClick:()=>i({type:"INC",payload:c.id}),children:Object(a.jsx)(P.b,{fill:"white",stroke:"black"})})]})})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("div",{className:"cart__remove",onClick:()=>i({type:"REMOVE",payload:c.id}),children:Object(a.jsx)(P.c,{})})})]},c.id))),Object(a.jsx)("div",{className:"divider"}),Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("div",{className:"add_items",children:"+ Add more items"})})]}),Object(a.jsx)("div",{className:"col-5 price-container",children:Object(a.jsxs)("div",{className:"summary",children:[Object(a.jsx)("div",{className:"summary__heading",children:"Price Details"}),Object(a.jsx)("div",{className:"divider"}),e.map((e=>Object(a.jsxs)("div",{className:"product_row",children:[Object(a.jsxs)("span",{children:[e.quantity," X"," ",E.a.format(e.final_price,{code:"USD"})]}),Object(a.jsx)("span",{children:E.a.format(e.final_price*e.quantity,{code:"USD"})})]},e.id))),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{className:"extra-charges",children:[Object(a.jsxs)("div",{className:"product_row",children:[Object(a.jsx)("span",{children:"Total Savings"}),Object(a.jsx)("span",{className:"discount_price",children:E.a.format(-18,{code:"USD"})})]}),Object(a.jsxs)("div",{className:"product_row",children:[Object(a.jsx)("span",{children:"Delivery Fee"}),Object(a.jsx)("span",{children:E.a.format(5,{code:"USD"})})]}),Object(a.jsxs)("div",{className:"product_row",children:[Object(a.jsx)("span",{children:"Tax and Charges"}),Object(a.jsx)("span",{children:E.a.format(2,{code:"USD"})})]}),Object(a.jsx)("div",{className:"divider"})]}),Object(a.jsxs)("div",{className:"product_row",children:[Object(a.jsx)("span",{className:"pay",children:"To Pay"}),Object(a.jsx)("span",{className:"total",children:E.a.format(c+t+s,{code:"USD"})})]}),Object(a.jsx)("button",{type:"button",className:"checkout",children:"PLACE ORDER"})]})})]})}):"Your cart is empty!"]})]})};var q=function(){return Object(a.jsx)(d.a,{basename:"https://taheermattur.github.io/Happay-Ecommerce-Assignment/",children:Object(a.jsxs)(o.a,{store:x,children:[Object(a.jsx)(y,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:w}),Object(a.jsx)(l.a,{path:"/cart",exact:!0,component:T})]})})};var R=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((({getCLS:c,getFID:t,getFCP:a,getLCP:s,getTTFB:i})=>{c(e),t(e),a(e),s(e),i(e)}))};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root")),R()}},[[44,1,2]]]);
//# sourceMappingURL=main.2c0880e2.chunk.js.map