$(window).on('load', function () {
    $.ajax({

        url: 'https://www.googleapis.com/books/v1/volumes/?',
        type: 'get',
        dataType: 'json',
        data: {
            'key': 'AIzaSyAe6gtTZeqtwy9MlTcisgJGIPYVP_SJAH0',
            'q': 'isbn:' + $('#isbn').val(),
        },
        success: function (result) {

            let book = result.items[0];
            let img = book.volumeInfo.imageLinks.thumbnail;
            let title = book.volumeInfo.title;
            let authors = book.volumeInfo.authors;
            if (authors == undefined) {
                authors = '-'
            }
            let publisher = book.volumeInfo.publisher;
            if (publisher == undefined) {
                publisher = '-'
            }
            let publishedDate = book.volumeInfo.publishedDate;
            if (publishedDate == undefined) {
                publishedDate = '-'
            }
            let categories = book.volumeInfo.categories;
            if (categories == undefined) {
                categories = '-'
            }
            let pageCount = book.volumeInfo.pageCount;
            if (pageCount == undefined) {
                pageCount = '-'
            }
            let language = book.volumeInfo.language;
            if (language == 'id') {
                language = 'Indonesia'
            } else if (language == 'en') {
                language = 'English'
            }
            let buyLink = book.saleInfo.buyLink;
            if (buyLink == undefined) {
                buyLink = book.volumeInfo.infoLink
            }

            let description = book.volumeInfo.description;
            if (description == undefined) {
                description = "Descrption Is Not Available!"
            }
            $('#detail-book').append(`
            
            <div class="col-md-3.01">
                <div class="card border-secondary" style="width: 22rem;">
                    <img class="img" style="width: 100%!important;height: 100%!important;"  
                    src="`+ img + '?&fife=w400-h600' + `">      
                </div>
                <div class="card mt-2 border-secondary" style="background-color: #733427">
                        <h3 style=" text-align: center;"> <a style="color:white; " class="link text-center " target='_blank'href="`+ buyLink + `">Buy On Google Play</a></h3>
                </div>
                
            </div>
            <div class="col-md-8">
                <ul class="list-group ">
                    <li class="list-group-item">
                        <dl class="row">
                            <dt class="col-sm-3">Title </dt>
                            <dd class="col-sm-9">`+ title + `</dd>
                            <dt class="col-sm-3">Authors </dt>
                            <dd class="col-sm-9">`+ authors + `</dd>
                            <dt class="col-sm-3">Publisher </dt>
                            <dd class="col-sm-9">`+ publisher + `</dd>
                            <dt class="col-sm-3">Published Date </dt>
                            <dd class="col-sm-9">`+ publishedDate + `</dd>
                            <dt class="col-sm-3">Categories </dt>
                            <dd class="col-sm-9">`+ categories + `</dd>
                        </dl>
                    </li>
                    
                    <li class="list-group-item">
                    <dl class="row">
                        <dt class="col-sm-3">Page </dt>
                        <dd class="col-sm-9">`+ pageCount + `</dd>
                        <dt class="col-sm-3">Language </dt>
                        <dd class="col-sm-9">`+ language + `</dd>

                    </dl>
                    </li>
                    <li class="list-group-item">
                        <dl class="row">
                            <dt class="col-sm-3">Description </dt>
                            <dd class="col-sm-9">`+ description + `</dd>
                        </dl>
                    </li>
                    <li class="list-group-item">
                     
                    </li>
                    
                </ul>
            </div>
            
            
        </ul>
            </div>
             `)
        }
    })
});




