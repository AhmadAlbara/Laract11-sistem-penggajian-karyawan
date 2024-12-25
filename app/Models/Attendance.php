<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Attendance extends Model
{
    use HasFactory;

    protected $keyType = 'string'; // Mengatur key type menjadi string
    public $incrementing = false; // Menonaktifkan auto-increment

    protected $fillable = ['employee_id', 'date', 'status']; // Kolom yang dapat diisi

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string) Str::uuid(); // Menghasilkan UUID saat membuat model
        });
    }

    // Relasi dengan Employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
