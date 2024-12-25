<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Payroll extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false; 
    protected $fillable = ['employee_id', 'month', 'year', 'amount']; 

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string) Str::uuid(); 
        });
    }

    // Relasi dengan Employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
