<?php

namespace App\Enums;

enum MessageType: string
{
    const CREATED = "Berhasil menambahkan";
    const UPDATED = "Berhasil memperbarui";
    const DELETED = "Berhasil menghapus";
    const ERROR = "Terjadi kesalahan. Silahkan coba lagi nanti";

    public function message(string $entity = '', ?string $error = null): string
    {
        if ($this === MessageType::ERROR && $error) {
            return "{$this->value} {$error}";
        }
        return "{$this->value} $entity";
    }
}
