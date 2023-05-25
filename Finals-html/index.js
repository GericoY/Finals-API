$(document).ready(function() {
    $.ajax({
        url: "http://finals-api.test/students",
        type: "GET",
        success: function(response) {
            txt = "";
            for(var item of response){
                txt += 
                `
                <tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.name}</td>
                    <td>${item.course}</td>
                    <td>
                    <a href="students.html?id=${item.id}" class="link-dark btn btn-outline-info btn-sm">More Details</a>
                    </td>
                </tr>
                
                `;
                document.getElementById("data").innerHTML = txt;
            }
        },
    })
});

function addRecord() {
    var data = {
        name : document.getElementById("name").value,
        course : document.getElementById("course").value,
    }
    $(document).ready(function() {
        $.ajax({
            url: "http://finals-api.test/students/add",
            type: "POST",
            data: JSON.stringify(data),
            success: function(response) {
            window.location.href = 'index.html';
            },
        });
    })
}

