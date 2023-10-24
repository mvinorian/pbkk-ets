import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Barang } from "@/types/barang";
import { FormEventHandler } from "react";
import InputLabel from "@/Components/InputLabel";
import Dropdown from "@/Components/Dropdown";
import { Listbox } from "@headlessui/react";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";
import AreaInput from "@/Components/AreaInput";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm<Barang>();

    const setJenis = (value: string) => setData("jenis", value);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
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
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form
                        encType="multipart/form-data"
                        onSubmit={submit}
                        className="space-y-4 p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg"
                    >
                        <div>
                            <InputLabel htmlFor="jenis" value="Jenis Barang" />

                            <SelectInput
                                id="jenis"
                                name="jenis"
                                options={["ayam", "bebek", "angsa"]}
                                className="mt-1 block w-full"
                                value={data.jenis}
                                isFocused={true}
                                onChange={(e) =>
                                    setData("jenis", e.target.value)
                                }
                            />

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

                            <SelectInput
                                id="kondisi"
                                name="kondisi"
                                options={["ayam", "bebek", "angsa"]}
                                className="mt-1 block w-full"
                                value={data.kondisi}
                                isFocused={true}
                                onChange={(e) =>
                                    setData("kondisi", e.target.value)
                                }
                            />

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
