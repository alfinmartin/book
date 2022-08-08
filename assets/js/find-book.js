function search() {
    $('#book-list').html('');
    $.ajax({

        url: 'https://www.googleapis.com/books/v1/volumes?',
        type: 'get',
        dataType: 'json',
        data: {
            'key': 'AIzaSyAe6gtTZeqtwy9MlTcisgJGIPYVP_SJAH0',
            'q': $('#search-input').val(),
            'maxResults': 20
        },
        success: function (result) {
            if (result.totalItems !== 0) {
                let book = result.items;
                $.each(book, function (i, data) {
                    $('#book-list').append(`
                    <div class="col-md-3 ">

                        <div class="card mb-3">
                            <div class="img-container">
                                <a href="#" class="detail" data-title="`+ data.volumeInfo.title + `"data-id="` + data.volumeInfo.industryIdentifiers[0].identifier + `">                            
                                <img class="card-img-top img-fluid"src="` + data.volumeInfo.imageLinks.thumbnail + '?&fife=w400-h600' + `" alt="">
                                </a>
                            </div>
                        <div>
                    </div>
                `)
                    $('.detail').on("click", function () {
                        let isbn = $(this).data('id');
                        let title = $(this).data('title');

                        window.location.href = 'welcome/detail/' + isbn

                    })

                })


            } else {
                $('#book-list').append(`
                <div class="col">
                <h4 class="text-center" style="color:white">Not Found!</h4>
                </div>
            `)
            }


        },
        error: function () {
            alert('failure');
        }
    })
}
$('#find-button').on("click", function () {
    search();
})

$('#search-input').on("keyup", function (e) {
    if (e.keyCode == 13) {
        search();
    }
})
