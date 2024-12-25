<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Mengizinkan semua pengguna untuk membuat karyawan baru
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255', // Nama karyawan harus diisi, berupa string, dan maksimal 255 karakter
            'position' => 'required|string|max:255', // Posisi karyawan harus diisi, berupa string, dan maksimal 255 karakter
            'salary' => 'required|numeric|min:0', // Gaji harus diisi, berupa angka, dan tidak boleh negatif
        ];
    }
}
