<?php

namespace App\Jobs;

use App\Mail\OwnerMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\SendEmailTest;
use App\Mail\UserMail;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $details;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->details['page'] == 'appointment-owner') {
            $email = new OwnerMail($this->details);
            Mail::to('info@aestiva.in')->send($email);
        }
        if ($this->details['page'] == 'appointment-user') {
            $email = new UserMail($this->details);
            Mail::to($this->details['email'])->send($email);
        }
        if ($this->details['page'] == 'contact-owner') {
            $email = new OwnerMail($this->details);
            Mail::to('info@aestiva.in')->send($email);
        }
        if ($this->details['page'] == 'contact-user') {
            $email = new UserMail($this->details);
            Mail::to($this->details['email'])->send($email);
        }
        if ($this->details['page'] == 'quotes-owner') {
            $email = new OwnerMail($this->details);
            Mail::to('info@aestiva.in')->send($email);
        }
        if ($this->details['page'] == 'quotes-user') {
            $email = new UserMail($this->details);
            Mail::to($this->details['email'])->send($email);
        }
    }
}
