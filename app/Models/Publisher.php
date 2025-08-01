<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Publisher extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'address',
        'email',
        'phone',
        'logo',
    ];
}
