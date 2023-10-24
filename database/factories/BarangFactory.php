<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Barang>
 */
class BarangFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $jenis = DB::table('jenis_barang')->select('id')->get()->toArray();
        // $kondisi = DB::table('kondisi_barang')->select('id')->get()->toArray();

        return [
            'jenis_id' => strval(rand(1, 6)),
            'kondisi_id' => strval(rand(1, 3)),
            'keterangan' => fake()->paragraph(),
            'kecacatan' => rand(0, 10) > 8 ? fake()->paragraph() : null,
            'jumlah' => rand(0, 100),
            'gambar_url' => 'https://picsum.photos/id/' . rand(1, 1000) . '/200/300'
        ];
    }
}
