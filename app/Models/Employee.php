<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Employee extends Model
{
    use HasFactory;

    protected $keyType = 'string'; // Mengatur key type menjadi string
    public $incrementing = false; // Menonaktifkan auto-increment

    protected $fillable = ['name', 'position', 'salary']; // Kolom yang dapat diisi

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string) Str::uuid(); // Menghasilkan UUID saat membuat model
        });
    }

    // Relasi dengan Attendance
    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    // Relasi dengan Payroll
    public function payrolls()
    {
        return $this->hasMany(Payroll::class);
    }
}
