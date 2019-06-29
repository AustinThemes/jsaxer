// JSAXer
 $(document).ready(function () {
    $.ajax({ 
        type: 'GET', 
        url: 'https://jsonplaceholder.typicode.com/posts/', 
        data: { get_param: 'value' },
        dateType: "json",
        success: function (data) {
            var edt_output_string = '<div class="jsaxer-list-wrapper"><ul class="jsaxer-list">';
            data.sort(function(a,b){
                return new Date(b.id) - new Date(a.id);
            });
            for (var i = 0, len = 15; i < len; i++) {
                   edt_output_string += '<li class="jsaxer-list-item col-6 col-sm-12" onLoad="$(this).hide().fadeIn(' + ( i * 100)  + ')"><div class="jsaxer-list-item-date">' + data[i]["title"] + '</div><div class="jsaxer-list-item-title">' + data[i]["body"] + '</div><div class="jsaxer-list-item-author"><i class="fas fa-user"></i> ' + data[i]["userId"] + '</div></li>';
            }
            edt_output_string += '</ul></div>';
            document.getElementById('ct-output').innerHTML = edt_output_string;
        }
    });
});

// Effects
function jxL(ObjToFade,FadeDuration){
$(ObjToFade).hide();
$(ObjToFade).fadeIn(FadeDuration);    
}