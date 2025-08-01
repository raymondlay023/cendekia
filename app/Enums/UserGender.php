<?php

namespace App\Enums;

enum UserGender: string
{
    const MALE = "Laki-laki";
    const FEMALE = "Perempuan";

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->label,
        ])->values()->toArray();
    }
}
