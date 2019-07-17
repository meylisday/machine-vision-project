<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function sendMail(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'phone' => 'required',
            'body' => 'required'
        ]);

        Mail::send('email', request()->all(), function ($message) {
            $message->subject(Str::words(request()->get('body'), 80));
            $message->from('no-reply@gmail.com', 'lmz.by');
            $message->to(env('MAIL_TO'));
            $message->setBody(request()->get('body'), 'text/html');
            $message->setBody(request()->get('body'), 'text/html');
        });
        return back()->with('success', 'Спасибо, что связались с нами!');
    }
}
