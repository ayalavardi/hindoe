import { useSelector } from 'react-redux'

export const Users = () => {

    //get from state
    //שליפות מהסטור באמצתעות סלקטור
    const list = useSelector(x => x.users)
    // const list = useSelector(store => store.users)

    return <>
        <h1>{list.length}</h1>
        {list.map((u, index) => <p key={index}>{u.id}{u.name} - {u.email} - {u.password}</p>)}
    </>
}