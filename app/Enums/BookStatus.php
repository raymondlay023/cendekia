<?php

namespace App\Enums;

enum BookStatus: string
{
    const AVAILABLE = "Tersedia";
    const UNAVAILABLE = "Tidak Tersedia";
    const LOAN = "Dipinjam";
    const LOST = "Hilang";
    const DAMAGED = "Rusak";

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
