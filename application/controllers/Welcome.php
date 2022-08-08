<?php

class Welcome extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$this->load->view('index.php');
	}

	public function detail($data)
	{
		$isbn = array(
			'isbn' => $data
		);
		$this->load->view('detail.php', $isbn);
	}
}
