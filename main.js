var images=[
"https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg",
"https://st.depositphotos.com/1724125/2704/v/950/depositphotos_27042959-stock-illustration-super-mom.jpg",
"https://st.depositphotos.com/1526816/4327/v/950/depositphotos_43274379-stock-illustration-an-old-woman-with-a.jpg",
"https://st.depositphotos.com/1526816/3206/v/950/depositphotos_32060185-stock-illustration-a-cute-little-girl-with.jpg"];

var text=["Rajiv Arora","Deepika Arora","Rashmi Arora","Rishita Arora"];

var i=0;
function nextimage(){
    document.getElementById("img").src=images[i];
    document.getElementById("name").innerHTML=text[i]; 
    i++;

    if (i==4){
        i=0;
    }
}