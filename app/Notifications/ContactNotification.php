<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\BroadcastMessage;


class ContactNotification extends Notification
{
    use Queueable;
    public $subject;
    public $message;
    public $sender;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($subject, $message, $sender)
    {
        $this->subject = $subject;
        $this->message = $message;
        $this->sender = $sender;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast' ];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    // public function toMail($notifiable)
    // {
    //     return (new MailMessage)
    //         ->from($this->sender->email, $this->sender->name)
    //         ->subject($this->subject)
    //         ->line($this->message);
    // }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'email' => $this->sender->email,
            'name' => $this->sender->name,
            'subject' => $this->subject,
            'message' => $this->message,

        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'email' => $this->sender->email,
        ]);
    }
}
