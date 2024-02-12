emailjs.init('RhVhZ_i1vGpODEOf4');
// emailjs.send("service_0sfvtdp", "template_4gs5s4p", {
//     from_name: "Jack dyne",
//     to_name: "Mthobisi",
//     email_id: "1",
//     message: "im new here",
//     reply_to: "jackdyne@gmail.com",
// });
var name_status = {
    status: false,
    names: ''
}
var email_status = {
    status: false,
    email: ''
}
var query_status = {
    status: false,
    query: ''
}

function validateData(elemnt, type) {
    function validateName() {
        var value = elemnt.value;
        var splitted = value.split(' ');

        if (splitted.length == 2) {
            // console.log(splitted)
            document.querySelector('.name_error').innerHTML = ' ';
            name_status.status = true;
            name_status.names = value;
            console.log(name_status)
        } else {
            document.querySelector('.name_error').innerHTML = 'Please use Name and Last name.'
        }
    }

    function validateEmail() {
        var value = elemnt.value;

        if (value.includes('@')) {
            // console.log(splitted)
            document.querySelector('.email_error').innerHTML = ' ';
            email_status.status = true;
            email_status.email = value;
            console.log(email_status)
        } else {
            document.querySelector('.email_error').innerHTML = 'Please use correct email address.'
        }
    }

    function validateQuery() {
        var value = elemnt.value;

        if (value !== '') {
            // console.log(splitted)
            document.querySelector('.query_error').innerHTML = ' ';
            query_status.status = true;
            query_status.query = value;
            console.log(query_status)
        } else {
            document.querySelector('.query_error').innerHTML = 'Please fill in your query.'
        }
    }
    if (type == 'names') {
        validateName();
    } else if (type == 'email') {
        validateEmail();
    } else if (type == 'query') {
        validateQuery();
    }
}

function submitEmail() {
    if (name_status.status && email_status.status && query_status.status) {
        emailjs.send("service_0sfvtdp", "template_4gs5s4p", {
            from_name: name_status.names,
            to_name: "Mthobisi",
            email_id: email_status.email,
            message: query_status.query,
            reply_to: email_status.email,
        }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            var all_inputs = document.querySelectorAll('input');
            var all_errors = document.querySelectorAll('.error');
            all_errors.forEach(element => {
                element.innerHTML = '';
            });
            location.reload();
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
}