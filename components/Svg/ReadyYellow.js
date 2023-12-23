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

const ReadyYellow = (props) => (

    <Animatable.View 
    style={[{height:30,width:30,position:"absolute", top:-10,right:-3},]}
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
        <Stop offset={0.16} stopColor="#f8ebbe" />
        <Stop offset={1} stopColor="#fbcc3e" />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={542.11}
        cy={615.82}
        r={224.54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#f7e016" />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={375.28}
        cy={148.24}
        r={266.06}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.16} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#f5e543" />
      </RadialGradient>
      <LinearGradient
        id="b"
        x1={225.22}
        x2={854.13}
        y1={918.93}
        y2={918.93}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f6c10f" />
        <Stop offset={0.53} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#f6c10f" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={372.18}
        x2={699.71}
        y1={615.82}
        y2={615.82}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.01} stopColor="#f1f523" />
        <Stop offset={0.57} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#e4f12a" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={256.96}
        x2={691.78}
        y1={840.33}
        y2={812.1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f8d363" />
        <Stop offset={0.53} stopColor="#f6f6f6" />
        <Stop offset={1} stopColor="#fcce43" />
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
      d="M854.13 812.82v46.49c0 34.16-13.41 66.45-36.33 85.39-97.27 80.41-270.24 80.35-270.24 80.35-160-9.26-240.29-45.36-280.34-76.76-24.25-19-39.18-51.86-40.43-87.4l-1.57-44.51c4.64 69 143.62 124.38 314.39 124.38 173.71 0 314.52-57.27 314.52-127.94Z"
      style={{
        fill: "url(#b)",
      }}
      transform="translate(-225.22 -54.51)"
    />
    <Path
      d="M761.79 758.74c0 47.08-98.87 85.26-220.79 85.26s-220.83-38.18-220.83-85.26c0-17.25 13.25-33.28 36-46.69 1.06-.58 2.08-1.19 3.11-1.8 97.84-59.5 72.65-322.58 72.65-322.58h214.64c-12.84 229.51 43.27 299 67.11 317.94 30.12 14.56 48.11 33.03 48.11 53.13Z"
      style={{
        fill: "url(#c)",
      }}
      transform="translate(-225.22 -54.51)"
    />
    <Path
      d="M762.94 758.74c0 47.08-98.86 85.26-220.83 85.26s-220.84-38.18-220.84-85.26c0-17.25 13.25-33.28 36-46.69 1.06-.58 2.08-1.19 3.1-1.8 97.84-59.5 72.65-322.58 72.65-322.58h214.7c-12.83 229.51 43.27 299 67.12 317.94 30.16 14.56 48.1 33.03 48.1 53.13Z"
      style={{
        fill: "url(#d)",
      }}
      transform="translate(-225.22 -54.51)"
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
      d="M761.79 752.65v32.76c0 24.06-9.42 46.81-25.52 60.16-68.31 56.65-189.78 56.6-189.78 56.6-112.36-6.52-168.75-31.95-196.88-54.08-17-13.39-27.51-36.54-28.39-61.57l-1.1-31.36c3.25 48.62 100.86 87.63 220.79 87.63 121.99 0 220.88-40.35 220.88-90.14Z"
      style={{
        fill: "url(#f)",
      }}
      transform="translate(-225.22 -54.51)"
    />
  </Svg>

    
{/* <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    x="0%"
    y="0%"
    className="yellowpiece"
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
      fill="#ffe01b"
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={0.901}
      d="M11.92 2.7c2.25 0 4.07 1.82 4.07 4.07s-1.82 4.08-4.07 4.08-4.07-1.83-4.07-4.08S9.67 2.7 11.92 2.7z"
    />
  </Svg> */}
  </Animatable.View>
)
export default ReadyYellow
