<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FineSetting extends Model
{
    protected $fillable = [
        'late_fee_day_percentage',
        'damage_fee_percentage',
        'lost_fee_percentage',
    ];
}
