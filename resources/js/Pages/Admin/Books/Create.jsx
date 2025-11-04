import HeaderTitle from '@/Components/HeaderTitle';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import AppLayout from '@/Layouts/AppLayout';
import flashMessage from '@/lib/utils';
import { Link, useForm } from '@inertiajs/react';
import { IconArrowLeft, IconBooks } from '@tabler/icons-react';
import { useRef } from 'react';
import { toast } from 'sonner';

export default function Create(props) {
    const fileInputCover = useRef(null);
    const { data, setData, reset, post, processing, errors } = useForm({
        title: '',
        author: '',
        publication_year: null,
        isbn: '',
        language: '',
        number_of_pages: '',
        cover: null,
        price: 0,
        category_id: '',
        publisher_id: '',
        total: 0,
        _method: props.page_settings.method,
    });

    const onHandleChange = (e) => setData(e.target.name, e.target.value);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(props.page_settings.action, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);
            },
        });
    };

    const onHandleReset = () => {
        reset();
        fileInputCover.current.value = null;
    };

    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconBooks}
                />
                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.books.index')}>
                        <IconArrowLeft className="size-4" />
                        Kembali
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-6">
                    <form className="space-y-6" onSubmit={onHandleSubmit}>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="title">Judul</Label>
                            <Input
                                name="title"
                                id="title"
                                type="text"
                                placeholder="Masukkan judul"
                                value={data.title}
                                onChange={onHandleChange}
                            />
                            {errors.title && <InputError message={errors.title} />}
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="publication_year">Tahun terbit</Label>
                            <Select
                                defaultValue={data.publication_year}
                                onValueChange={(value) => setData('publication_year', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue>
                                        {props.page_data.publicationYears.find(
                                            (publication_year) => publication_year == data.publication_year,
                                        ) ?? 'Pilih tahun terbit'}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {props.page_data.publicationYears.map((publication_year, index) => (
                                        <SelectItem key={index} value={publication_year}>
                                            {publication_year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.publication_year && <InputError message={errors.publication_year} />}
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="cover">Cover</Label>
                            <Input
                                name="cover"
                                id="cover"
                                type="file"
                                onChange={(e) => setData(e.target.name, e.target.files[0])}
                                ref={fileInputCover}
                            />
                            {errors.cover && <InputError message={errors.cover} />}
                        </div>
                        <div className="flex justify-end px-2">
                            <Button type="button" variant="ghost" size="lg" onClick={onHandleReset}>
                                Reset
                            </Button>
                            <Button type="submit" variant="orange" size="lg" disabled={processing}>
                                Save
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

Create.layout = (page) => <AppLayout children={page} title={page.props.page_settings.title} />;
