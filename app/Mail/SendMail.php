<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $phone;
    public $body;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $phone, $body)
    {
        $this->name = $name;
        $this->phone = $phone;
        $this->body = $body;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email')->subject('Order')->with(['phone' => $this->phone]);
    }
}
