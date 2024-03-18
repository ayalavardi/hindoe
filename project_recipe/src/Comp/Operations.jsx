import { useSelector } from "react-redux"
import '../Style/staylregister.css'
import '../Style/try.css'
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Operations = () => {
   const cuser = useSelector(x => x.currentUser)
   let codeuser = cuser.id
   const nav = useNavigate()
   useEffect(() => {
      const body = document.body;
      const bgColorsBody = ["addtrip", "Aadcategor", "ApartmentsList", "aadCity", "addtrip"];
      const menu = body.querySelector(".menu");
      const menuItems = menu.querySelectorAll(".menu__item");
      const menuBorder = menu.querySelector(".menu__border");
      let activeItem = menu.querySelector(".active");

      function clickItem(item, index) {

         menu.style.removeProperty("--timeOut");

         if (activeItem == item) return;

         if (activeItem) {
            activeItem.classList.remove("active");
         }


         item.classList.add("active");
         if (index == 0)
            nav(`./${bgColorsBody[index]}/1`)
         else
            nav(`./${bgColorsBody[index]}`)
         //  body.style.backgroundColor = bgColorsBody[index];
         activeItem = item;
         offsetMenuBorder(activeItem, menuBorder);


      }

      function offsetMenuBorder(element, menuBorder) {

         const offsetActiveItem = element.getBoundingClientRect();
         const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
         menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

      }

      offsetMenuBorder(activeItem, menuBorder);

      menuItems.forEach((item, index) => {

         item.addEventListener("click", () => clickItem(item, index));

      })

      window.addEventListener("resize", () => {
         offsetMenuBorder(activeItem, menuBorder);
         menu.style.setProperty("--timeOut", "none");
      });
   });




   return <>
      <Outlet></Outlet>
      <menu class="menu">
         <button class="menu__item active" style={{ '--bgColorItem': '#ff8c00' }} >
            <svg class="icon" viewBox="0 0 24 24">
               <path d="M3.8,6.6h16.4" />
               <path d="M20.2,12.1H3.8" />
               <path d="M3.8,17.5h16.4" />
            </svg>
         </button>

         <button class="menu__item" style={{ '--bgColorItem': '#f54888' }}>
            <svg class="icon" viewBox="0 0 24 24">
               <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
            C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"/>
               <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
            </svg>
         </button>

         <button class="menu__item" style={{ '--bgColorItem': '#4343f5' }} >
            <svg class="icon" viewBox="0 0 24 24">
               <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
               <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
               <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
            </svg>
         </button>

         <button class="menu__item" style={{ '--bgColorItem': '#e0b115' }} >
            {/* <svg class="icon" viewBox="0 0 24 24" >
               <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
              C3.9,4.4,4.4,3.9,5.1,3.9z"/>
               <path d="M4.2,9.3h15.6" />
               <path d="M9.1,9.5v10.3" />
            </svg> */}
            <svg
               className="icon"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M5 12h14l-7-8-7 8z"></path>
               <path d="M19 12h2"></path>
               <path d="M19 12V21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
               <path d="M3 9l3-3"></path>
               <path d="M12 21v-9"></path>
               <path d="M12 12l7-8-3 3"></path>
            </svg>

         </button>

         <button class="menu__item" style={{ '--bgColorItem': '#65ddb7' }}>
            <svg class="icon" viewBox="0 0 24 24" >
               <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
              C3.9,4.4,4.4,3.9,5.1,3.9z"/>
               <path d="M5.5,20l9.9-9.9l4.7,4.7" />
               <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
            </svg>
         </button>

         <div class="menu__border"></div>
      </menu>
      <div class="svg-container">
         <svg viewBox="0 0 202.9 45.5" >
            <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
               <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
              c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
            </clipPath>
         </svg>
      </div>
      <div className="wraped">
         {/* <Aadrecip></Aadrecip> */}
         {/* {cuser.mail==Manager.mail&& */}
         {/* <Aadlevel></Aadlevel> */}
         {/* {cuser.mail==Manager.mail&& */}
         {/* <Aadcategor></Aadcategor> */}
         {/* <Aadingread></Aadingread> */}
      </div>
   </>
}


// import { useState } from "react";
// import { Aadcategor } from "./Aadcategor";
// import { Aadingread } from "./Aadingread";
// import { Aadlevel } from "./Aadlevel";
// import { Aadrecip } from "./Aadrecip";
// import '../Style/staylregister.css';

// export const Operations = () => {
//   const [activeComponent, setActiveComponent] = useState("Aadlevel");

//   const renderActiveComponent = () => {
//     switch (activeComponent) {
//       case "Aadlevel":
//         return <Aadlevel />;
//       case "Aadcategor":
//         return <Aadcategor />;
//       case "Aadingread":
//         return <Aadingread />;
//       case "Aadrecip":
//         return <Aadrecip />;
//       default:
//         return null;
//     }
//   };

//   const handleClick = (componentName) => {
//     setActiveComponent(componentName);
//   };

//   return (
//     <>
//       <div className="wraped">
//         <div className="menu">
//           <button
//             className={`menu__item ${activeComponent === "Aadlevel" ? "active" : ""}`}
//             style="--bgColorItem: #ff8c00;"
//             onClick={() => handleClick("Aadlevel")}
//           >
//             <svg className="icon" viewBox="0 0 24 24">
//               <path d="M3.8,6.6h16.4"/>
//               <path d="M20.2,12.1H3.8"/>
//               <path d="M3.8,17.5h16.4"/>
//             </svg>
//           </button>

//           <button
//             className={`menu__item ${activeComponent === "Aadcategor" ? "active" : ""}`}
//             style="--bgColorItem: #f54888;"
//             onClick={() => handleClick("Aadcategor")}
//           >
//             <svg className="icon" viewBox="0 0 24 24">
//               <path  d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
//               C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"/>
//               <path  d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6"/>
//             </svg>
//           </button>

//           <button
//             className={`menu__item ${activeComponent === "Aadingread" ? "active" : ""}`}
//             style="--bgColorItem: #4343f5;"
//             onClick={() => handleClick("Aadingread")}
//           >
//             <svg className="icon" viewBox="0 0 24 24">
//               <path  d="M3.4,11.9l8.8,4.4l8.4-4.4"/>
//               <path  d="M3.4,16.2l8.8,4.5l8.4-4.5"/>
//               <path  d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z"/>
//             </svg>
//           </button>

//           <button
//             className={`menu__item ${activeComponent === "Aadrecip" ? "active" : ""}`}
//             style="--bgColorItem: #e0b115;"
//             onClick={() => handleClick("Aadrecip")}
//           >
//             <svg className="icon" viewBox="0 0 24 24" >
//               <path  d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
//                 C3.9,4.4,4.4,3.9,5.1,3.9z"/>
//               <path  d="M4.2,9.3h15.6"/>
//               <path  d="M9.1,9.5v10.3"/>
//             </svg>
//           </button>

//           <div className="menu__border"></div>
//         </div>
//         {renderActiveComponent()}
//       </div>
//     </>
//   );
// };
