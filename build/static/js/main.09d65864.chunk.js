(this["webpackJsonpredux-shop"]=this["webpackJsonpredux-shop"]||[]).push([[0],{37:function(e,c,a){},44:function(e,c,a){"use strict";a.r(c);var t=a(1),s=a(2),i=a.n(s),r=a(17),n=a.n(r),d=a(11),l=a(4),o=a(9),j=a(13);const m={products:[{id:1,name:"food card",description:"This card is used for spending on Food merchants",final_price:21,original_price:30,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",quantity:1},{id:2,name:"travel card",description:"This card is used for spending on Travel and hotel bookings",final_price:20,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",quantity:1},{id:3,name:"epic card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",quantity:1},{id:4,name:"happay premium card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",quantity:1}],product:{}};var p=(e=m,c)=>{switch(c.type){case"PRODUCT":return{...e};default:return e}};const b={products:[],totalPrice:0,totalQuantities:0,deliveryPrice:5,taxAndCharges:2};var h=(e=b,c)=>{let a,t;switch(c.type){case"ADD_TO_CART":const{product:s,quantity:i}=c.payload;if(e.products.find((e=>e.id===s.id)))return e;{const c=e.totalPrice+s.final_price*i,a=e.totalQuantities+i;return s.quantity=i,{...e,products:[...e.products,s],totalPrice:c,totalQuantities:a}}case"INC":return a=e.products.find((e=>e.id===c.payload)),t=e.products.findIndex((e=>e.id===c.payload)),a.quantity+=1,e.products[t]=a,{...e,totalPrice:e.totalPrice+a.final_price,totalQuantities:e.totalQuantities+1};case"DEC":return a=e.products.find((e=>e.id===c.payload)),t=e.products.findIndex((e=>e.id===c.payload)),a.quantity>1?(a.quantity-=1,e.products[t]=a,{...e,totalPrice:e.totalPrice-a.final_price,totalQuantities:e.totalQuantities-1}):e;case"REMOVE":a=e.products.find((e=>e.id===c.payload));const r=e.products.filter((e=>e.id!==c.payload));return{...e,products:r,totalPrice:e.totalPrice-a.final_price*a.quantity,totalQuantities:e.totalQuantities-a.quantity};default:return e}},u=a(25);const O=Object(j.combineReducers)({ProductsReducer:p,CartReducer:h});var x=Object(j.createStore)(O,Object(u.devToolsEnhancer)()),v=(a(37),a(26));function _(){return(_=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var N=s.createElement("desc",null,"Created with Sketch."),f=s.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"Happay-cards-HOME",transform:"translate(-62.000000, -35.000000)",fill:"#1D7CBF",fillRule:"nonzero"},s.createElement("g",{id:"Group-12",transform:"translate(62.000000, 32.000000)"},s.createElement("g",{id:"Group",transform:"translate(0.000000, 3.000000)"},s.createElement("path",{d:"M29.9367692,-2.27373675e-13 C33.2826974,-2.27373675e-13 35.9961796,2.70538719 36,6.04514742 L36,29.9548526 C35.9961796,33.2946128 33.2826974,36 29.9367692,36 L6.05630769,36 C2.71308288,35.9961919 0.00381516384,33.2919167 3.12638804e-13,29.9548526 L3.12638804e-13,6.04514742 C0.00381516384,2.70808334 2.71308288,0.00380813344 6.05630769,-2.27373675e-13 L29.9367692,-2.27373675e-13 Z M29.9367692,1.09874079 L6.05630769,1.10288698 C3.32534217,1.11048608 1.11377762,3.31921056 1.10769231,6.04514742 L1.10769231,29.9548526 C1.11150562,32.6850994 3.32794353,34.8974529 6.06323077,34.9012592 L29.9367692,34.9012592 C32.6723723,34.8982126 34.8892554,32.6854146 34.8923077,29.9548526 L34.8923077,6.04514742 C34.8892554,3.31458543 32.6723723,1.10178744 29.9367692,1.09874079 Z M31.8464377,8.71268071 C31.9387646,9.01663866 32.0068278,9.32762247 32.0499699,9.64262857 C32.1044019,9.97951541 32.1354404,10.3198555 32.1428571,10.6611429 C32.1319292,12.7908895 31.3751717,14.4127629 29.9750337,15.7523306 C28.9713446,16.7257604 27.6959054,17.362155 26.3223811,17.5748624 C25.7309081,17.6703481 25.1326053,17.662045 24.5370344,17.7007928 C23.2943762,17.7758097 22.065432,18.0044575 20.8775518,18.3816475 C19.3148612,18.8867531 18.4187729,20.0035209 18.0759098,21.6074041 C17.813645,22.8323008 17.6410608,24.0751523 17.5595662,25.3258117 C17.4366273,27.27289 16.7399733,28.9736429 15.3111495,30.3256653 C14.3015737,31.2947466 13.0107122,31.9085846 11.6298111,32.0762368 C9.76113913,32.3197946 8.04818982,31.9004877 6.55379864,30.736669 C5.05940746,29.5728504 4.19610286,28.0035634 3.92290521,26.1104552 C3.44207733,22.769839 5.6372205,19.2991407 9.22157376,18.4577593 C9.81228518,18.3326861 10.4131442,18.263198 11.0164824,18.2501817 C12.4199994,18.1950273 13.814446,17.9965935 15.1786487,17.6578934 C16.7386073,17.2662636 17.6811392,16.2615878 18.1045956,14.7158263 C18.4336429,13.5391502 18.5688692,12.3155499 18.5048301,11.0942882 C18.347465,7.61950335 20.7609319,4.56651098 24.1423795,3.9628895 C27.523827,3.35926802 30.8219782,5.39268066 31.8464377,8.71268071 Z M26.3893444,20.5714286 C29.5934914,20.5728214 32.1294369,23.0978446 32.1428571,26.3544669 C32.1442789,27.8891407 31.5359088,29.3614461 30.4517293,30.4471283 C29.3675498,31.5328106 27.8964824,32.1428571 26.362509,32.1428571 C23.2080075,32.1535633 20.5821634,29.5332308 20.5714286,26.3705755 C20.5707019,24.8286106 21.1841138,23.3499059 22.2759622,22.2615892 C23.3678106,21.1732726 24.8480973,20.565051 26.3893444,20.5714286 Z M13.7338306,5.55188202 C15.3890267,7.20707651 15.8837649,9.69655188 14.9872276,11.8588562 C14.0906902,14.0211606 11.9795509,15.4301858 9.6387506,15.4285714 C6.48709788,15.4352642 3.86384991,12.81336 3.85714286,9.64695797 C3.85551701,7.30616003 5.26454369,5.19502272 7.42685017,4.29848628 C9.58915664,3.40194983 12.0786345,3.89668752 13.7338306,5.55188202 Z",id:"Combined-Shape"})))));function g({title:e,titleId:c,...a},t){return s.createElement("svg",_({width:"36px",height:"36px",viewBox:"0 0 36 36",ref:t,"aria-labelledby":c},a),void 0===e?s.createElement("title",{id:c},"Group"):e?s.createElement("title",{id:c},e):null,N,f)}const C=s.forwardRef(g);a.p;var y=()=>{const{totalQuantities:e}=Object(o.c)((e=>e.CartReducer));return Object(t.jsx)("div",{className:"nav",children:Object(t.jsxs)("div",{className:"nav__container",children:[Object(t.jsx)("div",{className:"nav__left",children:Object(t.jsx)(d.b,{to:"/",children:Object(t.jsxs)("div",{className:"nav__logo",children:[Object(t.jsx)(C,{}),Object(t.jsx)("h1",{className:"brand",children:"Happay"})]})})}),Object(t.jsx)("div",{className:"nav__right",children:Object(t.jsx)(d.b,{to:"/cart",children:Object(t.jsxs)("div",{className:"basket",children:[Object(t.jsx)(v.a,{className:"cart-icon"}),Object(t.jsx)("span",{children:e})]})})})]})})},D=a(10),E=a.n(D);var w=()=>{const{products:e}=Object(o.c)((e=>e.ProductsReducer)),c=e[0].quantity,a=Object(o.b)();return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"showcase",children:[Object(t.jsx)("h2",{children:"Most Popular"}),Object(t.jsxs)("div",{className:"block",children:[Object(t.jsx)("hr",{}),Object(t.jsx)("div",{className:"text",children:"\u272a"}),Object(t.jsx)("hr",{})]})]}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:e.map((e=>Object(t.jsx)("div",{className:"col-3",children:e.original_price?Object(t.jsxs)("div",{className:"product",children:[Object(t.jsxs)("div",{className:"product__img badge",children:[Object(t.jsx)("div",{className:"ribbon",children:Object(t.jsx)("span",{children:"30% off"})}),Object(t.jsx)("img",{src:e.img_url,alt:"card name"})]}),Object(t.jsxs)("div",{className:"product__info",children:[Object(t.jsx)("span",{className:"product__name",children:e.name}),Object(t.jsx)("div",{children:Object(t.jsx)("span",{className:"original_price",children:e.original_price&&"$"+e.original_price+".00"})}),Object(t.jsx)("h2",{className:"final_price",children:E.a.format(e.final_price,{code:"USD"})})]}),Object(t.jsx)("div",{className:"product__des",children:Object(t.jsx)("p",{children:e.description})}),Object(t.jsx)("button",{className:"btn-default",onClick:()=>a({type:"ADD_TO_CART",payload:{product:e,quantity:c}}),children:"Add to cart"})]}):Object(t.jsxs)("div",{className:"product",children:[Object(t.jsx)("div",{className:"product__img",children:Object(t.jsx)("img",{src:e.img_url,alt:"card name"})}),Object(t.jsxs)("div",{className:"product__info",children:[Object(t.jsx)("span",{className:"product__name",children:e.name}),Object(t.jsx)("div",{children:Object(t.jsx)("span",{className:"original_price",children:e.original_price&&"$"+e.original_price+".00"})}),Object(t.jsx)("h2",{className:"final_price",children:E.a.format(e.final_price,{code:"USD"})})]}),Object(t.jsx)("div",{className:"product__des",children:Object(t.jsx)("p",{children:e.description})}),Object(t.jsx)("button",{className:"btn-default",onClick:()=>a({type:"ADD_TO_CART",payload:{product:e,quantity:c}}),children:"Add to cart"})]})},e.id)))})})]})},P=a(15),k=a(27);var T=()=>{const{products:e,totalPrice:c,deliveryPrice:a,taxAndCharges:s}=Object(o.c)((e=>e.CartReducer)),i=Object(o.b)();return Object(t.jsxs)("div",{className:"cart",children:[Object(t.jsx)(d.b,{to:"/",children:Object(t.jsxs)("div",{className:"back",children:[Object(t.jsx)(k.a,{}),Object(t.jsx)("span",{className:"backToHome",children:"Back to Home"})]})}),Object(t.jsxs)("div",{className:"container",children:[Object(t.jsxs)("h3",{children:["Order Summary ( ",e.length," Items ) "]}),e.length>0?Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"main-container",children:[Object(t.jsxs)("div",{className:"col-6 summary-container",children:[Object(t.jsx)("div",{className:"cart__heading",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-2 small",children:"SI NO"}),Object(t.jsx)("div",{className:"col-2 small",children:"ITEMS"}),Object(t.jsx)("div",{className:"col-2 small",children:"QTY"}),Object(t.jsx)("div",{className:"col-2 small",children:"DELETE"})]})}),Object(t.jsx)("div",{className:"divider"}),e.map((c=>Object(t.jsxs)("div",{className:"row verticalAlign",children:[Object(t.jsx)("div",{className:"col-2",children:Object(t.jsxs)("div",{className:"cart__number",children:[e.indexOf(c)+1,"."]})}),Object(t.jsx)("div",{className:"col-2",children:Object(t.jsx)("div",{className:"cart__name",children:c.name.toUpperCase()})}),Object(t.jsx)("div",{className:"col-2",children:Object(t.jsx)("div",{className:"details__info cart__incDec",children:Object(t.jsxs)("div",{className:"details__incDec",children:[Object(t.jsx)("span",{className:"dec",onClick:()=>i({type:"DEC",payload:c.id}),children:Object(t.jsx)(P.a,{fill:"white",stroke:"black"})}),Object(t.jsx)("span",{className:"quantity",children:c.quantity}),Object(t.jsx)("span",{className:"inc",onClick:()=>i({type:"INC",payload:c.id}),children:Object(t.jsx)(P.b,{fill:"white",stroke:"black"})})]})})}),Object(t.jsx)("div",{className:"col-2",children:Object(t.jsx)("div",{className:"cart__remove",onClick:()=>i({type:"REMOVE",payload:c.id}),children:Object(t.jsx)(P.c,{})})})]},c.id))),Object(t.jsx)("div",{className:"divider"}),Object(t.jsx)(d.b,{to:"/",children:Object(t.jsx)("div",{className:"add_items",children:"+ Add more items"})})]}),Object(t.jsx)("div",{className:"col-5 price-container",children:Object(t.jsxs)("div",{className:"summary",children:[Object(t.jsx)("div",{className:"summary__heading",children:"Price Details"}),Object(t.jsx)("div",{className:"divider"}),e.map((e=>Object(t.jsxs)("div",{className:"product_row",children:[Object(t.jsxs)("span",{children:[e.quantity," X"," ",E.a.format(e.final_price,{code:"USD"})]}),Object(t.jsx)("span",{children:E.a.format(e.final_price*e.quantity,{code:"USD"})})]},e.id))),Object(t.jsx)("div",{className:"divider"}),Object(t.jsxs)("div",{className:"extra-charges",children:[Object(t.jsxs)("div",{className:"product_row",children:[Object(t.jsx)("span",{children:"Total Savings"}),Object(t.jsx)("span",{className:"discount_price",children:E.a.format(-18,{code:"USD"})})]}),Object(t.jsxs)("div",{className:"product_row",children:[Object(t.jsx)("span",{children:"Delivery Fee"}),Object(t.jsx)("span",{children:E.a.format(5,{code:"USD"})})]}),Object(t.jsxs)("div",{className:"product_row",children:[Object(t.jsx)("span",{children:"Tax and Charges"}),Object(t.jsx)("span",{children:E.a.format(2,{code:"USD"})})]}),Object(t.jsx)("div",{className:"divider"})]}),Object(t.jsxs)("div",{className:"product_row",children:[Object(t.jsx)("span",{className:"pay",children:"To Pay"}),Object(t.jsx)("span",{className:"total",children:E.a.format(c+a+s,{code:"USD"})})]}),Object(t.jsx)("button",{type:"button",className:"checkout",children:"PLACE ORDER"})]})})]})}):"Your cart is empty!"]})]})};var q=function(){return Object(t.jsx)(d.a,{basename:"/Happay-Ecommerce-Assignment/",children:Object(t.jsxs)(o.a,{store:x,children:[Object(t.jsx)(y,{}),Object(t.jsx)(l.a,{path:"/",exact:!0,component:w}),Object(t.jsx)(l.a,{path:"/cart",exact:!0,component:T})]})})};var R=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((({getCLS:c,getFID:a,getFCP:t,getLCP:s,getTTFB:i})=>{c(e),a(e),t(e),s(e),i(e)}))};n.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(q,{})}),document.getElementById("root")),R()}},[[44,1,2]]]);
//# sourceMappingURL=main.09d65864.chunk.js.map