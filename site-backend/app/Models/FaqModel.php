<?php

namespace App\Models;

use App\Scopes\SiteScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Session;

class FaqModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'faq';

    protected $primaryKey = 'faq_id';

    protected $dates = [
        'deleted_at',
    ];

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    const DELETED_AT = 'deleted_at';

    protected $fillable = [
        "faq_key",
        "question",
        "answer",
        "status",
        "faq_status",
        "faq_attr",
        "created_by",
        "updated_by",
        "deleted_by",
    ];

    
}
