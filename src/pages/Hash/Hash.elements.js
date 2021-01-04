import styled from 'styled-components'
import { Container } from '../../globalStyles';


export const BodyContainer = styled.div`
height:100vh;
background:#101522;

`

export const HashContainer = styled(Container)`
width: calc(100% - 30px);
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;

@media screen and (max-width:961px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}


${Container}


`;

export const HashSection = styled.div`

width:350px;
height:250px;
display:flex;
flex-direction:column;
margin-top:50px;
justify-content:center;
align-items:center;
@media  screen and (max-width: 570px) {
    width: calc(100% - 40px);
    
}

`;

export const HashInput = styled.input`
background-color:transparent;
color: white;
font-size:25px;
padding:5px;
outline:none;
border:none;
border-bottom:2px solid yellow;
margin:8px;

&:focus{
    border-bottom:2px solid white;
    transition:0.7s ease all;
}
@media  screen and (max-width: 570px) {
    font-size:18px;
    width:200px
}
`

export const HashSelect = styled.select`
background-color:transparent;
color: white;
font-size:18px;
padding:8px;
outline:none;
border:none;
margin:8px auto 8px auto;
border:2px solid #52579e;
width:150px;
border-radius:5px;
@media  screen and (max-width: 570px) {
    font-size:18px;
}
`
export const HashSelectOption = styled.option`
background-color:whitesmoke;
color:#000;

`

export const HashButton = styled.button`
color: #000;
font-size:24px;
border:none;

padding:10px;
cursor:pointer;
margin:8px auto 8px auto;
border-radius:5px;
@media  screen and (max-width: 570px) {
    font-size:20px;
    width:100px;
    height:40px;
}
`

export const PassInput = styled.input`
background-color:transparent;
color: whitesmoke;
font-size:15px;
letter-spacing:1.3px;
padding:5px;
outline:none;
border:none;
border:2px solid #ff4444;
border-radius:12px;
margin:8px;
text-align:center;
width:350px;
@media  screen and (max-width: 570px) {
    font-size:10px;
    width:150px
}

`
export const IconDiv = styled.div`
@media  screen and (max-width: 570px) {

}
`;

export const Separator = styled.div`

@media screen and (max-width:961px){
    background-color:#747474;
    margin-top:40px;
    width:300px;
    height:0.5px;
}
`

export const UnhashSection = styled.div`
background-color:transparent;
width:350px;
height:250px;
display:flex;
flex-direction:column;

justify-content:center;
align-items:center;
@media  screen and (max-width: 570px) {
    width: calc(100% - 40px);
    
}

`
export const NoteDiv = styled.div`
color:white;
font-size:20px;
line-height:40px;
letter-spacing:1px;
text-align:justify;
background-color:#101522;
padding:10px;
height:20%;
margin-top:20px;
display:flex;
justify-content:center;
align-items:flex-end;
`

