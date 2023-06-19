interface propsFooterGridList {
    props : {
        text : Array<string>
    }
}

export default function FooterGridList({props} : propsFooterGridList) {
    const {text} = props
    return (
        <ul>
            {text.map((m,i) => {
                return <li key={i} className="py-2 text-sm font-light hover:font-bold">{m}</li>
            })}
        </ul>
    )
}
