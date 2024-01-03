import React, { useRef, useState, useEffect } from "react"

import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
  Circle
} from "react-native-svg"
import { View, TouchableWithoutFeedback, TouchableOpacity, PanResponder, Animated, StyleSheet } from "react-native"
import * as Animatable from 'react-native-animatable';
import { B1, B8, B9, FINISHED, G1, G8, G9, R1, R8, R9, Y1, Y8, Y9 } from "../../util/Constants";
import { Image } from "react-native";
import RedSvg from "../../../components/Svg/RedGoti";
import GotiCount from "../../util/GotiCount";
import DefaultCell from "../../util/DefaultCell";

const RedGoti = (props) => {


//   const getPositionById = (position, count) => {
//     let positionStyles = { top: 0, right: 0 };

//    if (position == R1){
//     const positionR1 = count.find(item => item[0].position === "R1");
    
     

//       if (positionR1) {
//        switch(positionR1[0].count){
//             case 1:
//               positionStyles = { top: -10, right: 10, height:30, width:30 };
//        }
//   } 


// else {
//   console.log("Position R1 not found");
// }
//    }

//     return positionStyles;
//   };

  // Get the position styles
  // const positionStyles = getPositionById(positions, count);



console.log(props.id)


  const getPositionById = (id) => {
    let position = { top: 0, right: 0 };
  
    switch (id) {
      case 0:
        position = { top: -10, right: 10 };
        break;
      case 1:
        position = { top: 8, right: -5 };
        break;

      case 2:
        position = { top: 8, right: 10, };
        break;

      case 3:
        position = { top: -10, right: -5 };
        break;
      default:
        break;
    }

  
    return position;
  };
  
  const { top, right } = getPositionById(props.id);



  return (


    props.position == FINISHED ?


        <View style={{ height: 15, width: 15, flex: 1 }}>


        <Svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            enableBackground: "new 0 0 1080 1080",
          }}
          viewBox="0 0 1080 1080"
          {...props}
        >
          <RadialGradient
            id="a"
            cx={334.765}
            cy={791.644}
            r={229.141}
            gradientUnits="userSpaceOnUse"
          >
            <Stop
              offset={0.162}
              style={{
                stopColor: "#f55152",
              }}
            />
            <Stop
              offset={1}
              style={{
                stopColor: "#a00e23",
              }}
            />
          </RadialGradient>
          <Ellipse
            cx={528.81}
            cy={783.82}
            rx={314.51}
            ry={127.94}
            style={{
              fill: "url(#a)",
            }}
          />
          <LinearGradient
            id="b"
            x1={167.915}
            x2={703.679}
            y1={815.833}
            y2={894.186}
            gradientUnits="userSpaceOnUse"
          >
            <Stop
              offset={0.206}
              style={{
                stopColor: "#7f0d1e",
              }}
            />
            <Stop
              offset={0.529}
              style={{
                stopColor: "#f81717",
              }}
            />
            <Stop
              offset={0.904}
              style={{
                stopColor: "#770b11",
              }}
            />
          </LinearGradient>
          <Path
            d="M842.13 783.82v46.49c0 34.15-13.41 66.44-36.33 85.39-97.28 80.41-270.24 80.35-270.24 80.35-159.99-9.26-240.29-45.35-280.34-76.76-24.25-19.01-39.18-51.86-40.43-87.39l-1.57-44.51c4.64 69.02 143.62 124.39 314.39 124.39 173.71-.02 314.52-57.29 314.52-127.96z"
            style={{
              fill: "url(#b)",
            }}
          />
          <RadialGradient
            id="c"
            cx={511.765}
            cy={713.412}
            r={186.858}
            gradientUnits="userSpaceOnUse"
          >
            <Stop
              offset={0.162}
              style={{
                stopColor: "#f55152",
              }}
            />
            <Stop
              offset={1}
              style={{
                stopColor: "#a00e23",
              }}
            />
          </RadialGradient>
          <Path
            d="M750.94 729.74c0 47.08-98.86 85.26-220.84 85.26s-220.84-38.18-220.84-85.26c0-17.25 13.25-33.29 36.04-46.7a92.9 92.9 0 0 0 3.1-1.79c.03 0 .03-.03.03-.03 97.84-59.5 72.65-322.58 72.65-322.58h214.63c-12.83 229.51 43.27 298.99 67.11 317.94 30.14 14.59 48.12 33.06 48.12 53.16z"
            style={{
              fill: "url(#c)",
            }}
          />
          <RadialGradient
            id="d"
            cx={558.164}
            cy={194.311}
            r={211.641}
            gradientUnits="userSpaceOnUse"
          >
            <Stop
              offset={0.162}
              style={{
                stopColor: "#f55152",
              }}
            />
            <Stop
              offset={1}
              style={{
                stopColor: "#a00e23",
              }}
            />
          </RadialGradient>
          <Circle
            cx={528.89}
            cy={250.56}
            r={225.05}
            style={{
              fill: "url(#d)",
            }}
          />
          <LinearGradient
            id="e"
            x1={244.957}
            x2={679.78}
            y1={811.331}
            y2={783.096}
            gradientUnits="userSpaceOnUse"
          >
            <Stop
              offset={0.206}
              style={{
                stopColor: "#7f0d1e",
              }}
            />
            <Stop
              offset={0.529}
              style={{
                stopColor: "#f81717",
              }}
            />
            <Stop
              offset={0.904}
              style={{
                stopColor: "#770b11",
              }}
            />
          </LinearGradient>
          <Path
            d="M749.79 723.65v32.76c0 24.06-9.42 46.81-25.51 60.16-68.31 56.65-189.78 56.61-189.78 56.61-112.36-6.52-168.75-31.95-196.88-54.08-17.03-13.39-27.51-36.54-28.39-61.57l-1.1-31.36c3.26 48.63 100.86 87.64 220.79 87.64 121.98-.02 220.87-40.37 220.87-90.16z"
            style={{
              fill: "url(#e)",
            }}
          />
        </Svg>

</View>

      :


DefaultCell(props.positions)
?

<View style={{height:20, width:20, position:"absolute",top:top, right:right}}>
<Svg
 xmlns="http://www.w3.org/2000/svg"
 xmlSpace="preserve"
 style={{
   enableBackground: "new 0 0 1080 1080",
 }}
 viewBox="0 0 1080 1080"
 {...props}
>
 <RadialGradient
   id="a"
   cx={334.765}
   cy={791.644}
   r={229.141}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.162}
     style={{
       stopColor: "#f55152",
     }}
   />
   <Stop
     offset={1}
     style={{
       stopColor: "#a00e23",
     }}
   />
 </RadialGradient>
 <Ellipse
   cx={528.81}
   cy={783.82}
   rx={314.51}
   ry={127.94}
   style={{
     fill: "url(#a)",
   }}
 />
 <LinearGradient
   id="b"
   x1={167.915}
   x2={703.679}
   y1={815.833}
   y2={894.186}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.206}
     style={{
       stopColor: "#7f0d1e",
     }}
   />
   <Stop
     offset={0.529}
     style={{
       stopColor: "#f81717",
     }}
   />
   <Stop
     offset={0.904}
     style={{
       stopColor: "#770b11",
     }}
   />
 </LinearGradient>
 <Path
   d="M842.13 783.82v46.49c0 34.15-13.41 66.44-36.33 85.39-97.28 80.41-270.24 80.35-270.24 80.35-159.99-9.26-240.29-45.35-280.34-76.76-24.25-19.01-39.18-51.86-40.43-87.39l-1.57-44.51c4.64 69.02 143.62 124.39 314.39 124.39 173.71-.02 314.52-57.29 314.52-127.96z"
   style={{
     fill: "url(#b)",
   }}
 />
 <RadialGradient
   id="c"
   cx={511.765}
   cy={713.412}
   r={186.858}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.162}
     style={{
       stopColor: "#f55152",
     }}
   />
   <Stop
     offset={1}
     style={{
       stopColor: "#a00e23",
     }}
   />
 </RadialGradient>
 <Path
   d="M750.94 729.74c0 47.08-98.86 85.26-220.84 85.26s-220.84-38.18-220.84-85.26c0-17.25 13.25-33.29 36.04-46.7a92.9 92.9 0 0 0 3.1-1.79c.03 0 .03-.03.03-.03 97.84-59.5 72.65-322.58 72.65-322.58h214.63c-12.83 229.51 43.27 298.99 67.11 317.94 30.14 14.59 48.12 33.06 48.12 53.16z"
   style={{
     fill: "url(#c)",
   }}
 />
 <RadialGradient
   id="d"
   cx={558.164}
   cy={194.311}
   r={211.641}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.162}
     style={{
       stopColor: "#f55152",
     }}
   />
   <Stop
     offset={1}
     style={{
       stopColor: "#a00e23",
     }}
   />
 </RadialGradient>
 <Circle
   cx={528.89}
   cy={250.56}
   r={225.05}
   style={{
     fill: "url(#d)",
   }}
 />
 <LinearGradient
   id="e"
   x1={244.957}
   x2={679.78}
   y1={811.331}
   y2={783.096}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.206}
     style={{
       stopColor: "#7f0d1e",
     }}
   />
   <Stop
     offset={0.529}
     style={{
       stopColor: "#f81717",
     }}
   />
   <Stop
     offset={0.904}
     style={{
       stopColor: "#770b11",
     }}
   />
 </LinearGradient>
 <Path
   d="M749.79 723.65v32.76c0 24.06-9.42 46.81-25.51 60.16-68.31 56.65-189.78 56.61-189.78 56.61-112.36-6.52-168.75-31.95-196.88-54.08-17.03-13.39-27.51-36.54-28.39-61.57l-1.1-31.36c3.26 48.63 100.86 87.64 220.79 87.64 121.98-.02 220.87-40.37 220.87-90.16z"
   style={{
     fill: "url(#e)",
   }}
 />
</Svg>
</View>

:

<View style={{height:30, width:30, position:"absolute",top:-10, right:-3}}>
<Svg
 xmlns="http://www.w3.org/2000/svg"
 xmlSpace="preserve"
 style={{
   enableBackground: "new 0 0 1080 1080",
 }}
 viewBox="0 0 1080 1080"
 {...props}
>
 <RadialGradient
   id="a"
   cx={334.765}
   cy={791.644}
   r={229.141}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.162}
     style={{
       stopColor: "#f55152",
     }}
   />
   <Stop
     offset={1}
     style={{
       stopColor: "#a00e23",
     }}
   />
 </RadialGradient>
 <Ellipse
   cx={528.81}
   cy={783.82}
   rx={314.51}
   ry={127.94}
   style={{
     fill: "url(#a)",
   }}
 />
 <LinearGradient
   id="b"
   x1={167.915}
   x2={703.679}
   y1={815.833}
   y2={894.186}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.206}
     style={{
       stopColor: "#7f0d1e",
     }}
   />
   <Stop
     offset={0.529}
     style={{
       stopColor: "#f81717",
     }}
   />
   <Stop
     offset={0.904}
     style={{
       stopColor: "#770b11",
     }}
   />
 </LinearGradient>
 <Path
   d="M842.13 783.82v46.49c0 34.15-13.41 66.44-36.33 85.39-97.28 80.41-270.24 80.35-270.24 80.35-159.99-9.26-240.29-45.35-280.34-76.76-24.25-19.01-39.18-51.86-40.43-87.39l-1.57-44.51c4.64 69.02 143.62 124.39 314.39 124.39 173.71-.02 314.52-57.29 314.52-127.96z"
   style={{
     fill: "url(#b)",
   }}
 />
 <RadialGradient
   id="c"
   cx={511.765}
   cy={713.412}
   r={186.858}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.162}
     style={{
       stopColor: "#f55152",
     }}
   />
   <Stop
     offset={1}
     style={{
       stopColor: "#a00e23",
     }}
   />
 </RadialGradient>
 <Path
   d="M750.94 729.74c0 47.08-98.86 85.26-220.84 85.26s-220.84-38.18-220.84-85.26c0-17.25 13.25-33.29 36.04-46.7a92.9 92.9 0 0 0 3.1-1.79c.03 0 .03-.03.03-.03 97.84-59.5 72.65-322.58 72.65-322.58h214.63c-12.83 229.51 43.27 298.99 67.11 317.94 30.14 14.59 48.12 33.06 48.12 53.16z"
   style={{
     fill: "url(#c)",
   }}
 />
 <RadialGradient
   id="d"
   cx={558.164}
   cy={194.311}
   r={211.641}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.162}
     style={{
       stopColor: "#f55152",
     }}
   />
   <Stop
     offset={1}
     style={{
       stopColor: "#a00e23",
     }}
   />
 </RadialGradient>
 <Circle
   cx={528.89}
   cy={250.56}
   r={225.05}
   style={{
     fill: "url(#d)",
   }}
 />
 <LinearGradient
   id="e"
   x1={244.957}
   x2={679.78}
   y1={811.331}
   y2={783.096}
   gradientUnits="userSpaceOnUse"
 >
   <Stop
     offset={0.206}
     style={{
       stopColor: "#7f0d1e",
     }}
   />
   <Stop
     offset={0.529}
     style={{
       stopColor: "#f81717",
     }}
   />
   <Stop
     offset={0.904}
     style={{
       stopColor: "#770b11",
     }}
   />
 </LinearGradient>
 <Path
   d="M749.79 723.65v32.76c0 24.06-9.42 46.81-25.51 60.16-68.31 56.65-189.78 56.61-189.78 56.61-112.36-6.52-168.75-31.95-196.88-54.08-17.03-13.39-27.51-36.54-28.39-61.57l-1.1-31.36c3.26 48.63 100.86 87.64 220.79 87.64 121.98-.02 220.87-40.37 220.87-90.16z"
   style={{
     fill: "url(#e)",
   }}
 />
</Svg>
</View>

// :





  )









}

export default RedGoti


const styles = StyleSheet.create({
  home: {
    height: 40,
    width: 40,
    position: "absolute",
    top: -13,
    right: -8
  },
  cellGoti: {
    transform: [{ rotate: "-90deg" }]
  },

}

)