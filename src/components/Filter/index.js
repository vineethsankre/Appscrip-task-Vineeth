import './index.css'

const Filter = props => {
    const {selectStatus, selectedId, changeId} = props
    const onChangeOption=event=>{
        changeId(event.target.value)
    }

    return(
        <select className="select-card-select" value={selectedId} onChange={onChangeOption}>
            {selectStatus.map(eachItem=>(
                <option key={eachItem.selectId} value={eachItem.selectId} className="select-card-option">
                    {eachItem.value}
                </option>
            ))}
        </select>
    )
}

export default Filter