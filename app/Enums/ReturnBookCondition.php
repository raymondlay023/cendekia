<?php

namespace App\Enums;

enum ReturnBookCondition: string
{
    const RETURNED = "Dikembalikan";
    const DAMAGED = "Rusak";
    const LOST = "Hilang";

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
