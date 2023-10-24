<?php

namespace App\Http\Controllers;

use App\Http\Requests\BarangRequest;
use App\Models\Barang;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class BarangController extends Controller
{
    public function form(): Response
    {
        $jenis = DB::table('jenis_barang')->select('id', 'jenis')->get();
        $kondisi = DB::table('kondisi_barang')->select('id', 'kondisi')->get();

        return Inertia::render('BarangCreate', [
            'jenis' => $jenis,
            'kondisi' => $kondisi
        ]);
    }

    public function create(BarangRequest $request): RedirectResponse
    {
        $imageName = 'storage/images/' . $request->gambar->getClientOriginalName();
        $request->gambar->storeAs('public/' . $imageName);

        Barang::create([
            'jenis_id' => $request->jenis,
            'kondisi_id' => $request->kondisi,
            'keterangan' => $request->keterangan,
            'kecatatan' => $request->kecatatan,
            'jumlah' => $request->jumlah,
            'gambar_url' => $imageName
        ]);

        return Redirect::route('dashboard');
    }

    public function show()
    {
        // return json_encode(DB::table('barang')->select())
    }

    public function jenisBarang()
    {
        return json_encode(DB::table('jenis_barang')->select('id', 'jenis')->get()->toArray());
    }

    public function kondisiBarang()
    {
        return json_encode(DB::table('kondisi_barang')->select('id', 'kondisi')->get()->toArray());
    }
}
