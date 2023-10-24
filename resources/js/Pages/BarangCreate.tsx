import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Barang } from "@/types/barang";
import { FormEventHandler, useEffect, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import Dropdown from "@/Components/Dropdown";
import { Listbox } from "@headlessui/react";
import InputError from "@/Components/InputError";
import AreaInput from "@/Components/AreaInput";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({
    auth,
    jenis,
    kondisi,
}: PageProps<{
    jenis: { id: number; jenis: string }[];
    kondisi: { id: number; kondisi: string }[];
}>) {
    const { data, setData, post, processing, errors } = useForm<Barang>({
        jenis: 1,
        kondisi: 1,
        jumlah: 0,
        keterangan: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("barang.create"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Barang
                </h2>
            }
        >
            <Head title="Tambah Barang" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form
                        encType="multipart/form-data"
                        onSubmit={submit}
                        className="space-y-4 p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg"
                    >
                        <div>
                            <InputLabel htmlFor="jenis" value="Jenis Barang" />

                            <select
                                id="jenis"
                                name="jenis"
                                value={data.jenis}
                                onChange={(e) =>
                                    setData("jenis", parseInt(e.target.value))
                                }
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                            >
                                {jenis.map(({ id, jenis }, index) => (
                                    <option key={index} value={id}>
                                        {jenis}
                                    </option>
                                ))}
                            </select>

                            <InputError
                                message={errors.jenis}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="kondisi"
                                value="Kondisi Barang"
                            />

                            <select
                                id="kondisi"
                                name="kondisi"
                                value={data.kondisi}
                                onChange={(e) =>
                                    setData("kondisi", parseInt(e.target.value))
                                }
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                            >
                                {kondisi.map(({ id, kondisi }, index) => (
                                    <option key={index} value={id}>
                                        {kondisi}
                                    </option>
                                ))}
                            </select>

                            <InputError
                                message={errors.kondisi}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="keterangan"
                                value="Keterangan Barang"
                            />

                            <AreaInput
                                id="keterangan"
                                name="keterangan"
                                value={data.keterangan}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("keterangan", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.keterangan}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="kecacatan"
                                value="Kecacatan Barang"
                            />

                            <AreaInput
                                id="kecacatan"
                                name="kecacatan"
                                value={data.kecacatan}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("kecacatan", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.kecacatan}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="jumlah"
                                value="Jumlah Barang"
                            />

                            <TextInput
                                id="jumlah"
                                name="jumlah"
                                value={data.jumlah}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("jumlah", parseInt(e.target.value))
                                }
                            />

                            <InputError
                                message={errors.jumlah}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="gambar"
                                value="Gambar Barang"
                            />

                            <TextInput
                                type="file"
                                id="gambar"
                                name="gambar"
                                className="mt-1 block w-full file:hidden px-4 py-2"
                                onChange={(e) =>
                                    setData("gambar", e.target.files?.[0])
                                }
                            />

                            <InputError
                                message={errors.gambar}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                type="submit"
                                className="ml-4"
                                disabled={processing}
                            >
                                Tambah barang
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
