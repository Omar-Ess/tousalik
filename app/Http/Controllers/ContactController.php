<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Section;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Mail\Markdown;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Mail;
use App\Notifications\ContactNotification;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{

    public function index()
    {
        return view('pages.contact');
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required'
        ]);
        $users = User::all();
        $sender = (object)[
            'name' => $request->name,
            'email' => $request->email,
        ];
        // notifiy users of emails
        Notification::send($users, new ContactNotification($request->subject, $request->message, $sender));
        // send email to the actual email section content
        $email = Section::where('name', 'email')->pluck('content')->first();
        if (!$email  || $email == '') {
            $email = "tousalik@gmail.com";
        }
        try {
            $markdown = Container::getInstance()->make(Markdown::class);
            $html = $markdown->render('emails.contact', ['subject' => $request->subject,  'sender' => $sender, 'msg' => $request->message]);
            Mail::html($html, function ($message) use ($email, $sender) {
                $message->to($email)
                    ->replyTo($sender->email)
                    ->subject(request()->subject);
            });
            // Mail::to($email)->send(new ContactMail($request->subject, $request->message, $sender));
            return redirect()->route('contact.index')->with('success_message', 'merci de nous avoir contacté, nous vous répondrons dans les plus brefs délais');
        } catch (\Exception $ex) {
            dd($ex);
        }
    }
}
