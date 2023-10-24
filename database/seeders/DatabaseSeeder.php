<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(JenisBarangSeeder::class);
        $this->call(KondisiBarangSeeder::class);
        $this->call(BarangSeeder::class);
    }
}
