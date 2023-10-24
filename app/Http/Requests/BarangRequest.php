<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BarangRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'keterangan' => ['required', 'string', 'max:1024'],
            'kecacatan' => ['string', 'min:0', 'max:1024'],
            'jumlah' => ['required', 'numeric'],
            'gambar' => ['required', 'max:2048', 'mimes:jpg,jpeg,png']
        ];
    }
}
