import styled from "styled-components";
import Cont from "../components/container"
import dark from "../images/bg-mobile-dark.jpg";
import light from "../images/bg-mobile-light.jpg";
import IndItem from "../components/item";

export const Container=styled(Cont)`
display:flex;
flex-direction:column;
background:${props=>props.isDark?'hsl(235, 21%, 11%)':'hsl(0, 0%, 98%)'};
height:1000px;
width:100%;
position:relative;
div.background{
    background-image:url(${props=>props.isDark ? dark : light}) ;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
   
}
.not-bg{
    position:relative;
    bottom: 150px;
}
`
export const BackImg=styled.div`

`

export const Top=styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`

export const Logo=styled.h3`
letter-spacing: 1rem;
font-size: 20px;
text-transform: uppercase;
color: white;
`

export const Switch=styled.img`
height:20px;
width: 20px;
`

export const Item=styled(IndItem)`
background: ${props=>props.isDark?"hsl(235, 24%, 19%)":"hsl(236, 33%, 92%)"};

&:hover{
    background: hsl(236, 33%, 92%);
}
`