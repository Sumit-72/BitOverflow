"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = React.useState(searchParams.get("search") || "");

    React.useEffect(() => {
        setSearch(() => searchParams.get("search") || "");
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newSearchParams = new URLSearchParams(searchParams);
        if (search.trim()) {
            newSearchParams.set("search", search.trim());
        } else {
            newSearchParams.delete("search");
        }
        router.push(`${pathname}?${newSearchParams}`);
    };

    const clearSearch = () => {
        setSearch("");
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("search");
        router.push(`${pathname}?${newSearchParams}`);
    };

    return (
        <form className="flex w-full flex-row gap-4" onSubmit={handleSearch}>
            <div className="relative flex-1">
                <Input
                    type="text"
                    placeholder="Search questions by title or content..."
                    className="text-black pr-10"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {search && (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                )}
            </div>
            <button 
                type="submit"
                className="shrink-0 rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
            >
                Search
            </button>
        </form>
    );
};

export default Search;
