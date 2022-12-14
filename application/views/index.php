<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo "Book Finder" ?></title>
    <link href="<?php echo base_url('assets/css/bootstrap.min.css') ?>" rel="stylesheet">
    <link href="<?php echo base_url('assets/css/bootstrap.css') ?>" rel="stylesheet">
    <link href="<?php echo base_url('assets/css/style.css') ?>" rel="stylesheet">
    <link href="<?php echo base_url('assets/css/hoover.css') ?>" rel="stylesheet">


</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <a class="navbar-brand" href="<?php base_url() ?>">Book Finder</a>
    </nav>
    <div class="container-fluid">
        <div class="row w-100 p-3 justify-content-center">
            <div class="col-md-5">
                <h1 class="text-center" style="color:white">Book Search</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="search-input" placeholder="Book's Title">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="find-button">Find</button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row justify-content-center" id="book-list">
        </div>

    </div>
    <script src="<?php echo base_url('assets/js/jquery-3.6.0.min.js') ?>"></script>
    <script src="<?php echo base_url('assets/js/jquery.min.js') ?>"></script>
    <script src="<?php echo base_url('assets/js/bootstrap.min.js') ?>"></script>
    <script src="<?php echo base_url('assets/js/find-book.js') ?>"></script>
</body>

</html>