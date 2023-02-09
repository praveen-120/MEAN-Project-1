class BlogInfo{
    constructor(fname,lname,title,content){
        this.fname = fname;
        this.lname = lname;
        this.title = title;
        this.content = content;
    }
}
data = new Array();    
function submitData(){

    alert("Thank you for submitting a blog. We will review it and upload it");
    
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let title = document.forms["myForm"]["title"].value;
    let content = document.forms["myForm"]["content"].value;
    
    

    const obj = new BlogInfo(fname,lname,title,content);
   
    data.push(obj);
    console.log(data);
   
   document.forms["myForm"]["fname"].value='';
    document.forms["myForm"]["lname"].value='';
     document.forms["myForm"]["title"].value='';
    document.forms["myForm"]["content"].value='';
    
    

}
function loginUser(){
    //alert("Thanks for logging.Now you can explore the blogs");
    let username=document.forms["event-registration-form"]["username"].value;
    
    if(!(document.forms["event-registration-form"]["username"].value==="")){
        alert(username);
        window.location.href="index.html";
    }
        //window.location.href="index.html";
    
}
function registerUser(){
    
    let emailId=document.forms["registration-form"]["email"].value;
    let password=document.forms["registration-form"]["password"].value;
    //alert(emailId);
    if(!emailId.includes('@')){
        alert("Inavlid email id entered");
    }
    if(password.length<6){
        alert("Password must be more than 6 characters");
    }
    else if(emailId.includes('@') &(password.length>=6)){
    alert("Thanks for registering.Welcome to the PROGRAMMING LANGUAGES BLOG");
    }
}