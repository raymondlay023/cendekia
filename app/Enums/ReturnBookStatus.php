<?php

namespace App\Enums;

enum ReturnBookStatus: string
{
    const RETURNED = "Dikembalikan";
    const CHECKED = "Pengecekan";
    const FINE = "Denda";

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->label,
        ])->values()->toArray();
    }
}
