.slide{
    position: fixed;
   height: 100vh;
    width: 180px;
    background-image:radial-gradient(dodgerblue,#265282);
    transition: 0.5s ease;
    transform: translateX(-180px);
    
}
.slide h2{
    position: absolute;
    color: #333;
    top: -40px;
    font-weight: 300;
    text-align: right;
    padding: 10px 0;
    padding-right: 30px;
    margin-left: 2rem;
    pointer-events: none;
}
ol li{
    list-style: none;
}
ol li a{
    color: #d3c58f;
    font-size: 1.2rem;
    font-weight: 500;
    display:block;
    text-transform: capitalize;
    text-decoration: none;
    margin-top: 1em;
    transition: 0.2s ease-out;
    line-height: 2em;
}
ol li:hover a{
    color: #333;
    background-color: #F6C913;
}
input{
    display: none;
    visibility: hidden;
    -webkit-appearance: none;
}
.toggle{
    position: relative;
    height: 30px;
    width: 30px;
    z-index: 1;
    cursor: pointer;
    border-radius: 2px;
    top: 20px;
    left: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}
.toggle .common{
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: #d3c58f;
    border-radius: 50px;
    transition: 0.3s ease;
}
.toggle .top_line{
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.toggle .middle_line{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.toggle .bottom_line{
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
}
input:checked ~ .toggle .top_line{
left: 2px;
top: 14px;
width: 25px;
transform: rotate(45deg);
}
input:checked ~ .toggle .bottom_line{
    left: 2px;
    top: 14px;
    width: 25px;
    transform: rotate(-45deg);
}
input:checked ~ .toggle .middle_line{
    opacity: 0;
transform: translate(25px);
}
input:checked ~ .toggle .slide{
 transform: translateX(0);
 box-shadow: 0 0 15px rgba(0,0,0,0.5);
}


