import React, {useRef, useState, useEffect}  from "react"

import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
} from "react-native-svg"
import { View, TouchableWithoutFeedback , TouchableOpacity, PanResponder, Animated, StyleSheet} from "react-native"
import * as Animatable from 'react-native-animatable';
import { B1, B8, FINISHED, G1, G8, R1, R8, Y1, Y8 } from "../../util/Constants";
import { Image } from "react-native";

const RedGoti = (props) => {

console.log("9", props.positions.four.position)

return (


  props.position == FINISHED  ?  


   <View style={{height:12,width:12, flex:1}}>
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 988.09 1064.42"
    {...props}
  >
    <Defs></Defs>
    <Path
      d="M917.32 1064.42h-604.8c-55.54 0-89.37-61.15-59.85-108.2l19-30.32c83.47-40.84 209-66.8 349.3-66.8 130.45 0 248 22.43 331 58.35l24.57 37.83c30.55 47-3.17 109.14-59.22 109.14Z"
      className="cls-1"
    />
    <Path
      d="M983.7 955.18c-83-51.7-200.56-84-331-84-140.35 0-265.83 37.34-349.31 96.12l202.89-465.1c-82.13-44.57-137.87-131.39-137.87-231.19 0-145.28 118.11-263 263.8-263S896 125.77 896 271.05c0 92.94-48.34 174.62-121.31 221.41Z"
      style={{
        fill: "#ff1515",
      }}
      transform="translate(-31.91 -8)"
    />
    <Path
      d="M839.09 151c-45.35-27.21-455.1.18-464.17-2.85s3-36.28 3-36.28c-6.92 4.9-12.76 12.49-17.66 21.95 0 0-109.33-152-360.28-97.54 0 0 154.2 60.47 27.21 120.94 0 0 217-35.19 318.86 18.6-5.56 24.94-8.43 53.18-9.83 78.76-112.5 11.31-206.23-88.29-206.23-88.29 15.1 84.71-48.36 96.76-48.36 96.76 48.74 65 218.63 23.31 253.68 13.85-.85 32.05 12.39 55.69 12.39 55.69C486.79 396.08 826.09 399 826.09 399c84.66-99.78 13-248 13-248Zm-433.94 39.48c51.4 63.5 163.27 87.69 163.27 87.69-181.41 87.68-163.27-87.69-163.27-87.69Zm214.1 86.57c81.66-2.18 168.92-76.23 168.92-76.23-40.78 197.32-168.92 76.23-168.92 76.23Z"
      className="cls-1"
    />
  </Svg>
           
     {/* <Svg
   xmlns="http://www.w3.org/2000/svg"
   xmlSpace="preserve"
   x="0%"
   y="0%"
   className="redpiece"
   viewBox="0 0 25 24"
   {...props}
 >
   <Defs>
     <LinearGradient
       id="a"
       x1="-3.107%"
       x2="100.605%"
       y1="49.865%"
       y2="50.091%"
     >
       <Stop
         offset="0%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="6.078%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="6.915%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="15.308%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="15.397%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="24.482%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="23.852%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="31.406%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="31.673%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="40.151%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="39.95%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="47.912%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="48.169%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="56.636%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="56.896%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="63.504%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="63.484%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="70.505%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="70.453%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="78.398%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="78.685%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="86.747%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="86.677%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="95.395%"
         style={{
           stopColor: "#fff",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="95.665%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
       <Stop
         offset="100%"
         style={{
           stopColor: "#000",
           stopOpacity: 1,
         }}
       />
     </LinearGradient>
   </Defs>
   <Path
     fill="none"
     stroke="#000"
     strokeLinecap="square"
     strokeWidth={1.556}
     d="M12.15 12.38c2.8 0 5.06 2.15 5.06 4.81 0 2.65-2.26 4.8-5.06 4.8s-5.06-2.15-5.06-4.8c0-2.66 2.26-4.81 5.06-4.81z"
   />
   <Path
     fill="#FFF"
     stroke="#000"
     strokeLinecap="square"
     strokeWidth={0.901}
     d="M12.15 17.19c-2.82-3.06-5.98-6.88-6.14-10.5 0-7.79 12.14-7.79 12.1-.04-.15 3.35-2.99 7.52-5.96 10.54z"
   />
   <Path
     fill="#ec1d27"
     stroke="#000"
     strokeLinecap="square"
     strokeWidth={0.901}
     d="M11.92 2.7c2.25 0 4.07 1.82 4.07 4.07s-1.82 4.08-4.07 4.08-4.07-1.83-4.07-4.08S9.67 2.7 11.92 2.7z"
   />
     </Svg> */}
   </View>                   
 
 :   


//   props.positions.one.position == R1 || R8 || Y1 || Y8 || G1 || G8 || B1 || B8  ?  
//   <View style={{height:20,width:20,position:"absolute", top:-8, right:-2}}>
// <Svg
//   xmlns="http://www.w3.org/2000/svg"
//   id="Layer_1"
//   data-name="Layer 1"
//   viewBox="0 0 988.09 1064.42"
//   {...props}
// >
//   <Defs></Defs>
//   <Path
//     d="M917.32 1064.42h-604.8c-55.54 0-89.37-61.15-59.85-108.2l19-30.32c83.47-40.84 209-66.8 349.3-66.8 130.45 0 248 22.43 331 58.35l24.57 37.83c30.55 47-3.17 109.14-59.22 109.14Z"
//     className="cls-1"
//   />
//   <Path
//     d="M983.7 955.18c-83-51.7-200.56-84-331-84-140.35 0-265.83 37.34-349.31 96.12l202.89-465.1c-82.13-44.57-137.87-131.39-137.87-231.19 0-145.28 118.11-263 263.8-263S896 125.77 896 271.05c0 92.94-48.34 174.62-121.31 221.41Z"
//     style={{
//       fill: "#ff1515",
//     }}
//     transform="translate(-31.91 -8)"
//   />
//   <Path
//     d="M839.09 151c-45.35-27.21-455.1.18-464.17-2.85s3-36.28 3-36.28c-6.92 4.9-12.76 12.49-17.66 21.95 0 0-109.33-152-360.28-97.54 0 0 154.2 60.47 27.21 120.94 0 0 217-35.19 318.86 18.6-5.56 24.94-8.43 53.18-9.83 78.76-112.5 11.31-206.23-88.29-206.23-88.29 15.1 84.71-48.36 96.76-48.36 96.76 48.74 65 218.63 23.31 253.68 13.85-.85 32.05 12.39 55.69 12.39 55.69C486.79 396.08 826.09 399 826.09 399c84.66-99.78 13-248 13-248Zm-433.94 39.48c51.4 63.5 163.27 87.69 163.27 87.69-181.41 87.68-163.27-87.69-163.27-87.69Zm214.1 86.57c81.66-2.18 168.92-76.23 168.92-76.23-40.78 197.32-168.92 76.23-168.92 76.23Z"
//     className="cls-1"
//   />
// </Svg> 
//   </View> 
//   :
//  props.positions.two.position == R1 || R8 || Y1 || Y8 || G1 || G8 || B1 || B8  ?  
// <View style={{height:20,width:20,position:"absolute", top:-0, right:-2,backgroundColor:"black"}}>
// <Svg
//   xmlns="http://www.w3.org/2000/svg"
//   id="Layer_1"
//   data-name="Layer 1"
//   viewBox="0 0 988.09 1064.42"
//   {...props}
// >
//   <Defs></Defs>
//   <Path
//     d="M917.32 1064.42h-604.8c-55.54 0-89.37-61.15-59.85-108.2l19-30.32c83.47-40.84 209-66.8 349.3-66.8 130.45 0 248 22.43 331 58.35l24.57 37.83c30.55 47-3.17 109.14-59.22 109.14Z"
//     className="cls-1"
//   />
//   <Path
//     d="M983.7 955.18c-83-51.7-200.56-84-331-84-140.35 0-265.83 37.34-349.31 96.12l202.89-465.1c-82.13-44.57-137.87-131.39-137.87-231.19 0-145.28 118.11-263 263.8-263S896 125.77 896 271.05c0 92.94-48.34 174.62-121.31 221.41Z"
//     style={{
//       fill: "#ff1515",
//     }}
//     transform="translate(-31.91 -8)"
//   />
//   <Path
//     d="M839.09 151c-45.35-27.21-455.1.18-464.17-2.85s3-36.28 3-36.28c-6.92 4.9-12.76 12.49-17.66 21.95 0 0-109.33-152-360.28-97.54 0 0 154.2 60.47 27.21 120.94 0 0 217-35.19 318.86 18.6-5.56 24.94-8.43 53.18-9.83 78.76-112.5 11.31-206.23-88.29-206.23-88.29 15.1 84.71-48.36 96.76-48.36 96.76 48.74 65 218.63 23.31 253.68 13.85-.85 32.05 12.39 55.69 12.39 55.69C486.79 396.08 826.09 399 826.09 399c84.66-99.78 13-248 13-248Zm-433.94 39.48c51.4 63.5 163.27 87.69 163.27 87.69-181.41 87.68-163.27-87.69-163.27-87.69Zm214.1 86.57c81.66-2.18 168.92-76.23 168.92-76.23-40.78 197.32-168.92 76.23-168.92 76.23Z"
//     className="cls-1"
//   />
// </Svg> 
// </View> 
//   :


<View style={[{height:30,width:30,position:"absolute", top:-10, right:-3,alignSelf:"auto"},]}>
<Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 988.09 1064.42"
    {...props}
  >
    <Defs></Defs>
    <Path
      d="M917.32 1064.42h-604.8c-55.54 0-89.37-61.15-59.85-108.2l19-30.32c83.47-40.84 209-66.8 349.3-66.8 130.45 0 248 22.43 331 58.35l24.57 37.83c30.55 47-3.17 109.14-59.22 109.14Z"
      className="cls-1"
    />
    <Path
      d="M983.7 955.18c-83-51.7-200.56-84-331-84-140.35 0-265.83 37.34-349.31 96.12l202.89-465.1c-82.13-44.57-137.87-131.39-137.87-231.19 0-145.28 118.11-263 263.8-263S896 125.77 896 271.05c0 92.94-48.34 174.62-121.31 221.41Z"
      style={{
        fill: "#ff1515",
      }}
      transform="translate(-31.91 -8)"
    />
    <Path
      d="M839.09 151c-45.35-27.21-455.1.18-464.17-2.85s3-36.28 3-36.28c-6.92 4.9-12.76 12.49-17.66 21.95 0 0-109.33-152-360.28-97.54 0 0 154.2 60.47 27.21 120.94 0 0 217-35.19 318.86 18.6-5.56 24.94-8.43 53.18-9.83 78.76-112.5 11.31-206.23-88.29-206.23-88.29 15.1 84.71-48.36 96.76-48.36 96.76 48.74 65 218.63 23.31 253.68 13.85-.85 32.05 12.39 55.69 12.39 55.69C486.79 396.08 826.09 399 826.09 399c84.66-99.78 13-248 13-248Zm-433.94 39.48c51.4 63.5 163.27 87.69 163.27 87.69-181.41 87.68-163.27-87.69-163.27-87.69Zm214.1 86.57c81.66-2.18 168.92-76.23 168.92-76.23-40.78 197.32-168.92 76.23-168.92 76.23Z"
      className="cls-1"
    />
  </Svg>
       
{/* <Svg
 xmlns="http://www.w3.org/2000/svg"
 xmlSpace="preserve"
 x="0%"
 y="0%"
 className="redpiece"
 viewBox="0 0 25 24"
 {...props}
>
 <Defs>
   <LinearGradient
     id="a"
     x1="-3.107%"
     x2="100.605%"
     y1="49.865%"
     y2="50.091%"
   >
     <Stop
       offset="0%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="6.078%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="6.915%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="15.308%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="15.397%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="24.482%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="23.852%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="31.406%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="31.673%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="40.151%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="39.95%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="47.912%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="48.169%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="56.636%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="56.896%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="63.504%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="63.484%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="70.505%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="70.453%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="78.398%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="78.685%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="86.747%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="86.677%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="95.395%"
       style={{
         stopColor: "#fff",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="95.665%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
     <Stop
       offset="100%"
       style={{
         stopColor: "#000",
         stopOpacity: 1,
       }}
     />
   </LinearGradient>
 </Defs>
 <Path
   fill="none"
   stroke="#000"
   strokeLinecap="square"
   strokeWidth={1.556}
   d="M12.15 12.38c2.8 0 5.06 2.15 5.06 4.81 0 2.65-2.26 4.8-5.06 4.8s-5.06-2.15-5.06-4.8c0-2.66 2.26-4.81 5.06-4.81z"
 />
 <Path
   fill="#FFF"
   stroke="#000"
   strokeLinecap="square"
   strokeWidth={0.901}
   d="M12.15 17.19c-2.82-3.06-5.98-6.88-6.14-10.5 0-7.79 12.14-7.79 12.1-.04-.15 3.35-2.99 7.52-5.96 10.54z"
 />
 <Path
   fill="#ec1d27"
   stroke="#000"
   strokeLinecap="square"
   strokeWidth={0.901}
   d="M11.92 2.7c2.25 0 4.07 1.82 4.07 4.07s-1.82 4.08-4.07 4.08-4.07-1.83-4.07-4.08S9.67 2.7 11.92 2.7z"
 />
</Svg> */}


</View>

  

 
 
)





}
 
export default RedGoti


const styles = StyleSheet.create({
  home:{
    height:40,
    width:40,
    position:"absolute", 
    top:-13,
    right:-8
  },
  cellGoti:{
    transform: [{ rotate: "-90deg" }]
  },

}
 
)