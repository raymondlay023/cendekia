<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Publisher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'address',
        'email',
        'phone',
        'logo',
    ];
}
