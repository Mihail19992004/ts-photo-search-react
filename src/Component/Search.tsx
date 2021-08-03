import React, {FC, useState} from "react";
import SearchIcon from '@material-ui/icons/Search'

interface SearchProps {
    addQuery: (search: string) => void
    setLength: (length: string) => void
}


export const Search: FC<SearchProps> = ({addQuery, setLength}) => {

    const [search, setSearch] = useState<string>('cat')

    return (
        <div className="all__search__block">
            <div className='search__block'>
                <input value={search} type="text" onChange={(e)=> setSearch(e.target.value)} />
                <div className="ico" onClick={()=> {
                    addQuery(search)
                    setSearch('')
                }}>
                    <SearchIcon />
                </div>
            </div>
            <select onChange={(e)=> setLength(e.target.value)} className='select-css' name="" id="">
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
            </select>
        </div>



    )
}