<?php

namespace App\Models;

use App\Scopes\SiteScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;

class CallBackModel extends Model
{
    use HasFactory;

    protected $table = 'callback';

    protected $primaryKey = 'id';
    public $timestamps = false;
    const CREATED_AT = 'created_at';

    protected $fillable = [
        "name",
        "mobile",
        "request_url",
        "referral_url",
        "source_type"
    ];


}
