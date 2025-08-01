<?php

namespace App\Enums;

enum FinePaymentStatus: string
{
    const PENDING = "Tertunda";
    const SUCCESS = "Sukses";
    const FAILED = "Gagal";

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
