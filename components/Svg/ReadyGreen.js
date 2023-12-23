import * as React from "react"
// import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
  Circle
} from "react-native-svg"
import { View } from "react-native"
import * as Animatable from 'react-native-animatable';
const ReadyGreen = (props) => (

    <Animatable.View 
    style={[{height:30,width:30,position:"absolute", top:-10, right:-3},]}
     animation="fadeIn"// Specify the animation name
    easing="ease-in-out"
    iterationCount="infinite"
    duration={1000} // Animation duration in milliseconds
  >


<Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 630.11 970.54"
    {...props}
  >
    <Defs>
      <RadialGradient
        id="a"
        cx={121.55}
        cy={766.14}
        r={229.14}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#75c362" />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={541.99}
        cy={616.05}
        r={224.54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#8ac446" />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={344.95}
        cy={168.81}
        r={211.64}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#71be2b" />
      </RadialGradient>
      <LinearGradient
        id="b"
        x1={225.1}
        x2={854.02}
        y1={919.16}
        y2={919.16}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.03} stopColor="#219730" />
        <Stop offset={0.53} stopColor="#f6f6f6" />
        <Stop offset={0.9} stopColor="#44a829" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={372.06}
        x2={699.59}
        y1={616.05}
        y2={616.05}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.01} stopColor="#65b82d" />
        <Stop offset={0.57} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#3ea531" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={256.84}
        x2={691.66}
        y1={840.55}
        y2={812.32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.03} stopColor="#118e34" />
        <Stop offset={0.53} stopColor="#f6f6f6" />
        <Stop offset={0.9} stopColor="#34a12f" />
      </LinearGradient>
    </Defs>
    <Ellipse
      cx={315.6}
      cy={758.32}
      rx={314.51}
      ry={127.94}
      style={{
        fill: "url(#a)",
      }}
    />
    <Path
      d="M854 813.05v46.49c0 34.15-13.42 66.44-36.33 85.38-97.28 80.41-270.25 80.35-270.25 80.35-160-9.26-240.28-45.35-280.34-76.76-24.24-19-39.18-51.86-40.43-87.39l-1.55-44.52C229.74 885.62 368.72 941 539.5 941 713.2 941 854 883.71 854 813.05Z"
      style={{
        fill: "url(#b)",
      }}
      transform="translate(-225.1 -54.73)"
    />
    <Path
      d="M761.67 759c0 47.08-98.86 85.27-220.84 85.27S320 806 320 759c0-17.25 13.25-33.28 36-46.69 1-.58 2.08-1.19 3.1-1.79C457 651 431.82 387.86 431.82 387.86h214.63c-12.83 229.51 43.27 299 67.12 317.94 30.11 14.6 48.1 33.07 48.1 53.2Z"
      style={{
        fill: "url(#c)",
      }}
      transform="translate(-225.1 -54.73)"
    />
    <Path
      d="M762.82 759c0 47-98.82 85.23-220.82 85.23S321.15 806 321.15 759c0-17.25 13.25-33.28 36-46.69 1.06-.58 2.08-1.19 3.11-1.79C458.17 651 433 387.86 433 387.86h214.61c-12.84 229.51 43.27 299 67.11 317.94 30.12 14.6 48.1 33.07 48.1 53.2Z"
      style={{
        opacity: 0.49,
        fill: "url(#d)",
      }}
      transform="translate(-225.1 -54.73)"
    />
    <Circle
      cx={315.67}
      cy={225.05}
      r={225.05}
      style={{
        fill: "url(#e)",
      }}
    />
    <Path
      d="M761.67 752.88v32.75c0 24.06-9.42 46.81-25.51 60.16-68.32 56.65-189.79 56.61-189.79 56.61-112.35-6.53-168.75-32-196.88-54.09-17-13.39-27.51-36.53-28.39-61.57l-1.1-31.36C323.26 804 420.86 843 540.79 843c121.99 0 220.88-40.34 220.88-90.12Z"
      style={{
        fill: "url(#f)",
      }}
      transform="translate(-225.1 -54.73)"
    />
  </Svg>
    
{/* <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    x="0%"
    y="0%"
 
    viewBox="0 0 24 24"
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
      fill="#01A147"
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={0.901}
      d="M11.92 2.7c2.25 0 4.07 1.82 4.07 4.07s-1.82 4.08-4.07 4.08-4.07-1.83-4.07-4.08S9.67 2.7 11.92 2.7z"
    />
  </Svg> */}
  </Animatable.View>
)
export default ReadyGreen
