<?php

namespace Database\Seeders;

use App\Models\JenisBarang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JenisBarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('jenis_barang')->insert([
            ['jenis' => 'Makanan'],
            ['jenis' => 'Minuman'],
            ['jenis' => 'Perlengkapan Rumah'],
            ['jenis' => 'Peralatan Masak'],
            ['jenis' => 'Kecantikan'],
            ['jenis' => 'Kebersihan'],
        ]);
    }
}
