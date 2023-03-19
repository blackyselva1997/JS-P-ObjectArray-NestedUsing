document.write("7. object with array in nested using");
  document.write("<br>");
  document.write("<br>");

  const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};

const isobject = function(value) {
    if (value === null) {
        return false;
    }
    return typeof value === 'object';
};
const nestedobject = function (obj) {
    for (let key in obj) {
        if (isobject(obj[key])){
            for (let innerKey in obj[key]){
              if (isobject(obj[key][innerKey])){
            for (let outerKey in obj[key][innerKey]){
                console.log(`${outerKey} ===> ${obj[key][innerKey] [outerKey]}`);
                document.write("<br>");
            }
        }
        else {
            console.log(`${innerKey} ===> ${obj[key][innerKey]}`);
            document.write("<br>");
        }
            }
        }
        else {
            console.log(`${key} ===> ${obj[key]}`);
            document.write("<br>");
        }
    }
}