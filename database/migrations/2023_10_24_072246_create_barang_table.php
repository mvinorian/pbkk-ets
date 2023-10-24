<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barang', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('jenis_id')->unsigned()->index()->nullable();
            $table->foreign('jenis_id')->references('id')->on('jenis_barang');
            $table->bigInteger('kondisi_id')->unsigned()->index()->nullable();
            $table->foreign('kondisi_id')->references('id')->on('kondisi_barang');
            $table->string('keterangan');
            $table->string('kecacatan')->nullable();
            $table->integer('jumlah');
            $table->string('gambar_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barang');
    }
};
