(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports={container:"ListCharacters_container__2-nfN",containerChar:"ListCharacters_containerChar__SKyKp"}},20:function(e,t,a){e.exports={container:"GetStart_container__xEh5G"}},21:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(19),r=a.n(c),l=(a(30),a(32),a(0)),o=a(9),m=a(20),d=a.n(m),u=function(){return i.a.createElement("div",{className:d.a.container},i.a.createElement(o.b,{to:"/home"},i.a.createElement("button",null,"Get start")))},s=a(5),p=a(3),h=a(16),g=a.n(h),w=Object(n.createContext)({}),f=function(){var e=Object(n.useContext)(w).characterState.characters,t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],r=a[1];return i.a.createElement("div",null,i.a.createElement("select",{name:"",id:"",onChange:function(t){var a=t.target.value,n=e.filter(function(e){return e.name===a});r([].concat(Object(s.a)(c),Object(s.a)(n)))}},i.a.createElement("option",{value:""},"Select Character"),[e.map(function(e,t){return i.a.createElement("option",{key:t,value:e.name},e.name)})]),i.a.createElement("div",{className:g.a.container},[c.map(function(e,t){return i.a.createElement("div",{key:t,className:g.a.containerChar},i.a.createElement("p",null,"Name : ",e.name),i.a.createElement("p",null,"Fight level : ",e.fightLevel),i.a.createElement("img",{src:e.image,alt:e.name}),i.a.createElement("p",null,"Description : ",e.description?e.description:"Not found"))})]))},I=a(17),j=function(e,t){switch(t.type){case"addCharacter":return Object(I.a)({},e,{characters:[].concat(Object(s.a)(e.characters),[t.payload])});default:return Object(I.a)({},e)}},N={characterCount:2,characters:Object(s.a)([{name:"Goku",image:"https://www.pngplay.com/wp-content/uploads/12/Goku-PNG-Clipart-Background.png",fightLevel:"100",description:"el sayayin mas fuerte"},{name:"Vegeta",image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4805bb10-2561-4f69-b899-a4f774a82de4/dduy7iw-307f13ad-c60e-4773-a642-1797e82ae2d8.png/v1/fill/w_1920,h_3481,strp/vegeta_render_1_by_ssjrose890_dduy7iw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ4MSIsInBhdGgiOiJcL2ZcLzQ4MDViYjEwLTI1NjEtNGY2OS1iODk5LWE0Zjc3NGE4MmRlNFwvZGR1eTdpdy0zMDdmMTNhZC1jNjBlLTQ3NzMtYTY0Mi0xNzk3ZTgyYWUyZDgucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8J_ctrivnutwEh8I7nWIEMd0ZbUH1Bqzt2aCOyQVce4",fightLevel:"90",description:"el principe de los sayayin"},{name:"Krilin",image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fed026fa-6b45-4271-82f9-343d0102a626/d9t38dt-1ef27c0f-1c46-407c-ab1c-279cb17ab28e.png/v1/fill/w_851,h_720,strp/krilin_dbz_by_elpoderosgohan_d9t38dt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZmVkMDI2ZmEtNmI0NS00MjcxLTgyZjktMzQzZDAxMDJhNjI2XC9kOXQzOGR0LTFlZjI3YzBmLTFjNDYtNDA3Yy1hYjFjLTI3OWNiMTdhYjI4ZS5wbmciLCJ3aWR0aCI6Ijw9ODUxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LPhRv7GU0eyaJekKD2FcUSIVAU_M2FHl80agFR5kkZ8",fightLevel:"50",description:"el mejor amigo de goku"},{name:"Gohan",image:"https://i.seadn.io/gae/y-LDeIBLC51vIQlszbfFOYAHWp-9_avBCszIXWardgNUNUOoZ5bzxzndYnL3TXgxTwo_Caplyd3iyc2OzS3Mri7yPi86jbBCFa-rEQk?auto=format&w=1000",fightLevel:"90",description:"es el hijo mayor de goku"},{name:"Freezer",image:"https://www.comicversatiloficial.com/wp-content/uploads/2018/01/Freezer_Forma_Final_Artwork.png",fightLevel:"90",description:"Es el eterno enemigo de Goku"},{name:"Piccolo",image:"https://www.pngmart.com/files/12/Dragon-Ball-Z-Piccolo-PNG-Transparent.png",fightLevel:"90",description:"El namecusein mas fuerte"},{name:"Broly",image:"https://pbs.twimg.com/media/DuoVaWVW4AQJXnq.png",fightLevel:"Ilimitado",description:"El super sayayin legendario"}]),transformado:"Si"},O=function(e){var t=e.children,a=Object(n.useReducer)(j,N),c=Object(p.a)(a,2),r=c[0];c[1];return i.a.createElement(w.Provider,{value:{characterState:r}},t)},y=function(){return i.a.createElement(O,null,i.a.createElement("h1",null,"Characters Dragon Ball"),i.a.createElement(f,null))};var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/",element:i.a.createElement(u,null)}),i.a.createElement(l.a,{path:"/home",element:i.a.createElement(y,null)})))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,null,i.a.createElement(b,null)))),E()}},[[21,3,2]]]);
//# sourceMappingURL=main.2c031e9b.chunk.js.map