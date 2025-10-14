<?php

namespace App\Enums;

enum BookCondition: string
{
    const GOOD = 'Sesuai';

    const DAMAGED = 'Rusak';

    const LOST = 'Hilang';

    public static function options(): array
    {
        return collect(self::cases())->map(fn ($item) => [
            'value' => $item->value,
            'label' => $item->value,
        ])->values()->toArray();
    }
}
