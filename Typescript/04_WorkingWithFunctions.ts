
function displ_details(id: number, name: string) {
    console.log("id: " + id);
    console.log("name: " + name); 
}

function access_user(id: number, name: string, mail_id?: string) {
    console.log("id: " + id);
    console.log("name: " +  name);
    console.log("mail_id: " + mail_id);
}

displ_details(123, "john");
displ_details(234, "paul");


access_user(234, "afj");
access_user(257, "mkl", "mkl@gmail.com");
