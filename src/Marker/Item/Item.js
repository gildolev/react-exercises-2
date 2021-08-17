import React, { useState, useEffect } from 'react'

export default function Item(props) {
    const { item, value } = props;
    const [changeItem, setChangeItem] = useState(item);
    useEffect(() => {
        if (item.includes(value)) {
            let row = item.replaceAll(value, "<mark>" + value + "</mark>")
            setChangeItem(row)
        }
    })


    return (
        <li>
            <div dangerouslySetInnerHTML={{
                __html: changeItem
            }} />
        </li>
    )
}
