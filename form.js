const validate =  (event) => {
    const firstElement = document.getElementById("first");
    const lastElement = document.getElementById("last");
    const contactElement = document.getElementById("contact");
    const emailElement = document.getElementById("email");
    const placeElement = document.getElementById("place");
    
    const first = firstElement.value.trim();
    const last = lastElement.value.trim();
    const contact = contactElement.value.trim();
    const email = emailElement.value.trim();
    const place = placeElement.value.trim();

    const firstErroreElement = document.getElementById("firstError")
    if(!/^[A-Z a-z]+$/.test(first)){
        event.preventDefault();
        firstErroreElement.textContent = " First Name is required and should only contain only alphabetic character (A-Z, a-z)";
        return;
    }else{
        firstErroreElement.textContent = "";
    }
    const lastErroreElement = document.getElementById("lasyError")
    if(!/^[A-Z a-z]+$/.test(last)){
        event.preventDefault();
        lastErroreElement.textContent = " First Name is required and should only contain only alphabetic character (A-Z, a-z)";
        return;
    }else{
        lastErroreElement.textContent = "";
    }
    const contactErroreElement = document.getElementById("contactError")
    if(!/^[0-9]{10}+$/.test(contact)){
        event.preventDefault();
        contactErroreElement.textContent = "Contact should only contain 10 digits (0-9)";
        return;
    }else{
        contactErroreElement.textContent = "";
    }
    const emailErroreElement = document.getElementById("emailError")
    if(!/^[0-9]{10}+$/.test(email)){
        event.preventDefault();
        emailErroreElement.textContent = "Contact should only contain 10 digits (0-9)";
        return;
    }else{
        emailErroreElement.textContent = "";
    }
    const placeErroreElement = document.getElementById("placeError")
    if(!/^[0-9]{10}+$/.test(place)){
        event.preventDefault();
        placeErroreElement.textContent = "Contact should only contain 10 digits (0-9)";
        return;
    }else{
        placeErroreElement.textContent = "";
    }
    
}